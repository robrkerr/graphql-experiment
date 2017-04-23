const umzug = require('./umzug.js');

umzug.down().then(function() {
  console.log('Rollback successful');
}, function(err) {
  console.log('Rollback failed:', err);
});
