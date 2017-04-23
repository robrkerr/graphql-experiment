const pg = require('../db.js');

module.exports = {
  up: function () {
    return pg.query(`
      CREATE TABLE submissions (
        name     text
      );
    `).then(function() {
      return pg.end();
    });
  },
  down: function () {
    return pg.query(`
      DROP TABLE submissions;
    `).then(function() {
      return pg.end();
    });
  }
};
