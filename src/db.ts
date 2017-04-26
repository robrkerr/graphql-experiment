import * as knexLib from 'knex'
const config = require('../knexconfig.json')

const env = 'development'

export const knex = knexLib(config[env])
