export function getCleanDate(str) {
  let dt = new Date(str)
  return dt.toLocaleDateString()
}

/**
 * function to scroll window screen
 */
export function scrollTopHandlder(e) {
  if (isEdgeBrowser() || isSafariBrowser()) {
    let pos = window.pageYOffset
    let timer = setInterval(() => {
      if (pos <= 0) clearInterval(timer)
      window.scrollBy(0, -40)
      pos -= 40
    }, 1)
  } else {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  e.preventDefault()
}

export function scrollTopInit() {
  if (document.querySelector('#scroll-top')) {
    if (window.pageYOffset > 600) {
      document.querySelector('#scroll-top').classList.add('fixed')
    } else {
      document.querySelector('#scroll-top').classList.remove('fixed')
    }
  }
}

/**
 * Is Firefox Explorer?
 * @return { bool }
 */
export const isFirefoxBrowser = function () {
  let sUsrAg = navigator.userAgent
  if (sUsrAg.indexOf('Firefox') > -1) return true
  return false
}

/**
 * function to detect safari browser
 * @return {bool}
 */
export const isSafariBrowser = function () {
  let sUsrAg = navigator.userAgent
  if (sUsrAg.indexOf('Safari') !== -1 && sUsrAg.indexOf('Chrome') === -1)
    return true
  return false
}

/**
 * function to detect Edge browser
 * @return {bool}
 */
export const isEdgeBrowser = function () {
  let sUsrAg = navigator.userAgent
  if (sUsrAg.indexOf('Edge') > -1) return true
  return false
}

export const cleanTags = (input, allowed = '<b><i><u><p><ol><ul><li><br>') => {
  allowed = (
    ((allowed || '') + '').toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []
  ).join('') // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
  let tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
    commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi
  return input.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
    return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : ''
  })
}

export const removeXSSAttacks = function (html) {
  const SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi

  // Removing the <script> tags
  while (SCRIPT_REGEX.test(html)) {
    html = html.replace(SCRIPT_REGEX, '')
  }

  // Removing all events from tags...
  html = html.replace(/ on\w+="[^"]*"/g, '')

  return {
    __html: html,
  }
}

export const matchEmphasize = function (name) {
  // let regExp = new RegExp( search, "i" );
  let regExp = new RegExp('ab+c', 'i')
  return name.replace(regExp, (match) => '<strong>' + match + '</strong>')
}
