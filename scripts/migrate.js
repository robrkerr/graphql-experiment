const umzug = require('../db/umzug/umzug.js');

umzug.up().then(function() {
  console.log('Migration successful');
}, function(err) {
  console.log('Migration failed:', err);
});
