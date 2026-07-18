function add(a, b) {
  let result = "";
  let carry = 0;
​
  let i = a.length - 1;
  let j = b.length - 1;
​
  while (i >= 0 || j >= 0) {
​
    let num1 = 0;
    let num2 = 0;
​
    if (i >= 0) {
      num1 = Number(a[i]);
    }
​
    if (j >= 0) {
      num2 = Number(b[j]);
    }
​
    let sum = num1 + num2 + carry;
​
    if (sum >= 10) {
      carry = 1;
      sum = sum - 10;
    } else {
      carry = 0;
    }
​
    result = sum + result;
​
    i--;
    j--;
  }
​
  if (carry === 1) {
    result = "1" + result;
  }
​
  return result;
}