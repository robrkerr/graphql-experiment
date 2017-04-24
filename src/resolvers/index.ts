import { find, filter } from 'lodash'
import * as pg from '../db'

export const resolvers = {
  Query: {
    submissions() {
      return pg.query('SELECT * FROM submissions')
    },
    speakers() {
      return pg.query('SELECT * FROM speakers')
    },
    speaker(_, { id }) {
      return pg.query('SELECT * FROM speakers WHERE id = $1', [id])
        .then((rows) => rows[0])
    },
  },
  Mutation: {
    createSpeaker(_, { name }) {
      return pg.query('INSERT INTO speakers (name) VALUES ($1) RETURNING *', [name])
        .then((rows) => rows[0])
    },
    createSubmission(_, { name, speaker_id }) {
      return pg.query('INSERT INTO submissions (name, speaker_id) VALUES ($1, $2) RETURNING *', [name, speaker_id])
        .then((rows) => rows[0])
    },
  },
  Speaker: {
    submissions(speaker) {
      return pg.query('SELECT * FROM submissions WHERE speaker_id = $1', [speaker.id])
    },
  },
  Submission: {
    speaker(submission) {
      return pg.query('SELECT * FROM speakers WHERE id = $1', [submission.speaker_id])
        .then((rows) => rows[0])
    },
  },
}
