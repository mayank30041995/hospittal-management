export function getMatch(number) {
  switch (number) {
    case 5:
      return [5]
    case 4:
      return [5, 4]
    case 3:
      return [5, 4, 3]
    case 2:
      return [5, 4, 3, 2]
    case 1:
      return [5, 4, 3, 2, 1]
    case 0:
      return [5, 4, 3, 2, 1]
    case '0':
      return [5, 4, 3, 2, 1]
  }
}
