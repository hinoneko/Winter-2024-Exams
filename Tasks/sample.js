// Get one random element from an array

// Step 1
// Format code indentation and spacing
// Change function name to camelCase

const getRandomElement = (arr) => {
    arr = arr[Math.floor(Math.random() * arr.length)];
    return arr;
};

module.exports = getRandomElement;