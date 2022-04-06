/*
 * @Author: Pure <305737824@qq.com>
 * @CreateTime: 2022-04-06 10:54:18
 * @LastEditors: Pure <305737824@qq.com>
 * @LastEditTime: 2022-04-06 15:27:53
 * @Description: 0009-Palindrome_Number 回文数
 */
/**
 * @param {number} x
 * @return {boolean}
 * 解题思路：不转为字符串，直接判断
 * 1.先直接排除不可能为回文数的情况：负数、10的倍数
 * 2.反转x一半的数字，判断是否相等
 * 3.时间复杂度：O(log n)
 */
const isPalindrome = function(x) {
   if(x<0||x%10===0&&x!==0) {
       return false;
   }
    let reverse = 0;
    while(x>reverse) {
        reverse = reverse*10+x%10;
        x = Math.floor(x/10);
    }
    return x===reverse||x===Math.floor(reverse/10);
};