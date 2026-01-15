import { config } from "./constants.js";
export const networks = {
    prod: {
        amoy: {
            name: "amoy",
            contractAddress: "0x401e5F08C5CB2d1EC570CF790B198d75d4CAc8E8",
            chainId: 80002,
        },
        sepolia: {
            name: "sepolia",
            contractAddress: "0x981bD059A764c6D3f0EAc0f873bc8e3aeB6391Cc",
            chainId: 11155111,
        },
        optimismSepolia: {
            name: "optimismSepolia",
            contractAddress: "0xEbA88cA790955438af85252694924CF866538abB",
            chainId: 11155420,
        },
        baseSepolia: {
            name: "baseSepolia",
            contractAddress: "0x80c0241cCdC9f7445Eb5e9882DB18DE3422d100d",
            chainId: 84532,
        },
        bnbTestnet: {
            name: "bnbTestnet",
            contractAddress: "0x507b240d4518d1c958d71607f3F6dBE6F174D2F5",
            chainId: 97,
        },
        avalancheFuji: {
            name: "avalancheFuji",
            contractAddress: "0x04AcaDe61B50EB3Cf58856d83F267947637a2e67",
            chainId: 43113,
        },
        celoSepolia: {
            name: "celoSepolia",
            contractAddress: "0x1F537E14D997F349A930F1495E1eFDd2D3b6e6b9",
            chainId: 11142220,
        }

    },
    qa: {
        amoy: {
            name: "amoy",
            contractAddress: "0x98A7a63b63CFA001002bbaB7f96803fF7B04F0C2",
            chainId: 80002,
        },
        sepolia: {
            name: "sepolia",
            contractAddress: "0x7EFEB6A70e6b16a8E361e235E05e78775bA3aaE6",
            chainId: 11155111,
        },
        optimismSepolia: {
            name: "optimismSepolia",
            contractAddress: "0x0B350D5B8A44014907BfA4ca525685cB42dCe6D3",
            chainId: 11155420,
        },
        baseSepolia: {
            name: "baseSepolia",
            contractAddress: "0x44e67a1D1071610bf39f6fdB1C7Dd3F4a44Bf5e6",
            chainId: 84532,
        },
        bnbTestnet: {
            name: "bnbTestnet",
            contractAddress: "0x35D4397f789365B8B160562a5926E3799bA6973a",
            chainId: 97,
        },
        avalancheFuji: {
            name: "avalancheFuji",
            contractAddress: "0x78Bb89a537bAA3a3c32680AD79C0585170508eb2",
            chainId: 43113,
        },
        celoSepolia: {
            name: "celoSepolia",
            contractAddress: "0x4718419709DBBad0a21f45d5E74D02F8a0e439bB",
            chainId: 11142220,
        }

    }, dev: {
        amoy: {
            name: "amoy",
            contractAddress: "0xf34C3f194484c3Ab0B5833Bef7280BA1494178F2",
            chainId: 80002,
        },
        sepolia: {
            name: "sepolia",
            contractAddress: "0xe782050c35034cCf8b8d0C20C778a6ce4b1aF73E",
            chainId: 11155111,
        },
        optimismSepolia: {
            name: "optimismSepolia",
            contractAddress: "0x7FfE92297AF01099afF1777b04Bea75Faf073BD3",
            chainId: 11155420,
        },
        baseSepolia: {
            name: "baseSepolia",
            contractAddress: "0xC25C0940C139ae78Ef22afED0ebAD1fA6cF99db6",
            chainId: 84532,
        },
        bnbTestnet: {
            name: "bnbTestnet",
            contractAddress: "0xa4c2F6dD5cA72fe6951A977d082fBa218F76E823",
            chainId: 97,
        },
        avalancheFuji: {
            name: "avalancheFuji",
            contractAddress: "0x8bBA4F9B730f9C88f2fe867E6A6D6e1B2Ca47488",
            chainId: 43113,
        },
        celoSepolia: {
            name: "celoSepolia",
            contractAddress: "0x7596aE6D13941957218B38922dfd6d7A784F2Aa4",
            chainId: 11142220,
        }

    }
}

export const testnets = {
    80002: {
        key: "amoy",
        name: "Polygon Amoy",
        rpc: config.rpcUrls.amoy,
        symbol: "POL",
        decimals: 18
    },
    43113: {
        key: "avax",
        name: "Avalanche Fuji",
        rpc: config.rpcUrls.fuji,
        symbol: "AVAX",
        decimals: 18
    },
    97: {
        key: "bnb",
        name: "BNB Testnet",
        rpc: config.rpcUrls.bnbTestnet,
        symbol: "BNB",
        decimals: 18
    },
    11155111: {
        key: "sepolia",
        name: "Sepolia",
        rpc: config.rpcUrls.sepolia,
        symbol: "ETH",
        decimals: 18
    },
    11155420: {
        key: "optimismSepolia",
        name: "Optimism Sepolia",
        rpc: config.rpcUrls.optimismSepolia,
        symbol: "ETH",
        decimals: 18
    },
    84532: {
        key: "baseSepolia",
        name: "Base Sepolia",
        rpc: config.rpcUrls.baseSepolia,
        symbol: "ETH",
        decimals: 18
    },
    11142220: {
        key: "celoSepolia",
        name: "Celo Sepolia",
        rpc: config.rpcUrls.celoSepolia,
        symbol: "CELO",
        decimals: 18
    }
};