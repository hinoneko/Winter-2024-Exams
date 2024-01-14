// Increment all numbers in dictionary

// Step 3 (final)
// Remove unused parameters and variables (...restVariables)
// Change the loop variable name to a more descriptive one

'use strict';

const incrementNumbers = (inputObject) => {
    for (const key in inputObject) {
        if (typeof inputObject[key] === 'number') {
            inputObject[key] += 1;
        }
    }
    return inputObject;
};

module.exports = incrementNumbers;
