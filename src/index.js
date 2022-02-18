
module.exports = function check(str, bracketsConfig) {
   let stack = []
  let closeBrackets = []
  let bracketsPair = {}
  for (let j = 0; j < bracketsConfig.length; j++) {
     closeBrackets.push(bracketsConfig[j][1])
    bracketsPair[bracketsConfig[j][1]] = bracketsConfig[j][0]
  }
 for (let i = 0; i < str.length; i++) {
   let currSymbol = str[i]
   let topElement = stack[stack.length - 1]

   if (closeBrackets.includes(currSymbol)) {
     if (bracketsPair[currSymbol] === topElement) {
      stack.pop()
     } else {
       stack.push(currSymbol)
     }
    
   } else {
    stack.push(currSymbol)
   }
 }
     return stack.length === 0
}
 