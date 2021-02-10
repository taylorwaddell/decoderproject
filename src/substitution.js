const substitutionModule = (function () {
  const alphaOG = "abcdefghijklmnopqrstuvwxyz";
  const alpha = alphaOG.split("");
  function lowerAndSplit(string) {
    const low = string.toLowerCase();
    return low.split("");
  }

  function substitution(input, alphabet, encode = true) {
    if (!alphabet) {
      return false;
    }
    const userAlpha = lowerAndSplit(alphabet);
    const chk = alphabet.toLowerCase().split("").sort();
    
    // i need this line to excute the if's below. But won't work if !alphabet
    console.log(alphabet);
    if (
      alphabet.length < 26 ||
      alphabet.length > 26 ||
      alphabet === alphaOG ||
      chk[0] === chk[1]
    ) {
      return false;
    }
    const inputLower = input.toLowerCase();
    let finalMess = "";
    for (let i = 0; i < input.length; i++) {
      let index = 0;
      if (inputLower[i] === " ") {
        finalMess += " ";
      }
      if (encode) {
        for (let j = 0; j < alpha.length; j++) {
          if (inputLower[i] === alpha[j]) {
            index = j;
            finalMess += userAlpha[index];
          }
        }
      } else {
        for (let j = 0; j < userAlpha.length; j++) {
          if (inputLower[i] === userAlpha[j]) {
            index = j;
            finalMess += alpha[index];
          }
        }
      }
    }
    return finalMess;
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
