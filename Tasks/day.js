// Get day number

// Step 2
// Remove unused identifiers
// Change identifiers case
// Add `const` and `let`

'use strict';

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (s) => {
    let i;
    for (i = 0; i < DAYS_OF_WEEK.length; i++) {
        if (s.startsWith(DAYS_OF_WEEK[i].toLowerCase())) {
            return i + 1;
        }
    }
    return -1;
};

module.exports = parseDay;