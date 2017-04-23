const Umzug = require('umzug');
module.exports = new Umzug({
  migrations: {
    path: 'db/migrations',
    pattern: /^\d+\.\d+\.js$/
  }
});
