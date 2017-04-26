
exports.up = (knex) => {
  const rawString = 'CREATE EXTENSION IF NOT EXISTS "uuid-ossp"'
  return knex.raw(rawString)
    .then(() => {
      return knex.schema.createTable('speakers', (table) => {
        table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
        table.text('name');
        table.timestamps();
      })
    })
    .then(() => {
      return knex.schema.createTable('submissions', (table) => {
        table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
        table.text('name');
        table.uuid('speaker_id');
        table.timestamps();
      })
    })
};

exports.down = (knex) => {
  return knex.schema.dropTable('submissions')
    .then(() => {
      return knex.schema.dropTable('speakers')
    })
    .then(() => {
      const rawString = 'DROP EXTENSION IF EXISTS "uuid-ossp"'
      return knex.raw(rawString)
    })
};
