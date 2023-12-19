function getLinks(resultType, defaultValue) {
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
      name: resultType,
      label: resultType,
      forward: true,
      // path: '/doctor',
      underline: true,
    },
    {
      id: 3,
      name: 'name',
      label: defaultValue,
      // path: '/name',
      underline: true,
    },
  ]
  return links
}
export { getLinks }