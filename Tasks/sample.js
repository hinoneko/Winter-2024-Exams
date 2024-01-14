// Get one random element from an array

// Step 4 (final)
// Add 'use strict';

'use strict';

const getRandomElement = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
};

module.exports = getRandomElement;
