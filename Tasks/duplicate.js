// Return an array without duplicates

// Step 2
// Remove unused identifiers
// Change identifiers case
// Add `const` and `let`

'use strict';

const duplicate = (value, N) => {
    if (N <= 0) return [];
    else {
        const result = [];
        for (let i = 0; i < N; i++) {
            result[i] = value;
        }
        return result;
    }
};

module.exports = duplicate;