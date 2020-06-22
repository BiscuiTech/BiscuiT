export default (arr) => {
  return arr.filter((el) => {
    const keys = Object.keys(el);
    const check = keys.flatMap((key) => {
      return el[key].published;
    });
    return check.reduce((tally, bool) => (bool == true ? true : false));
  });
};
