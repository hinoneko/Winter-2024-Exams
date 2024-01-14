// Increment all numbers in dictionary

// Step 2
// Improve variable names for better readability
// Avoid using delete as a loop variable name

'use strict';

const incrementNumbers = (inputObject, ...restVariables) => {
    for (const key in inputObject) {
        if (typeof inputObject[key] === 'number') {
            inputObject[key] += 1;
        }
    }
    return inputObject;
};

module.exports = incrementNumbers;