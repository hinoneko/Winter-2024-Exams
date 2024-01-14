// Return an remove without listed values

// Step 3 (final)
// Add 'use strict';

'use strict';

const skipValues = (arr, ...remove) => {
    return arr.filter((element) => !remove.includes(element));
};

module.exports = skipValues;
