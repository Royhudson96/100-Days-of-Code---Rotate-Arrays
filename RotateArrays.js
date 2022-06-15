// Given an array, rotate the array to the right by k steps, where k is non-negative.
//Input: nums = [1,2,3,4,5,6,7], k = 3
//Output: [5,6,7,1,2,3,4]

let nums = [1,2,3,4,5,6,7];
let k = 3
const rotateArray = (nums,numberOfShifts) => {
  for(let i = 0; i < numberOfShifts; i++) {
    nums.unshift(nums.pop())
  };
  return nums;
}


console.log(rotateArray(nums,k));