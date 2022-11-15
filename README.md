# Simple-Calc
Simple-Calc is a simple calculator for JavaScript that can help with math either in the console or on your websites! Simple-Calc can also be used for discord!

# Installing
Run ```npm install simple-calc``` in your console

# Usage
Keep in mind that you _have to have a space between your numbers and the operator_

Example Usage:

```javascript
const math = require('simple-calc')

let answer = math.calculate(4, '*', 2)

console.log(answer)
```

#
Example for discord.js
```javascript
const math = require('simple-calc')
let args = message.content.trim().split(/ +/g)

try {
    let num1 = Number(args[1])
    let operator = args[2]
    let num2 = Number(args[3])

    if (!num1) return message.channel.send('Please provide the first number!')
    if (!operator) return message.channel.send('Please provide an operator! Example: (+ - * / ^ %)')
    if (!num2) return message.channel.send('Please provide the second number!')
    message.channel.send(`Problem: ${num1}${operator}${num2}\n\nAnswer: ${math.calculate(num1, operator, num2)}`)
} catch (e) {
    console.log(e)
}
```
```txt
Example discord command usage (Please note you do not have to have the same prefix and command name as me)

!calculate 1 + 2

The output for that command is below

Problem: 1+2
Answer: 3
```

Thanks to **drait** for the baseplate of this package his package is `discord-math` I just decided to make an updated version with more operators