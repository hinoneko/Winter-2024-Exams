// Generate random password

// Step 1
// Format code indentation and spacing
// Remove empty blocks
// Add 'use strict';

'use strict';

let GeneratePassword = (alphabet, length) => {
    const MAX = alphabet.length;
    let key = '';
    for (let i = 0; i < length; i++) {
        let Index = Math.floor(Math.random() * MAX);
        key = key + alphabet[Index];
    }
    return key;
};

module.exports = GeneratePassword;