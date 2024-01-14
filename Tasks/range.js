// Generate int array from given range

// Step 3
// Improve variable names further
// Use a more concise conditional statement

const generateIntArray = (...inputRange) => {
    let [start, end] = inputRange;

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