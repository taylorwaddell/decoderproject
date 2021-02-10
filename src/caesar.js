const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {

    // Nice work with the short circuit
    if (shift > 25 || shift < -25 || !shift) {
      return false;
    }

    let finalMess = "";
    inputLower = input.toLowerCase();

    for (let i = 0; i < inputLower.length; i++) {   // You could consolidate these
      let inputLetter = inputLower[i].charCodeAt(); // by using a .forEach loop and
                                                    // a .map()
      
      // I don't understand why you're selecting so many ranges. The only chars
      // we really care about are the lowercase alphabetic characters, right?
      if (
        (inputLetter < 97 && inputLetter > 90) ||
        inputLetter < 65 ||
        inputLetter > 122 ||
        inputLower[i] === " "
      ) {
        finalMess += inputLower[i];
      } else {
        let shiftcode; // This never gets used
        if (encode) {
          shiftedCode = inputLetter + shift;
        } else {
          shiftedCode = inputLetter - shift;
        }
        if (shiftedCode > 122) {
          shiftedCode -= 26;
        }
        // This reads better if you make it 'else if'
        // That way you know at a glance that these two conditions are related
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