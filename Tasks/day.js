// Get day number

// Step 1
// Format code indentation and spacing
// Remove empty blocks
// Add 'use strict';

'use strict';

let D = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const _parse_day_ = (s) => {
    let i;
    for (i = 0; i < D.length; i++) {
        if (s.startsWith(D[i].toLowerCase())) {
            return i + 1;
        }
    }
    return -1;
};

module.exports = _parse_day_;