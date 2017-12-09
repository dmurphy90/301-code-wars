function find_average(array) {
  let avg = array.reduce((acc, curr) => acc + curr / array.length);
  let rounded = parseInt(avg)
  return rounded;
}
