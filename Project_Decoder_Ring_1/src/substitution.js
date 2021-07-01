// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    // use newInput to ignore capitals
    let newInput = input.toLowerCase();
    let standard = "abcdefghijklmnopqrstuvwxyz";
    let result = "";

    // if alphabet argument is not present or if the
    // length of alphabet is not exactly 26 then return false
    if (!alphabet || alphabet.length != 26) return false;

    // double loop used to check the alphabet to
    // make sure all characters are unique
    for (let i = 0; i < alphabet.length; i++)
      for (let j = i + 1; j < alphabet.length; j++)
        if (alphabet[i] == alphabet[j]) return false;
    if (encode) {
      // stepping through newInput
      for (let char of newInput) {
        // if there is a space, add it to result then restart the loop
        if (char == " ") {
          result += char;
          continue;
        }
        // stepping through regular alphabet
        for (let letter of standard) {
          // if there is a match between input and regular alphabet
          if (char == letter) {
            // set index of standard to x and add that index of alphabet to result
            let x = standard.indexOf(char);
            result += alphabet.charAt(x);
          }
        }
      }
      console.log(result);
      return result;
    }
    // decode block that is the exact same as the encode block but
    // swaps the placement of standard alphabet and argument alphabet.
    // reversing the processing essentially
    if (!encode) {
      for (let char of newInput) {
        if (char == " ") {
          result += char;
          continue;
        }
        for (let letter of alphabet) {
          if (char == letter) {
            let x = alphabet.indexOf(char);
            result += standard.charAt(x);
          }
        }
      }
      console.log(result);
      return result;
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
