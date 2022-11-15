// Import math from the index.js file
const math = require('./index')

// Define all the answer variables
const answer1 = math.calculate(4, '+', 4)
const answer2 = math.calculate(4, '-', 4)
const answer3 = math.calculate(4, '*', 4)
const answer4 = math.calculate(4, '/', 4)
const answer5 = math.calculate(4, '^', 4)
const answer6 = math.calculate(4, '%', 4)

// Log all the values of the answers to make sure the package works
console.log(answer1, answer2, answer3, answer4, answer5, answer6)