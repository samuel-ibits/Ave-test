
/**
 * Function to find two indices of numbers in an array that sum to a specific target.
 * @param {number[]} nums - The array of integers.
 * @param {number} target - The target sum.
 * @return {number[]} - Indices of the two numbers that add up to the target.
 */
function twoSum(nums, target) {
    const numMap = new Map(); // Create a map to store numbers and their indices

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Calculate the required number to reach the target
        
        // Check if the complement exists in the map
        if (numMap.has(complement)) {
            return [numMap.get(complement), i]; // Return the indices of the two numbers
        }
        
        // Store the current number and its index in the map
        numMap.set(nums[i], i);
    }

    throw new Error("No two sum solution"); // Throw error if no solution found
}

// Example usage
const numbers = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(numbers, target)); // Output: [0, 1]
