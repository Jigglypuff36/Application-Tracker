import {Pool} from 'pg';
require('dotenv').config();

const PG_URI: any = '';

const pool = new Pool({
    connectionString: PG_URI
});


export const db = {
    query: (text:any) => {
      console.log('executed query',text);
      return pool.query(text);
    }
  };
