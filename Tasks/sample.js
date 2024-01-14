// Get one random element from an array

// Step 2
// Remove unnecessary variable assignment

const getRandomElement = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

module.exports = getRandomElement;