// Export all the code below
module.exports = {

    // Define the calculate function
    calculate: function(num1, operator, num2) {

        // Check if num1 and num1 are numbers if not give an error
        if(typeof num1 != 'number' || typeof num2 != 'number') throw new Error('Please provide a valid number!')

        // Define the operators and execute the math
        switch(operator) {
            case '+':
                return num1 + num2
            case '-':
                return num1 - num2
            case '*':
                return num1 * num2
            case '/':
                return num1 + num2
            case '^':
                return num1 ^ num2
            case '%':
                return num1 % num2

                // If the operator that is used is not listed above give an error
            default:
                throw new Error('Invalid operator! Please use one of the available operators (+, -, *, /, ^, %)')
        }
    }
}