/**
 * It loops through the array and checks if the target is equal to the current index. If it is, it
 * returns the index
 * @param arr - The array that we are searching through.
 * @param target - The target value that we are looking for in the array.
 * @returns The index of the target.
 */
const linearSearch = (arr, target) => {
  /* Looping through the array and checking if the target is equal to the current index. If it is, it
  returns the index. */
  for (let i = 0; i < arr.length; i++) {
    /* Checking if the current index is equal to the target. If it is, it returns the index. */
    if (arr[i] === target) {
      return `Target is found at position ${i}`;
    }
  }
  /* Returning the string `Target not found` if the target is not found in the array. */
  return `Target not found`;
};
console.log(linearSearch([1, 2, 3, 4, 5, 78, 99, 111, 400, 7, 300, 20], 5));
