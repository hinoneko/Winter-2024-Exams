// Return an array without duplicates

// Step 3
// Remove senseless blocks

'use strict';

const duplicate = (value, N) => {
    if (N <= 0) return [];
    const result = [];
    for (let i = 0; i < N; i++) {
        result[i] = value;
    }
    return result;
};

module.exports = duplicate;