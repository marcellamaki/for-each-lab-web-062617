function iterativeLog(array) {
  array.forEach((element, i) => {
    console.log(`${i}: ${element}`)
  })
}


function iterate(callback) {
 const dinners = ["pizza", "pasta", "noodles"]
 dinners.forEach(callback)
 return dinners
}



function doToArray(array, callback) {
 array.forEach(callback)
}
