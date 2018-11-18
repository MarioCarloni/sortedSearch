const {quickSort} = require('./quickSort')
const {binarySearch} = require('./binarySearch')

const randomItem = Math.floor(Math.random() * 1000000)
let myArray = []
let result

for (let i = 0; i < 1000000; i++) {
    const randomInt = Math.floor(Math.random() * 1000000)
    myArray.push(randomInt)
}

myArray = quickSort(myArray)
result = binarySearch(myArray, randomItem)

console.log(result)