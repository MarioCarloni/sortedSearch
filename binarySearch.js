// Given sorted array, find selected element (or not)
function binarySearch(sortedArr, searchItem) {

  // Instantiate mutable properties
  let low = 0
  let high = sortedArr.length - 1
  let mid
  let guessed
  
  // Loop through array
	while(low <= high) {

    // Assign midpoint using array mean
    mid = Math.floor((low + high) / 2),
    guessed = sortedArr[mid];
    
    // Return selected element if found
    if(guessed === searchItem) {
      return 'Found value ' + guessed + ' at position ' + mid
    }
    
    // Otherwise, converge and recalculate until found
    if(searchItem < guessed) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  
  return null;
}

module.exports = {
  binarySearch: binarySearch
}