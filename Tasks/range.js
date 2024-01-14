// Generate int array from given range

// Step 5 (final)
// Add 'use strict';

'use strict';

const generateIntArray = (...inputRange) => {
    const [start, end] = inputRange;

    if (end < start) {
        return [];
    }

    const resultArray = new Array(end - start + 1);

    for (let i = start; i <= end; i++) {
        resultArray[i - start] = i;
    }

    return resultArray;
};

module.exports = generateIntArray;
