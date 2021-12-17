
function average(numbers) {
  
  let newNumbers = numbers.filter((data)=> isNaN(data) === false)
  return newNumbers.reduce((p, c)=> p + c, 0) / newNumbers.length;
}

module.exports = {average};
