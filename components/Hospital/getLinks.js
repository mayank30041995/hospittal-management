function getLinks(Name) {
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
      name: 'hospitals',
      label: 'Hospitals',
      forward: true,
      // path: '/doctor',
      underline: true,
    },
    {
      id: 3,
      name: 'name',
      label: Name || '',
      // path: '/name',
      underline: true,
    },
  ]
  return links
}
export { getLinks }
