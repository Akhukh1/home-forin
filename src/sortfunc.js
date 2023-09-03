export default function orderByProps(player, sortName) {
  const array1 = [];
  const array2 = [];
  for (const prop in player) {
    if (prop === sortName[0]) {
      const prorMeaning = {
        key: sortName[0],
        value: player[sortName[0]],
      };
      array1[0] = prorMeaning;
    } else if (prop === sortName[1]) {
      const prorMeaning = {
        key: sortName[1],
        value: player[sortName[1]],
      };
      array1[1] = prorMeaning;
    } else {
      const prorMeaning = {
        key: prop,
        value: player[prop],
      };
      array2.push(prorMeaning);
    }
  }
  array2.sort((a, b) => (a.key > b.key ? 1 : -1));
  const sortArray = [...array1, ...array2];
  return sortArray;
}
