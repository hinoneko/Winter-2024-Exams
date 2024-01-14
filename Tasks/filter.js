// Filter array by type name

// Step 2
// Utilize the map and filter methods to achieve the same result more concisely

'use strict';

const filterArrayByType = (inputArray, typeName) => {
    const indicesToRemove = inputArray
        .map((element, index) => (typeof element !== typeName ? index : -1))
        .filter((index) => index !== -1);

    inputArray = inputArray.filter((element, index) => !indicesToRemove.includes(index));

    return inputArray;
};