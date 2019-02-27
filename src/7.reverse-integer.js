/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 *
 * https://leetcode.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (25.10%)
 * Total Accepted:    607K
 * Total Submissions: 2.4M
 * Testcase Example:  '123'
 *
 * Given a 32-bit signed integer, reverse digits of an integer.
 *
 * Example 1:
 *
 *
 * Input: 123
 * Output: 321
 *
 *
 * Example 2:
 *
 *
 * Input: -123
 * Output: -321
 *
 *
 * Example 3:
 *
 *
 * Input: 120
 * Output: 21
 *
 *
 * Note:
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of
 * this problem, assume that your function returns 0 when the reversed integer
 * overflows.
 *
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var max = Math.pow(2, 31) - 1;
  var min = -Math.pow(2, 31);
  var isNegative = x < 0;
  var strX = "" + Math.abs(x);
  var len = strX.length;
  var temp = "";
  for (var i = len - 1; i >= 0; i--) {
    temp += strX[i];
  }

  var result = isNegative ? +("-" + temp) : +temp;

  return result >= min && result <= max ? result : 0;
};
module.exports = { reverse };
