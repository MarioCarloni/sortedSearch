// Recursively separates array into partitions less or greater than the pivot value
// Returns concatenated array (less, equal, greater) sorted
const quickSort = arr => {

  // Edge case: Return array of length 1
  if (arr.length < 2) return arr;
  
  // Randomly select array index as pivot
  // https://cs.stackexchange.com/questions/35994/why-does-randomized-quicksort-have-on-log-n-worst-case-runtime-cost
  const pivot = arr[Math.floor(Math.random() * arr.length)];
  
  // Instantiate mutable arrays
  let left = [];
  let equal = [];
  let right = [];

  // Partition arr elements less or greater than pivot
  for (let i = 0; i < arr.length; i++) {

    const element = arr[i];
    
    if (element > pivot) right.push(element);
    else if (element < pivot) left.push(element);
    else equal.push(element);
  }
  
  // Run above logic on partitions, then concatenate into single array
  return quickSort(left).concat(equal).concat(quickSort(right));
};

  module.exports = {

    quickSort: quickSort
  }