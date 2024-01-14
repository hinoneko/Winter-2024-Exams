// Return an remove without listed values

// Step 1
// Format code indentation and spacing
// Change function name to camelCase
// Use forEach for better readability
// Avoid modifying the array while iterating over it

const skipValues = (arr, ...remove) => {
    const result = [];
    arr.forEach((element) => {
        if (!remove.includes(element)) {
            result.push(element);
        }
    });
    return result;
};

module.exports = skipValues;