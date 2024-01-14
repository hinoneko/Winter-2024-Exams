// Count types in an array

// Step 2
// Add 'use strict';

'use strict';

const countTypes = (inputArray) => {
    const typeCounts = {
        number: 0,
        string: 0,
        boolean: 0,
    };

    for (element of inputArray) {
        const type = typeof element;
        typeCounts[type]++;
    }

    return typeCounts;
};

module.exports = countTypes;