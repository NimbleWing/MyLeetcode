/*
 * @Author: Pure <305737824@qq.com>
 * @CreateTime: 2022-04-07 17:01:09
 * @LastEditors: Pure <305737824@qq.com>
 * @LastEditTime: 2022-04-08 10:49:45
 * @Description: 0014-Longest_Common_Prefix 最长公共前缀
 */
/**
 * @param {string[]} strs
 * @return {string}
 * 解题思路：
 * 1.将字符串数组按长短排序，获取最短字符串
 * 2.遍历最短字符串，比较每个字符串的每个字符是否相同，相同则继续，不同则结束
 * 3.返回最长公共前缀
 * 
 */
 const longestCommonPrefix = function(strs) {
    if(strs.length===0) {
        return '';
    }
    strs.sort((a,b)=>a.length-b.length);
    let shortest = strs[0];
    let i = 0;
    while(i<shortest.length) {
        let char = shortest[i];
        for(let j=1;j<strs.length;++j) {
            if(strs[j][i]!==char) {
                return shortest.slice(0,i);
            }
        }
        i++;
    }
    return shortest;
};