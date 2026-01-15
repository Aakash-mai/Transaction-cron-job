import pkg from 'pg';
import logger from '../utils/logger.js';
import { config } from '../config/constants.js';
const { Pool } = pkg;

export const pool = new Pool({
    host: config.db.host,
    port: config.db.port,
    user: config.db.user,
    password: config.db.password,
    database: config.db.name,
});
async function connectDB() {
    try {
        const client = await pool.connect();
        logger.info("PostgreSQL connected successfully");
        client.release();
    } catch (err) {
        logger.error("PostgreSQL connection error:", err.stack);
    }
}

connectDB();
