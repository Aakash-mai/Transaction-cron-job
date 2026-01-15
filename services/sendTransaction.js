import logger from "../utils/logger.js";
import { config } from "../config/constants.js";
import { pool } from "../db/index.js";

export async function sendTransaction(environment, chainId, contractAddress, functionSignature) {
    const backendWallet = config.backendWallet;
    const timestamp = Date.now();
    const args = [timestamp];
    // An api call to send transaction to blockchain network
    logger.info(`[SEND TX]Sending transaction to chainId: ${chainId}, contractAddress: ${contractAddress}, functionSignature: ${functionSignature}, args: ${JSON.stringify(args)}`);
    const insertQuery = `
    INSERT INTO tx_events_testnet
      (environment, chain_id, tx_hash, timestamp_argument, sent_at, status)
    VALUES
      ($1, $2, NULL, $3, now(), 'SENT')
    ON CONFLICT DO NOTHING
  `;
    try {
        await pool.query(insertQuery, [
            environment,
            chainId,
            timestamp,
        ]);
    } catch (dbErr) {
        logger.error("[SEND_TX] DB insert failed", dbErr);
        throw dbErr;
    }
    try {
        const url = `${config.transactionServiceApiUrl}/sendTransaction`
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chainId,
                contractAddress,
                functionSignature,
                backendWallet,
                args
            }),
            timeout: 30_000,
        })
        if (!res.ok) {
            throw new Error(`SendTx API failed with status ${res.status}`);
        }

        const data = await res.json();

        logger.info(
            `[SEND_TX] queued successfully env=${environment} chain=${chainId} response=${JSON.stringify(
                data
            )}`
        );

        return {
            environment,
            chainId,
            timestamp,
            queued: true,
        };
    } catch (apiErr) {
        logger.error("[SEND_TX] Send API failed", apiErr);
        await pool.query(
            `
      UPDATE tx_events_testnet
      SET status = 'FAILED'
      WHERE environment = $1
        AND chain_id = $2
        AND timestamp_argument = $3
      `,
            [environment, chainId, timestamp]
        );

    }
}