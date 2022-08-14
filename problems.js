function divideByThree(num) {
  /* Returns the passed in number argument divided by three. */
  return num / 3.0;
}

function averageOfTwo(num1, num2) {
  /* Returns the average of two numbers, num1 and num2. */
  return (num1 + num2) / 2.0;
}

function averageOfFour(num1, num2, num3, num4) {
  /* Takes in four numbers. The function should return the average of all of
    the numbers. */
  return (num1 + num2 + num3 + num4) / 4.0;
}

function doubler(nums) {
  /* Takes an array of numbers and returns a new array where every element of
    the original array is multiplied by 2. */
  newArray = [];
  for (let i = 0; i < nums.length; i++) {
    newArray.push(nums[i] * 2);
  }

  return newArray;
}

console.log(doubler([1, 2, 3]));

function combineArrays(arr1, arr2) {
  /* Takes in two arrays of numbers and returns the two arrays combined into
    a single array. **Hint**: Use the `Array.concat` method but be aware that
    calling this method won't permanently change, also known as **mutate**,
    either array. */
  return arr1.concat(arr2);
}

console.log(combineArrays([2, 2, 2], [1, 1, 1]));

/* Takes in both a word and an array of words as arguments and returns a
  boolean that returns true if that string is located inside of the array, or   
  false if it does not. Use `Array.indexOf`. */
console.log('-----');
const array = ['a', 2, 9];
console.log(array.indexOf(2));
console.log(array.indexOf(7));
console.log(array.indexOf(9, 2));
console.log(array.indexOf(2, -1));
console.log(array.indexOf(2, -3));
console.log();
console.log();
// 0
// -1
// 2
// -1
// 0

function wordWithinArray(word, arr) {
  for (let i = 0; i <= arr.length + 1; i++) {
    if (arr.indexOf(word) === -1) {
      return false;
    } else {
      return true;
    }
  }
}
console.log(wordWithinArray('hi', ['hello', 'hi', 'hey']));
console.log('^^here^^');

console.log('----');
/* Takes in a string and returns that string "echo-ized". E.g. 
  echo("Mom!"); // => returns "MOM! ... Mom! ... mom!"
  echo("hey"); // => returns "HEY ... hey ... hey"
  echo("JUMp"); // => returns "JUMP ... JUMp ... jump" */
function echo(str) {
  let shout = str.toUpperCase();
  let whisper = str.toLowerCase();
  return shout + ' ... ' + str + ' ... ' + whisper;
}

console.log(echo('Hello'));
console.log();

/* Takes a number, max and returns an array that contains every number from
  0 to max (not inclusive) that is divisible by either 3 or 5, **but not both**. */
function fizzBuzz(max) {
  fizzArray = [];
  for (let i = 1; i < max; i++) {
    if ((i % 3 === 0 || i % 5 === 0) & !(i % 3 === 0 && i % 5 === 0)) {
      fizzArray.push(i);
    }
  }
  return fizzArray;
}
console.log('fizzbuzz');
console.log(fizzBuzz(15)); // [3,5,6,9,10,12]
console.log(fizzBuzz(6)); // [3]
console.log(fizzBuzz(18)); // [3,5,6,9,10,12]
console.log(fizzBuzz(11)); // [3,5,6,9,10]

/* Takes in a string name and returns a string saying "Hello, " to that name. */
function hello(name) {
  return `Hello, ${name}`;
}
console.log(hello('Donovan'));

function goodbye(name) {
  /* Takes in a string name and returns a string saying "Bye, " to that name. */
  return `Bye, ${name}`;
}

function isFive(num) {
  /* Takes in a number, num, and returns `true` if a number is equal to 5 and
    `false` if it is not. */
  if (num === 5) {
    return true;
  } else {
    return false;
  }
}

console.log(isFive(5));
console.log(isFive(6));
console.log(isFive(15));

/* Takes in a number and returns `true` if the number is odd and returns
  `false` otherwise. Try writing this with and without `if` statements */
function isOdd(num) {
  if (num % 2 === 0) {
    return false;
  } else {
    return true;
  }
}

function isOddTwo(num) {
  return num % 2 === 0 ? false : true;
}

console.log(isOdd(3));
console.log(isOdd(13));
console.log(isOdd(22));

console.log(isOddTwo(3)); //  true
console.log(isOddTwo(13)); // true
console.log(isOddTwo(22)); // false

/* Takes in two strings, `searchString` and `subString`. Should return
  `true` if `subString` is a part of the`searchString`, regardless of upper
  or lower case, and `false` if otherwise. */
function isSubString(searchString, subString) {
  let lowerCaseSearchString = searchString.toLowerCase();
  let lowerCaseSubString = subString.toLowerCase();
  if (lowerCaseSearchString.includes(lowerCaseSubString)) {
    return true;
  } else {
    return false;
  }
}
console.log('isSubString');
console.log(isSubString('hello how are you', 'hello')); //true
console.log(isSubString('hello how are you', 'how')); //true
console.log(isSubString('hello how are you', 'how a')); //true
console.log(isSubString('hello how are you', 'a')); //true
console.log(isSubString('hello how are you', 'sup')); //false

/* Takes in a word and returns the number of a's within that word. Counts
  both lowercase (a) and uppercase (A). Your job is to translate the following
  function to use a `for` loop instead of the `while` loop it is currently
  using. */
/*
function aCounter(word) {
    let index = 0;
    let count = 0;
    while (index < word.length) {
        let char = word[index];
        if (char === "a" || char === "A") {
        count += 1;
        }
        index++;
    }
    return count;
}
    */
// Your code here

function aCounter(word) {
  let count = 0;
  for (let index = 0; index < word.length; index++) {
    let char = word[index];
    if (char === 'a' || char === 'A') {
      count += 1;
    }
  }
  return count;
  // Your code here
}

console.log(aCounter(`aAaAa`));
console.log(aCounter(`bbbbb`));
console.log(aCounter(`AAA`));
console.log(aCounter(`aaa`));
console.log(aCounter(0));
console.log(aCounter('!'));

module.exports = {
  divideByThree,
  averageOfTwo,
  averageOfFour,
  doubler,
  combineArrays,
  wordWithinArray,
  echo,
  fizzBuzz,
  hello,
  goodbye,
  isFive,
  isOdd,
  isSubString,
  aCounter,
};
