// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  function caesar(input, shift, encode = true) {
    // checking for correct shift input, else return false
    if (!shift || shift < -25 || shift > 25) 
      return false;
    // if encode is false, then decode by inverting the shift
    if(encode == false)
      shift = -shift;
    let result = "";
    let newLetter = "";
    let letterCode="";
    let newLetterCode="";
    // new input is used to ignore capitals
    let newInput = input.toLowerCase();
    // using a loop for the newInput and letter codes, adding the shift to the letter
    // code to create the newLetterCode
    for (letter of newInput){
      letterCode = letter.charCodeAt(0);
      newLetterCode = letterCode + shift;
      // if outside the range of 97-122, then those are considered special characters
      // special characters are left alone
      if(letterCode <97 || letterCode >122)
        newLetterCode = letterCode;
      // if the shift causes the letter code to go beyond the range
      // then add or subtract 26 to put it back within range,
      // causing it to loop back to the beginning or end of the alphabet
      else if (newLetterCode < 97)
        newLetterCode += 26;
      else if (newLetterCode > 122)
        newLetterCode -=26;
      newLetter = String.fromCharCode(newLetterCode);
      result+=newLetter;
    }
    return result;
      
      

    
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
