"use strict";
exports.__esModule = true;
exports.db = void 0;
var pg_1 = require("pg");
var PG_URI = 'postgres://hcbdsxtj:QNIf6lS3Q3k_RPZXcfd6xLLcYUTK3Pe3@peanut.db.elephantsql.com/hcbdsxtj';
var pool = new pg_1.Pool({
    connectionString: PG_URI
});
exports.db = {
    query: function (text, params, callback) {
        console.log('executed query', text);
        return pool.query(text, params, callback);
    }
};
