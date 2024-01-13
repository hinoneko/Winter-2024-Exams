// Return an array without duplicates

// Step 1
// Format code indentation and spacing
// Add 'use strict';

'use strict';

duplicate = (value, N) => {
    if (N <= 0) return [];
    else {
        res = [];
        for (let i = 0; i < N; i++) {
            res[i] = value;
        }
        return res;
    }
};

module.exports = duplicate;