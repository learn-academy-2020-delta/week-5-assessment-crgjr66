// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

const codedMessage = (string) => {
  // split into an array for parsing
  let stringArray = string.split("")
  // map through the array and replace code instances
  stringArray.map((value, index) => {
    if (value == 'a') {
      stringArray[index] = '4'
    } else if (value == 'e') {
      stringArray[index] = '3'
    } else if (value == 'i') {
      stringArray[index] = '1'
    } else if (value == 'o') {
      stringArray[index] = '0'
    } else {
      stringArray[index] = value
    }
  }).join("")
  return stringArray.join("")
}

console.log(codedMessage(secretCodeWord1))
console.log(codedMessage(secretCodeWord2))


// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

const containsLetterA = (array) => {
  // create temp array for found words
  let newArray = []
  // go through array looking for the letter 'A'
  array.map((value, index) => {
    if (value.toUpperCase().includes("A")) {
      newArray.push(value)
    }
  })
  return newArray
}

console.log(containsLetterA(arrayOfWords))


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

const isFullHouse = (array) => {
  // need temp booleans if we find 3 or 2 instances
  let foundThree = false
  let foundTwo = false
  let arrayLength = 0
  //map through the array and look for the number of occurances
  //check all posible digits 0..9
  for (let i = 0; i < 10; i++) {
    //find the number of occurrances by checking the length of the filtered array
    arrayLength = array.filter(value => value==i).length
    if (arrayLength == 2) {
      foundTwo = true
    }
    else if (arrayLength == 3) {
      foundThree = true
    }
  }
  // if we have three of a kind and two of another then we have a full house
  if (foundTwo && foundThree) {
    return true
  } else {
    return false
  }
}

console.log(isFullHouse(hand1))
console.log(isFullHouse(hand2))
console.log(isFullHouse(hand3))
