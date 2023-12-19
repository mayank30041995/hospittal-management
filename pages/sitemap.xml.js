import appConfig from '@/utils/appConfig'
import { fetchSearchJSON } from '@/utils/apiCalls'
import Head from 'next/head'

const date = new Date().toISOString()

const XmlEscape = (str) => {
  if (!str || str.constructor !== String) {
    return ''
  }

  return str.replace(/[\"&><]/g, function (match) {
    switch (match) {
      case '"':
        return '&quot;'
      case '&':
        return '&amp;'
      case '<':
        return '&lt;'
      case '>':
        return '&gt;'
    }
  })
}

const slugify = (str) =>
  str
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')

function generateSiteMap(...args) {
  const [URL, doctors, hospitals, speciality, conditions, treatments] = args

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
     <!-- Add the static URLs manually -->
     <url>
       <loc>${URL}</loc>
       <lastmod>${date}</lastmod>
     </url>
     ${doctors
       .map((doctor) => {
         return (
           doctor &&
           `<url>
         <loc>${XmlEscape(`${URL}/doctor?id=${doctor?.key}&type=Doctor`)}</loc>
          <lastmod>${date}</lastmod>
     </url>
   `
         )
       })
       .join('')}

     ${hospitals
       .map((hospital) => {
         return (
           hospital &&
           `<url>
         <loc>${XmlEscape(
           `${URL}/hospital?id=${hospital?.key}&type=Hospital`
         )}</loc>
          <lastmod>${date}</lastmod>
     </url>
   `
         )
       })
       .join('')}

    ${speciality
      .map((spec) => {
        return (
          spec &&
          `<url>
         <loc>${XmlEscape(
           `${URL}/speciality?value=${slugify(spec?.value)}&id=${
             spec?.key
           }&type=Hospital`
         )}</loc>
          <lastmod>${date}</lastmod>
     </url>
   `
        )
      })
      .join('')}

    ${conditions
      .map((cond) => {
        return (
          cond &&
          `<url>
         <loc>${XmlEscape(
           `${URL}/condition?value=${slugify(cond?.value)}&id=${
             cond?.key
           }&speciality=${cond?.speciality}&type=Hospital`
         )}</loc>
          <lastmod>${date}</lastmod>
     </url>
   `
        )
      })
      .join('')}

    ${treatments
      .map((treat) => {
        return treat?.speciality
          ? `<url>
         <loc>${XmlEscape(
           `${URL}/treatment?value=${slugify(treat?.value)}&id=${
             treat?.key
           }&speciality=${treat?.speciality}&type=Hospital`
         )}</loc>
          <lastmod>${date}</lastmod>
     </url>
   `
          : `<url>
         <loc>${XmlEscape(
           `${URL}/treatment?value=${slugify(treat?.value)}&id=${
             treat?.key
           }&type=Hospital`
         )}</loc>
          <lastmod>${date}</lastmod>
     </url>
   `
      })
      .join('')}

     
   </urlset>
 `
}

export async function getServerSideProps({ req, res }) {
  const URL =
    req.headers?.host === 'localhost:3000'
      ? `http://${req.headers.host}`
      : `https://${req.headers.host}`

  const doctors = await fetchSearchJSON(
    `${appConfig.socketURL}/home/search?q=${''}&cat=${'doctor'}&limit=-1`
  ).then(
    (body) =>
      body?.length > 0 &&
      body?.map((user) => {
        return {
          value: user.label,
          key: user.id,
        }
      })
  )
  const hospitals = await fetchSearchJSON(
    `${appConfig.socketURL}/home/search?q=${''}&cat=${'hospital'}&limit=-1`
  ).then(
    (body) =>
      body?.length > 0 &&
      body?.map((user) => {
        return {
          value: user.label,
          key: user.id,
        }
      })
  )
  const speciality = await fetchSearchJSON(
    `${appConfig.socketURL}/home/search?q=${''}&cat=${'speciality'}&limit=-1`
  ).then(
    (body) =>
      body?.length > 0 &&
      body?.map((user) => {
        return {
          value: user.label,
          key: user.id,
        }
      })
  )
  const conditions = await fetchSearchJSON(
    `${appConfig.socketURL}/conditions?_limit=-1`
  ).then(
    (body) =>
      body?.length > 0 &&
      body?.map((user) => {
        return {
          value: user.name,
          key: user.id,
          ...(user.speciality && {
            speciality: user.speciality.id,
          }),
        }
      })
  )
  const treatments = await fetchSearchJSON(
    `${appConfig.socketURL}/treatments?_limit=-1`
  ).then(
    (body) =>
      body?.length > 0 &&
      body?.map((user) => {
        return {
          value: user.name,
          key: user.id,
          ...(user.specialities &&
            user.specialities.length > 0 && {
              speciality: user.specialities[0].id,
            }),
        }
      })
  )

  // Generate the XML sitemap with the blog data
  const sitemap = await generateSiteMap(
    URL,
    doctors,
    hospitals,
    speciality,
    conditions,
    treatments
  )

  res.setHeader('Content-Type', 'text/xml')
  // Send the XML to the browser
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default function SiteMap() {
  return (
    <Head>
      <title>HOSPLAN</title>
      <meta
        name="description"
        content="Search amongst finest specialist Doctors and get opinion, tele consultations, and schedule appointments"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
