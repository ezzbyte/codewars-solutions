// In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.

// Create as many "shufflings" as you can!

// Examples:

// With input 'a':
// Your function should return: ['a']

// With input 'ab':
// Your function should return ['ab', 'ba']

// With input 'abc':
// Your function should return ['abc','acb','bac','bca','cab','cba']

// With input 'aabb':
// Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// Note: The order of the permutations doesn't matter.

// Good luck!
function permutations(string) {
  let result = [];
  let arr = string.split("");

  let dfs = (i) => {
    if (i === arr.length) {
      result.push(arr.join(""));
      return;
    }
    for (let j = i; j < arr.length; j++) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      dfs(i + 1);
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  };

  dfs(0);
  return [...new Set(result)];
}
