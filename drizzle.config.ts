import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';
dotenv.config({path: './.env'});

if(!process.env.DB_URL) {
  console.log("Cannot find DB_URL in .env file");
}

export default {
    shema: './serc/lib/supabase/schema.ts',
    out:'./migrations',
    driver: 'pg',
    dbCredentials: {
        connectionString: process.env.DATABASE_URL || '',
      
    },
} 