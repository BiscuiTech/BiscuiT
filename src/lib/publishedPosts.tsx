export default (arr) =>
  arr.filter((el) => {
    const keys = Object.keys(el)
    const check = keys.flatMap((key) => el[key].published)
    return check.reduce((tally, bool) => (bool == true ? true : false))
  })
