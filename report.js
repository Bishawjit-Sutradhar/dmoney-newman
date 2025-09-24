const newman = require('newman');
require('dotenv').config();
 
newman.run({
    collection:`https://api.postman.com/collections/13099496-fa7d842f-4c29-4357-b27d-cec6caec700b?access_key=${process.env.PMAT_KEY}`,
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', 
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});