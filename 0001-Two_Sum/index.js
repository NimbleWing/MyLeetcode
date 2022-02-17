/*
 * @Author: Pure <305737824@qq.com>
 * @CreateTime: 2022-02-16 17:49:33
 * @LastEditors: Pure <305737824@qq.com>
 * @LastEditTime: 2022-02-17 16:22:24
 * @Description: 0001-Two_Sum 两数之和

 */

/**
 * 
 * @param {number[]} nums 
 * @param {number} target 
 * @return {number[]}
 * 解题思路：暴力破解-线性查找
 * 1.循环遍历nums,获得当前元素和target的差值difference
 * 2.判断nums的后续元素是否包含difference(线性查找),包含则返回结果
 * 3.时间复杂度：O(n^2)
 */
const linerTwoSum = (nums, target) =>{
    
    const len = nums.length;
    for(let i = 0; i<len;++i) {
       let difference = target - nums[i];
       for(let j = i+1; j<len;++j) {
           if(nums[j] === difference) {
               return [i,j];
           }
       }
    }
    return [];
}
/**
 * 
 * @param {number[]} nums 
 * @param {number} target 
 * @return {number[]}
 * 解题思路：hash查找
 * 1.循环遍历nums,获得当前元素和target的差值difference
 * 2.判断nums的后续元素是否包含difference(hash查找),包含则返回结果
 * 3.时间复杂度：O(n)
 */
const hashTwoSum = (nums, target) =>{
    const len = nums.length;
    const map = new Map();
    for(let i = 0; i<len;++i) {
       let difference = target - nums[i];
       if(map.has(difference)) {
           const index = map.get(difference);
           return [i, index]
       }
       map.set(nums[i],i);
    }
    return [];
}