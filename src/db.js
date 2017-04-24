"use strict";
exports.__esModule = true;
var pg = require("pg");
var config = {
    user: 'dsuser',
    database: 'graphql_test_development',
    password: 'mysecretpassword',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
};
//this initializes a connection pool
//it will keep idle connections open for 30 seconds
//and set a limit of maximum 10 idle clients
var pool = new pg.Pool(config);
pool.on('error', function (err, client) {
    // if an error is encountered by a client while it sits idle in the pool
    // the pool itself will emit an error event with both the error and
    // the client which emitted the original error
    // this is a rare occurrence but can happen if there is a network partition
    // between your application and the database, the database restarts, etc.
    // and so you might want to handle it and at least log it out
    console.error('idle client error', err.message, err.stack);
});
//export the query method for passing queries to the pool
exports.query = function (text, values) {
    if (values === void 0) { values = []; }
    // console.log('query:', text, values)
    return pool.query(text, values)
        .then(function (result) { return result.rows; })["catch"](function (err) {
        console.error('error running query', err);
    });
};
// the pool also supports checking out a client for
// multiple operations, such as a transaction
exports.connect = function () {
    return pool.connect();
};
exports.end = function () {
    return pool.end();
};
