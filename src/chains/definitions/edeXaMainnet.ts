import { defineChain } from '../../utils/chain/defineChain.js'

export const edeXaMainnet = /*#__PURE__*/ defineChain({
  id: 5424,
  name: 'edeXa Mainnet',
  nativeCurrency: {
    decimals: 18,
    name: 'EDEXA',
    symbol: 'EDX',
  },
  rpcUrls: {
    default: { http: ['https://mainnet.edexa.network/rpc'] },
  },
  blockExplorers: {
    default: {
      name: 'edeXa Blockchain explorer',
      url: 'https://explorer.edexa.network/',
      apiUrl: 'https://explorer.edexa.network/api',
    },
  }
})
