
function average(numbers) {

  // remove NaN in new array
  let filteredNumbers = numbers.filter((data)=> isNaN(data) === false)
  // convert strings to numbers
  let newNumbers = filteredNumbers.map((data)=> parseInt(data))
  // calculate the average
  return newNumbers.reduce((p, c)=> p + c, 0) / newNumbers.length;
}


module.exports = {average};
