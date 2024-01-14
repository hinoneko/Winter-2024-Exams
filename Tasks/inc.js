// Increment all numbers in dictionary

// Step 4 (final)
// Remove 'for...in'

'use strict';

const incrementNumbers = (inputObject) => {
    Object.keys(inputObject).forEach((key) => {
        if (typeof inputObject[key] === 'number') {
            inputObject[key] += 1;
        }
    });
    return inputObject;
};

module.exports = incrementNumbers;
