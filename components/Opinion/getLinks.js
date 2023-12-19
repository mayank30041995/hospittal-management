function getLinks(doctors) {
  const links = [
    {
      id: 1,
      name: 'home',
      label: 'Home',
      path: '/',
      forward: true,
      underline: false,
    },
    {
      id: 2,
      name: 'doctors',
      label: 'Doctors',
      forward: true,
      // path: '/doctor',
      underline: true,
    },
    {
      id: 3,
      name: 'name',
      label: (doctors && doctors.length && doctors[0].Name) || '',
      // path: '/name',
      underline: true,
    },
  ]

  return links
}
export { getLinks }
