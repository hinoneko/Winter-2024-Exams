// Return an remove without listed values

// Step 2 (final)
// Utilize the filter method to achieve the same result more concisely

const skipValues = (arr, ...remove) => {
    return arr.filter((element) => !remove.includes(element));
};

module.exports = skipValues;
