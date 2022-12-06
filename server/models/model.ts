import {Pool} from 'pg';
const dovenv = require('dotenv').config();

const PG_URI: any = process.env.PG_URL;

const pool = new Pool({
    connectionString: PG_URI
});


export const db = {
    query: (text:any) => {
      console.log('executed query',text);
      return pool.query(text);
    }
  };