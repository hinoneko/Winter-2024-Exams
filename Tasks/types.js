// Count types in an array

// Step 3
// Replace `const` with `let`
// Add `const`

'use strict';

const countTypes = (inputArray) => {
    let typeCounts = {
        number: 0,
        string: 0,
        boolean: 0,
    };

    for (const element of inputArray) {
        const type = typeof element;
        typeCounts[type]++;
    }

    return typeCounts;
};

module.exports = countTypes;
