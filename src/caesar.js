const caesarModule = (function () {
  // you can add any code you want within this function scope
  function caesar(input, shift, encode = true) {
    if (shift > 25 || shift < -25 || !shift) {
      return false;
    }
    let finalMess = "";
    inputLower = input.toLowerCase();
    for (let i = 0; i < inputLower.length; i++) {
      let inputLetter = inputLower[i].charCodeAt();
      if (
        (inputLetter < 97 && inputLetter > 90) ||
        inputLetter < 65 ||
        inputLetter > 122 ||
        inputLower[i] === " "
      ) {
        finalMess += inputLower[i];
      } else {
        let shiftcode;
        if (encode) {
          shiftedCode = inputLetter + shift;
        } else {
          shiftedCode = inputLetter - shift;
        }
        if (shiftedCode > 122) {
          shiftedCode -= 26;
        }
        if (shiftedCode < 97) {
          shiftedCode += 26;
        }
        let shiftedLetter = String.fromCharCode(shiftedCode);
        finalMess += shiftedLetter;
      }
    }

    return finalMess;
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;

/*
    if (!input || input < -25 || input > 25){
      return false
    }
 */
