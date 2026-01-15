import { acquireLock, releaseLock } from "./db/locks.js";
import { sendTransaction } from "./services/sendTransaction.js";
import { networks } from "./config/networks.js";
import logger from "./utils/logger.js";

const LOCK_KEY = 123456;

// cron.schedule("*/1 * * * *", async () => {
// cron.schedule("0,30 * * * *", async () => {
async function main() {
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
                await sendTransaction(
                    env,
                    config.chainId,
                    config.contractAddress,
                    "function set(uint256 _x)");
            }
        }

        logger.info("[CRON] Job completed");
    } finally {
        await releaseLock(client, LOCK_KEY);
    }
};


main()
    .then(() => process.exit(0))
    .catch((err) => {
        logger.error("Unhandled fatal error", err);
        process.exit(1);
    });