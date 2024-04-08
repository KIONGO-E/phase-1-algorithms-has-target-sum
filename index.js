/**
 * Checks if there are two numbers in an array that add up to a target sum.
 * @param {number[]} array - The input array of numbers.
 * @param {number} target - The target sum to check for.
 * @returns {boolean} - True if two numbers sum up to target, false otherwise.
 */
function hasTargetSum(array, target) {
  const seenNumbers = {};

  for (const number of array) {
    const complement = target - number;
    if (complement in seenNumbers) {
      // Found a pair that sums up to the target
      return true;
    }
    seenNumbers[number] = true;
  }

  // No pair found
  return false;
}

// Custom tests
console.log("Expecting: true");
console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

console.log("");

console.log("Expecting: true");
console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

console.log("");

console.log("Expecting: false");
console.log("=>", hasTargetSum([1, 2, 5], 4));

console.log("");

console.log("Expecting: false");
console.log("=>", hasTargetSum([4], 4));

console.log("");

console.log("Expecting: true");
console.log("=>", hasTargetSum([-1, 2, 7, 4], 6));

module.exports = hasTargetSum;
