// Generate random password

// Step 3 (final)
// Decompose into two functions
// Remove senseless blocks
// Rename variable

'use strict';

const getRandomIndex = (max) => Math.floor(Math.random() * max);

const generatePassword = (alphabet, Length) => {
    const maxAlphabetLength = alphabet.length;
    let key = '';
    for (let i = 0; i < Length; i++) {
        const index = getRandomIndex(maxAlphabetLength);
        key += alphabet[index];
    }
    return key;
};

module.exports = generatePassword;
