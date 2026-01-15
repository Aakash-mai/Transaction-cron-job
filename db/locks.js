// src/db/locks.js
import logger from "../utils/logger.js";
import { pool } from "./index.js";

export async function acquireLock(lockKey) {
    const client = await pool.connect();
    try {
        const res = await client.query(
            "SELECT pg_try_advisory_lock($1) AS acquired",
            [lockKey]
        );
        if (res.rows[0].acquired) {
            logger.info(`Lock ${lockKey} acquired`);
        }
        return { acquired: res.rows[0].acquired, client };
    } catch (err) {
        client.release();
        throw err;
    }
}

export async function releaseLock(client, lockKey) {
    try {
        await client.query(
            "SELECT pg_advisory_unlock($1)",
            [lockKey]
        );
        logger.info(`Lock with key ${lockKey} released.`);
    } finally {
        client.release();
    }
}
