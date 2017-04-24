const pg = require('../../build/db');

module.exports = {
  up: function () {
    return pg.query(`
      CREATE EXTENSION "uuid-ossp";
      CREATE TABLE submissions (
        id           uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        name         text,
        speaker_id    uuid
      );
      CREATE TABLE speakers (
        id           uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        name         text
      );
    `).then(function() {
      return pg.end();
    });
  },
  down: function () {
    return pg.query(`
      DROP TABLE submissions;
      DROP TABLE speakers;
      DROP EXTENSION "uuid-ossp";
    `).then(function() {
      return pg.end();
    });
  }
};
