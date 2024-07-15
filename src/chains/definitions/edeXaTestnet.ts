import { defineChain } from '../../utils/chain/defineChain.js'

export const edeXaTestnet = /*#__PURE__*/ defineChain({
  id: 1995,
  name: 'edeXa Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'EDEXA',
    symbol: 'EDX',
  },
  rpcUrls: {
    default: { http: ['https://io-dataseed1.testnet.edexa.io-market.com/rpc'] },
  },
  blockExplorers: {
    default: {
      name: 'edeXa Blockchain explorer',
      url: 'https://explorer.testnet.edexa.network/',
      apiUrl: 'https://explorer.testnet.edexa.network/api',
    },
  },
  testnet: true,
})
