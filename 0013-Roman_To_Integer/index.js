/*
 * @Author: Pure <305737824@qq.com>
 * @CreateTime: 2022-04-06 15:33:07
 * @LastEditors: Pure <305737824@qq.com>
 * @LastEditTime: 2022-04-07 16:58:18
 * @Description: 0013-Roman_To_Integer 罗马数字转整数
 */
/**
 * @param {string} s
 * @return {number}
 * 解题思路：
 * 1.遍历字符串，记录当前索引字符的值current和下一索引字符的值next
 * 2.如果next存在，并且next大于current,根据规则，结果应该加上next-current的值，并且将索引增加1
 * 3.否则，结果应该加上current的值
 */
 const romanToInt = function(s) {
    const symbolValues = new Map();
    symbolValues.set('I', 1);
    symbolValues.set('V', 5);
    symbolValues.set('X', 10);
    symbolValues.set('L', 50);
    symbolValues.set('C', 100);
    symbolValues.set('D', 500);
    symbolValues.set('M', 1000);
    let result = 0;
    for(let i=0;i<s.length;++i) {
        let current = symbolValues.get(s[i]);
        let next = symbolValues.get(s[i+1]);
        if(next && next > current) {
            result += next - current;
            i++;
        } else {
            result += current;
        }
    }
    return result;
};