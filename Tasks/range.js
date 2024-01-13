// Generate int array from given range

// Step 1
// Improve variable names for better readability
// Change the function name to follow camelCase convention

const generateIntArray = (...range) => {
    let [from, to] = range;
    if (to >= from) {
        range = new Array(to - from + 1);
        for (let i = from; i <= to; i++) {
            range[i - from] = i;
        }
    } else {
        return [];
    }
    return range;
};

module.exports = generateIntArray;