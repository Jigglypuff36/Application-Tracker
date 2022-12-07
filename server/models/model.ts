import {Pool} from 'pg';
require('dotenv').config();

const PG_URI: any = 'postgres://hcbdsxtj:QNIf6lS3Q3k_RPZXcfd6xLLcYUTK3Pe3@peanut.db.elephantsql.com/hcbdsxtj';

const pool = new Pool({
    connectionString: PG_URI
});


export const db = {
    query: (text:any) => {
      console.log('executed query',text);
      return pool.query(text);
    }
  };