// Filter array by type name

// Step 3 (final)
// Simplify the function by directly using the filter method

'use strict';

const filterArrayByType = (inputArray, typeName) => {
    return inputArray.filter((element) => typeof element === typeName);
};

module.exports = filterArrayByType;
