// Get one random element from an array

// Step 3 (final)
// Store random index calculation in a separate variable

const getRandomElement = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
};

module.exports = getRandomElement;
