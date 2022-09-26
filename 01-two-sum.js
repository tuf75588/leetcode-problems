function twoSum(nums, target) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let test = 0;
    for (let j = 0; j < nums.length; j++) {
      if (i === j) {
        continue ;
      }
      test = nums[i] + nums[j];
      if (test === target) {
        result.push([i, j]);
      }
    }  
  }
  return result[0];
    
}

