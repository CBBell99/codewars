const twoSum = function (nums, target) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    const j = target - nums[i];
    if (typeof hash[j] !== "undefined") {
      return [hash[j], i];
    }
    hash[nums[i]] = i;
  }
  return [];
};
