// Return an array without duplicates

// Step 4 (final)
// Don't mutate incoming parameters
// Change variable name 'N' to 'length'

'use strict';

const createArrayWithoutDuplicates = (value, length) => {
    if (length <= 0) return [];
    const result = [];
    for (let i = 0; i < length; i++) {
        result.push(value);
    }
    return result;
};

module.exports = createArrayWithoutDuplicates;
