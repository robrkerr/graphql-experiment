"use strict";
exports.__esModule = true;
var pg = require("../db");
exports.resolvers = {
    Query: {
        submissions: function () {
            return pg.query('SELECT * FROM submissions');
        },
        speakers: function () {
            return pg.query('SELECT * FROM speakers');
        },
        speaker: function (_, _a) {
            var id = _a.id;
            return pg.query('SELECT * FROM speakers WHERE id = $1', [id])
                .then(function (rows) { return rows[0]; });
        }
    },
    Mutation: {
        createSpeaker: function (_, _a) {
            var name = _a.name;
            return pg.query('INSERT INTO speakers (name) VALUES ($1) RETURNING *', [name])
                .then(function (rows) { return rows[0]; });
        },
        createSubmission: function (_, _a) {
            var name = _a.name, speaker_id = _a.speaker_id;
            return pg.query('INSERT INTO submissions (name, speaker_id) VALUES ($1, $2) RETURNING *', [name, speaker_id])
                .then(function (rows) { return rows[0]; });
        }
    },
    Speaker: {
        submissions: function (speaker) {
            return pg.query('SELECT * FROM submissions WHERE speaker_id = $1', [speaker.id]);
        }
    },
    Submission: {
        speaker: function (submission) {
            return pg.query('SELECT * FROM speakers WHERE id = $1', [submission.speaker_id])
                .then(function (rows) { return rows[0]; });
        }
    }
};
