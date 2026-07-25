class RomanNumerals {
  static toRoman(num) {
    let string = "";
    
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    
    for(let i = 0; i < values.length; i++){
     while (num >= values[i]) {
    string += romans[i];
    num -= values[i];
}
    }
    return string;
  }
​
  static fromRoman(str) {
    const map = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};
    let total = 0;
    for(let i = 0; i < str.length; i++){
      
      let current = map[str[i]];
      let next = map[str[i + 1]];
      if(next > current){
        total -= current; 
      }else{
        total += current;
      }
    }
    return total;
  }
}