var search = function(nums, target) {
    let start = 0, end = nums.length - 1;

    while(start <= end) {
        const mid = Math.floor((end + start) / 2);
        if (nums[mid] === target) {
            return mid;
        }

        if (nums[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return -1;
};

var nums = [-1,0,3,5,9,12];
var target = 9;

console.log(search(nums, target));
