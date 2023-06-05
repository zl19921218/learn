/*
 * @Author: 小石头
 * @Date: 2022-11-01 10:17:33
 * @LastEditors: 小石头
 * @LastEditTime: 2023-06-05 10:32:00
 * @Description: 选择排序  寻找最小的元素
 */

function selectionSort(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        let min = nums[i],
            minIndex = i;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < min) {
                min = nums[j];
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            const temp = nums[i];
            nums[i] = min;
            nums[minIndex] = temp;
        }
    }

    return nums;
}

const arr = [0, 2, 5, 8, 3, 2];

console.log(selectionSort(arr));
