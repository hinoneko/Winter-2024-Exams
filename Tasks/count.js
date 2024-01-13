// Sum all number values in dict

// Step 2
// Remove unused identifiers
// Change identifiers case
// Add `const` and `let`

'use strict';

const count = (obj) => {
    let sum = 0; {
        const keys = Object.keys(obj);
        keys.forEach((key) => {
            const value = obj[key];
            if (typeof value === 'number') sum += value;
        });
    }
    return sum;
};

module.exports = count;