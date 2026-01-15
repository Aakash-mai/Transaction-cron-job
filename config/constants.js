import dotenv from 'dotenv';
dotenv.config();
export const config = {
    port: process.env.PORT || 6001,
    db: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        name: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
    },
    backendWallet: process.env.BACKEND_WALLET,
    rpcUrls: {
        amoy: process.env.AMOY_RPC_URL,
        fuji: process.env.FUJI_RPC_URL,
        optimismSepolia: process.env.OPSEPOLIA_RPC_URL,
        bnbTestnet: process.env.BNBTESTNET_RPC_URL,
        sepolia: process.env.SEPOLIA_RPC_URL,
        celoSepolia: process.env.CELO_SEPOLIA_RPC_URL,
        baseSepolia: process.env.BASESEPOLIA_RPC_URL,
    },
    transactionServiceApiUrl: process.env.TRANSACTION_SERVICE_API_URL
}