import cron from "node-cron";
import { acquireLock, releaseLock } from "./db/locks.js";
import { sendTransaction } from "./services/sendTransaction.js";
import { networks } from "./config/networks.js";
import logger from "./utils/logger.js";

const LOCK_KEY = 123456;
process.on("unhandledRejection", (err) => {
    logger.error("[CRON] Unhandled rejection", err);

});

process.on("uncaughtException", (err) => {
    logger.error("[CRON] Uncaught exception", err);
});

// cron.schedule("*/1 * * * *", async () => {
cron.schedule("0,30 * * * *", async () => {

    logger.info("[CRON] Tick");

    const { acquired, client } = await acquireLock(LOCK_KEY);

    if (!acquired) {
        logger.info("[CRON] Another run active. Skipping.");
        return;
    }

    try {
        logger.info("[CRON] Lock acquired. Running job.");

        for (const env of Object.keys(networks)) {
            for (const [chain, config] of Object.entries(networks[env])) {
                await sendTransaction(env, config.chainId, config.contractAddress, "function set(uint256 _x)");
            }
        }

        logger.info("[CRON] Job completed");
    } catch (err) {
        logger.error("[CRON] Error:", err);
    } finally {
        await releaseLock(client, LOCK_KEY);
    }
});
