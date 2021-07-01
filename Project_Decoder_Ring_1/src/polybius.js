// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // 2-dimensional matrix utilized for the polybius square
  const Polybius = [
    ["a", "f", "l", "q", "v"],
    ["b", "g", "m", "r", "w"],
    ["c", "h", "n", "s", "x"],
    ["d", "i/j", "o", "t", "y"],
    ["e", "k", "p", "u", "z"],
  ];
  let k = 0;
  let l = 0;
  function polybius(input, encode = true) {
    // newInput is used to ignore capital letters
    let newInput = input.toLowerCase();
    let response1 = "";
    // if block used for encoding
    if (encode == true) {
      // loop through newInput
      for (let letter of newInput) {
        // leave spaces alone
        if (letter === " ") response1 += " ";
        // double loop to step through the arrays within the Polybius array
        for (let i = 0; i < Polybius.length; i++) {
          for (let j = 0; j < Polybius[i].length; j++) {
            // if index of Polybius contains letter being searched for...
            // return the index + 1 (since real life counting doesn't begin at zero)
            if (Polybius[i][j].includes(letter)) {
              k = i + 1;
              l = j + 1;
              response1 += k.toString() + l.toString();
            }
          }
        }
      }
      return response1;
    }
    // if block used for decoding
    if (encode == false) {
      let response2 = "";
      let x = 0;
      let y = 0;
      let hasSpace = false;
      // looping through the newInput
      for (let q = 0; q < newInput.length; q++) {
        // subtract 1 to compensate for the off by 1 error for arrays
        x = newInput.charAt(q) - 1;
        y = newInput.charAt(q + 1) - 1;
        // -1 would represent a space, so immediately add it to response
        if (x === -1) {
          response2 += " ";
          hasSpace == true;
          // checking for an odd amount of numbers... since spaces count towards the .length property
          // has space needs to be used. if it has a space and is odd then return false
          if (hasSpace == true && newInput.length % 2 == 1) {
            return false;
            break;
          }
          // if it doesnt have a space and is even then return false
          if (hasSpace == false && newInput.length % 2 == 0) {
            return false;
            break;
          } else continue;
        } else {
          response2 += Polybius[x][y];
          q++;
        }
      }
      return response2;
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
