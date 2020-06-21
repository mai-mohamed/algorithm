/*============================================================
                         print full name
==============================================================*/
const printFullName = (firstName, lastName) =>
  console.log(`${firstName} ${lastName}`);
printFullName("Mai", "Mohamed");

/*============================================================
                     capitalization
==============================================================*/
const capitalizeString = (string) => {
  const newCapitalizeString = [];
  newCapitalizeString.push(string[0].toUpperCase());
  for (let i = 1; i <= string.length; i++) {
    if (string[i] === ".") {
      newCapitalizeString.push(string[i], string[i + 2].toUpperCase());
    } else {
      newCapitalizeString.push(string[i]);
    }
  }
  console.log(newCapitalizeString.join(""));
};
capitalizeString("hello world. it's a lovely day. i should go out");
/*============================================================
                     oddishOrEvenish
==============================================================*/

const oddishOrEvenish = (numbers) => {
  let count = 0;
  for (let i = 0; i <= numbers.toString().length - 1; i++) {
    count = count + +numbers.toString()[i];
  }
  if (count % 2 === 0) {
    console.log("Evenish");
  } else {
    console.log("Oddish");
  }
};
oddishOrEvenish(1123);
/*============================================================
                     Seven Boom!
==============================================================*/

const sevenBoom = (arr) => {
  if (arr.includes(7)) {
    console.log("Boom");
  } else {
    console.log("there is no 7 in the array");
  }
};
sevenBoom([1, 2, 3, 4, 5, 6, 7]);
/*============================================================
                    Count Number of Identical Arrays
==============================================================*/

// function countIdenticalArrays(...params){
// let count =0;
//   for (let i = 0; i < arguments.length; i++) {
//     console.log(params[i+1].join(""))
//     const val=params[i+1].join("");
//     if(params[i].join("")==val){
//       count++
//     }
//   }
//   console.log(count)
// }
// countIdenticalArrays([0, 0, 0], [0, 1, 2], [0, 0, 0], [2, 1, 0])
/*============================================================
                  How Many Days Between Two Dates
==============================================================*/

const getDays = (firstDate, secondDate) => {
  console.log(Math.round((secondDate - firstDate) / (1000 * 60 * 60 * 24)));
};
getDays(new Date("June 14, 2019"), new Date("June 20, 2019"));
/*============================================================
                Reversing a Binary String
==============================================================*/

const reversedBinaryInteger = (number) => {
  const binaryOldNumber = number.toString(2);
  const newBinary = [];
  for (let i = 0; i < binaryOldNumber.length; i++) {
    newBinary.push(binaryOldNumber[i]);
  }
  console.log(parseInt(newBinary.reverse().join(""), 2));
};
reversedBinaryInteger(12);
