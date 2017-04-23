const Umzug = require('umzug');
module.exports = new Umzug({
  migrations: {
    // storageOptions: {  // <-- not working...
    //   path: './db/umzug/umzug.json'
    // },
    path: 'db/migrations',
    pattern: /^\d+\.\d+\.js$/
  }
});
