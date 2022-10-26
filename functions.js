const capitalize = (str) => {
  let capitalized = str.charAt(0).toUpperCase() + str.substr(1);
  return capitalized;
};

const reverse = (str) => {
  let arr = str.split("").reverse().join("");
  return arr;
};

const Calculator = {
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  multiply: (a, b) => {
    return a * b;
  },
  divide: (a, b) => {
    return a / b;
  },
};

const cesarCypher = (inputText, shiftIndex) => {
  if (inputText.search(" ") === -1) {
    return encodeSingleWord(inputText, shiftIndex);
  } else {
    let newarr = [];
    const arr = inputText.split(" ");
    for (let word of arr) {
      newarr.push(encodeSingleWord(word, shiftIndex));
    }
    return newarr.join(" ");
  }
};

const encodeSingleWord = (word, shiftIndex) => {
  const characters = createAlphabetObj();
  word = word.toLowerCase();
  shiftIndex = mod26(shiftIndex);
  let newString = "";

  let arr = word.split("");
  for (const letter of arr) {
    for (const [key, value] of Object.entries(characters)) {
      const intKey = parseInt(key);
      if (letter === value) {
        const shiftedNum = mod26(parseInt(intKey + shiftIndex));
        // search for the 'value' in 'characters' object associated with the key 'shiftedNum'
        newString += extractKeyValue(characters, shiftedNum);
      }
    }
  }
  return newString;
};

const extractKeyValue = (obj, value) => {
  return Object.values(obj)[value];
};

const createAlphabetObj = (string) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const arr = alphabet.split("");
  let obj = arr.reduce(
    (object, letter) => ({
      ...object,
      [alphabet.indexOf(letter)]: letter,
    }),
    {}
  );
  return obj;
};

const mod26 = (num) => {
  num = parseInt(num);
  if (num <= 25) return num;
  return (num % 25) - 1;
};

const analyzeArr = (arr) => {
  if (!Array.isArray(arr)) {
    console.error("Input is not an array");
    return "?";
  }
  let newArr = [];
  arr.forEach((elem) => {
    elem = parseInt(elem);
    newArr.push(elem);
  });
  if (newArr.includes(NaN)) {
    console.error(
      "Array contains elements that cannot be converted to numbers"
    );
    return "?";
  }
  let obj = {};

  const max = Math.max(...newArr);
  const min = Math.min(...newArr);
  const average = newArr.reduce((a, b) => a + b) / newArr.length;
  obj = {
    ...obj,
    ...{ length: newArr.length },
    ...{ max: max },
    ...{ min: min },
    ...{ average: average },
  };
  return obj;
};

module.exports = { capitalize, reverse, Calculator, cesarCypher, analyzeArr };
