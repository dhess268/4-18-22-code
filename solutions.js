
// returns an array of n multiples of x
function countBy(x, n) {
    let z = [];
    
    for(let i = 1; i <= n; i++){
      z.push(x * i)
    }
  
    return z;
  } 

// Converts the boolean to its string representation
function booleanToString(b){
    return b ? "true":"false"
}


// returns a new array of integers which alters each array element. If the element is a perfect square, the element is transformed into its square root. If not then the element is squared
function squareOrSquareRoot(array) {
    return array.map( a => {
      if(Math.sqrt(a) % 1 === 0){
         return Math.sqrt(a)
         }
      return a * a
    })  
  }

// converts DNA strings into RNA strings
  function DNAtoRNA(dna) {
    let dnaArr = dna.split('')// create a function which returns an RNA sequence from the given DNA sequence
    return dnaArr.map(a => {
        if(a === 'T'){
          return 'U'
        }
        return a  
    }).join('')
  }

  function DNAtoRNA(dna){
    return dna.replace(/T/g, 'U');
  }
  // other solution I did not come up with


  // returns a negative integer if given a positive one. returns itself if already negative
  function makeNegative(num) {
    return num > 0 ? num * -1 : num;
  }


  // converts mpg to lpkm. truncates any insignificant zeroes and rounds to 2 decimal places
  function converter (mpg) {
    let converted = (1.609344 / 4.54609188) * mpg //code to convert miles per imperial gallon to kilometers per liter
    return Number(converted.toFixed(2))
  
  }


  // returns all odds in an array of integers
  function odds(values){
    // arrow it
    return values.filter(a => a % 2 === 1);
  }


  // template literal practice. returns x are y
  var TempleStrings = function(obj, feature) {
    return `${obj} are ${feature}`
  }


  // returns the smallest int in the array args. uses ...array notation
  class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }