module.exports = function check(str, bracketsConfig) {
  // your solution
  let stack = []
  let openBrackets = []
  let bracketsPair = {}
  for (let j = 0; j < bracketsConfig.length; j++) {
    openBrackets.push(bracketsConfig[j][0])
    bracketsPair[bracketsConfig[j][1]] = bracketsConfig[j][0]
  }
 for (let i = 0; i < str.length; i++) {
   let currSymbol = str[i]
   if (openBrackets.includes(currSymbol)) {
     stack.push(currSymbol)
   } else {
     if (stack.length === 0) return false
     }
     }

     let topElement = stack[stack.length - 1]
     if (bracketsPair[currSymbol] === topElement) {
       stack.pop()
     } else {
       return false
     }
     return stack.length === 0
}

console.log(check('()', config1))

const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];