// Filter array by type name

// Step 1
// Change the function name to follow camelCase convention
// Use forEach for better readability
// Avoid modifying the array while iterating over it

'use strict';

const filterArrayByType = (inputArray, typeName) => {
    const indicesToRemove = [];

    inputArray.forEach((element, index) => {
        if (typeof element !== typeName) {
            indicesToRemove.unshift(index);
        }
    });

    indicesToRemove.forEach((index) => {
        inputArray.splice(index, 1);
    });

    return inputArray;
};