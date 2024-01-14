// Count types in an array

// Step 1
// Use more descriptive variable names

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