const substitutionModule = (function () {

  const alphaOG = "abcdefghijklmnopqrstuvwxyz";
  const alpha = alphaOG.split("");

  function lowerAndSplit(string) {
    const low = string.toLowerCase();
    return low.split("");
  }

  function substitution(input, alphabet, encode = true) {
    // this could be combined with (see below)
    if (!alphabet) {
      return false;
    }
    const userAlpha = lowerAndSplit(alphabet);
    const chk = alphabet.toLowerCase().split("").sort(); // clever
    // this. All of them are returning false.
    if (
      alphabet.length < 26 ||
      alphabet.length > 26 ||
      alphabet === alphaOG ||
      chk[0] === chk[1]
    ) {
      return false;
    }
    // seems like you could have used lowerAndSplit() here
    const inputLower = input.toLowerCase();
    let finalMess = "";

    // Although the logic here works (the tests pass), the medley of for loops
    // and if branches make it terribly difficult to understand at first glance.
    // If you want a challenge, figure out how to knock this down to a maximum of
    // two loops, and try to use just one if/else.
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
