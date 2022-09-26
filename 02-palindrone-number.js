const isPalindrome = function(number) {
  const hasNegative = /\D+/.test(number);
  if (hasNegative) {
    return false;
  }
  return [...number.toString()].reverse().join('') === number.toString()
}
console.log(isPalindrome(121))
