// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  
  // You're using a 2D array, when it might be more straightforward to do this
  // with an object. That way, the first entry in the inner array would be your
  // key. 
  // If you want a challenge, recreate the matrix given in the problem description
  // and traverse it with your code. 
  const polySquare = [
    ["a", 11],
    ["b", 21],
    ["c", 31],
    ["d", 41],
    ["e", 51],
    ["f", 12],
    ["g", 22],
    ["h", 32],
    ["i", 42],
    ["j", 42],
    ["k", 52],
    ["l", 13],
    ["m", 23],
    ["n", 33],
    ["o", 43],
    ["p", 53],
    ["q", 14],
    ["r", 24],
    ["s", 34],
    ["t", 44],
    ["u", 54],
    ["v", 15],
    ["w", 25],
    ["x", 35],
    ["y", 45],
    ["z", 55],
    [" ", 00],
  ];

  // This would be more straightforward if polySquare was an object
  function getCode(input) {
    const found = polySquare.filter((polyLetter) =>
      polyLetter.includes(`${input}`)
    );
    return found[0][1];
  }


  function getLetter(input) {
    const inputNum = parseInt(input);
    if (inputNum === 42) {
      return "i/j";
    }
    const found = polySquare.filter((polyLetter) =>
      polyLetter.includes(inputNum)
    );
    return found[0][0];
  }

  // You should remove your test code before you turn this in.
  // Also, you could also get this whole function down to a single line.
  // Think over the ternary operator
  function isOdd(number) {
    checkrq = (number) => {
      if (!number) {
        return null;
      }
      return number % 2;
    };
    const test = checkrq(number);
    if (checkrq(number) === 0) {
      return true;
    } else if (checkrq(number) === null) {
      return false;
    } else {
      return false;
    }
  }

  // You could probably accomplish the same thing with the encoding logic, just
  // return the other element from that inner array.
  // In fact, with a little thought, you could probably end up using the same
  // function for both operations.
  function decode(input) {
    const inputNoSpace = input.replace(/ /g, "00");
    if (!isOdd(inputNoSpace.length)) {
      return false;
    }
    const split = inputNoSpace.match(/.{1,2}/g);
    let finalMess = "";
    for (let i = 0; i < split.length; i++) {
      finalMess += getLetter(split[i]);
    }
    return finalMess;
  }

  function polybius(input, encode = true) {
    const inputLow = input.toLowerCase();
    let finalMess = "";
    if (!encode) {
      return decode(inputLow);
    } else {
      for (let i = 0; i < inputLow.length; i++) {
        if (inputLow[i] === " ") {
          finalMess += " ";
        } else {
          finalMess += getCode(inputLow[i]);
        }
      }
    }

    return finalMess;
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
