const substitutionModule = (function () {
  const alphaOG = "abcdefghijklmnopqrstuvwxyz";
  const alpha = alphaOG.split("");
  function lowerAndSplit(string) {
    const low = string.toLowerCase();
    return low.split("");
  }

  function substitution(input, alphabet, encode = true) {
    try {
      let repeats = 0;
      alphabet.toLowerCase().split("").sort().sort((a,b) => {
        if (a==b){
            repeats++;
        }
      });
      if (
        alphabet.length < 26 ||
        alphabet.length > 26 ||
        alphabet === alphaOG ||
        repeats
      ) {
        return false;
      }
    }
    catch(err) {
      return false
    }

     // Using try/catch here because if the user didn't input an
     // alphabet then above code won't run, but if that's the case, 
     // than I want it to return false anyways.
    const userAlpha = lowerAndSplit(alphabet);    
    const inputLower = lowerAndSplit(input);
    let finalMess = "";
    for (let i = 0; i < input.length; i++) {
      let index = 0;
      if (inputLower[i] === " ") {
        finalMess += " ";
      }
      for (let j = 0; j<alpha.length; j++){
        if (encode){
            if (inputLower[i] === alpha[j]) {
                index = j;
                finalMess += userAlpha[index];
            }
        }
        else {
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
