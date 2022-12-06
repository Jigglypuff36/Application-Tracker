"use strict";
exports.__esModule = true;
exports.db = void 0;
var pg_1 = require("pg");
var dovenv = require('dotenv').config();
var PG_URI = process.env.PG_URL;
var pool = new pg_1.Pool({
    connectionString: PG_URI
});
exports.db = {
    query: function (text) {
        console.log('executed query', text);
        return pool.query(text);
    }
};
