// Get day number

// Step 3 (final)
// Remove senseless blocks
// Change identifiers case
// Add `const` and `let`

'use strict';

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (str) => {
    for (let i = 0; i < DAYS_OF_WEEK.length; i++) {
        if (str.startsWith(DAYS_OF_WEEK[i].toLowerCase())) {
            return i + 1;
        }
    }
    return -1;
};

module.exports = parseDay;
