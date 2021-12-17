
function average(numbers) {
  
  let new_numbers = numbers.filter((data)=> isNaN(data) === false)
  return new_numbers.reduce((p, c)=> p + c, 0) / z.length;
}

module.exports = {average};
