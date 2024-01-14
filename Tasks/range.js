// Generate int array from given range

// Step 2
// Use more descriptive variable names
// Simplify the conditional check

const generateIntArray = (...inputRange) => {
    let [start, end] = inputRange;

    if (end >= start) {
        const resultArray = new Array(end - start + 1);

        for (let i = start; i <= end; i++) {
            resultArray[i - start] = i;
        }

        return resultArray;
    } else {
        return [];
    }
};

module.exports = generateIntArray;