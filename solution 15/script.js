// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas

function solution(text, markers) {
  let arr = text.split("\n");

  for (let i = 0; i < arr.length; i++) {
    let line = arr[i];
    let index = line.length;
    for (let j = 0; j < markers.length; j++) {
      let markerIndex = line.indexOf(markers[j]);

      if (markerIndex !== -1 && markerIndex < index) {
        index = markerIndex;
      }
    }
    line = line.slice(0, index).trimEnd();
    arr[i] = line;
  }
  return arr.join("\n");
}
