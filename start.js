// Import sort/search functions
const {quickSort} = require('./quickSort')
const {binarySearch} = require('./binarySearch')

// Instantiate immutable and mutable properties 
const randomItem = Math.floor(Math.random() * 1000000)
let randomArr = []
let result

// Fill array with random integers between 1 - 1,000,000
for (let i = 0; i < 1000000; i++) {
    const randomInt = Math.floor(Math.random() * 1000000)
    randomArr.push(randomInt)
}

// Sort random array using quicksort algo
randomArr = quickSort(randomArr)

// Save and log search result
result = binarySearch(randomArr, randomItem)
console.log(result)
