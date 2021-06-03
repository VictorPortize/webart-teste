export function sortNumberArray(list: Array<number>): Array<number> {
  return list.sort((a, b) => {
    if (a > b) {
      return 1;
    } else if (a === b) {
      return 0;
    } else {
      return -1;
    }
  });
}
