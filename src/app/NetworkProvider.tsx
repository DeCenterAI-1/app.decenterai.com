'use client'

// import { ModalProvider } from '@particle-network/connect-react-ui'
// import { WalletEntryPosition } from '@particle-network/auth'
// import { Base, BaseSepolia } from '@particle-network/chains'
// import { evmWallets } from '@particle-network/connect'

import { ConnectKitProvider, createConfig } from '@particle-network/connectkit'
import { authWalletConnectors } from '@particle-network/connectkit/auth'
import type { Chain } from '@particle-network/connectkit/chains'
// embedded wallet start
import { EntryPosition, wallet } from '@particle-network/connectkit/wallet'
// embedded wallet end
// aa start
import { aa } from '@particle-network/connectkit/aa'
// aa end
// evm start
// import {
//   arbitrum,
//   base,
//   baseSepolia,
//   mainnet,
//   polygon,
// } from '@particle-network/connectkit/chains'
import { evmWalletConnectors, passkeySmartWallet } from '@particle-network/connectkit/evm'
import { baseSepolia, base, arbitrum, mainnet } from 'viem/chains'
// evm end

const projectId = process.env.NEXT_PUBLIC_PARTICLE_NETWORK_PROJECT_ID as string
const clientKey = process.env.NEXT_PUBLIC_PARTICLE_NETWORK_CLIENT_KEY as string
const appId = process.env.NEXT_PUBLIC_PARTICLE_NETWORK_APP_ID as string
const walletConnectProjectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string

if (!projectId || !clientKey || !appId) {
  throw new Error('Please configure the Particle project in .env first!')
}

const supportChains: Chain[] = []
// evm start
supportChains.push(baseSepolia, base, mainnet, arbitrum)
// evm end

const config = createConfig({
  projectId,
  clientKey,
  appId,
  appearance: {
    recommendedWallets: [
      { walletId: 'metaMask', label: 'Recommended' },
      { walletId: 'coinbaseWallet', label: 'Popular' },
    ],
    logo: '/Logo Black.png',
    language: 'en-US',
    mode: 'dark',
  },
  walletConnectors: [
    authWalletConnectors({
      // Optional, configure this if you're using social logins
      authTypes: ['email', 'google', 'apple', 'twitter', 'github'], // Optional, restricts the types of social logins supported
      fiatCoin: 'USD', // Optional, also supports CNY, JPY, HKD, INR, and KRW
      promptSettingConfig: {
        // Optional, changes the frequency in which the user is asked to set a master or payment password
        // 0 = Never ask
        // 1 = Ask once
        // 2 = Ask always, upon every entry
        // 3 = Force the user to set this password
        promptMasterPasswordSettingWhenLogin: 1,
        promptPaymentPasswordSettingWhenSign: 1,
      },
    }),
    // evm start
    evmWalletConnectors({
      // TODO: replace it with your app metadata.
      metadata: {
        name: 'App.decenterai.com',
        icon:
          typeof window !== 'undefined' ? `${window.location.origin}/favicon.ico` : '',
        description: 'Particle Connectkit Next.js Scaffold.',
        url: typeof window !== 'undefined' ? window.location.origin : '',
      },
      walletConnectProjectId: walletConnectProjectId,

      //uncomment these two to use passkey auth
      // connectorFns: [passkeySmartWallet()],
      // multiInjectedProviderDiscovery: false,
    }),
    // evm end
  ],
  plugins: [
    // embedded wallet start
    wallet({
      visible: true,
      entryPosition: EntryPosition.BR,
    }),
    // embedded wallet end

    // aa config start
    // For Passkeys, use Biconomy or Coinbase else use others
    aa({
      name: 'BICONOMY',
      version: '2.0.0',
    }),
    // aa config end
  ],
  chains: supportChains as unknown as readonly [Chain, ...Chain[]],
})

export default function NetworkProvider({ children }: { children: React.ReactNode }) {
  return (
    // <ModalProvider
    //   options={{
    //     projectId: `${process.env.NEXT_PUBLIC_PARTICLE_NETWORK_PROJECT_ID}`,
    //     clientKey: `${process.env.NEXT_PUBLIC_PARTICLE_NETWORK_CLIENT_KEY}`,
    //     appId: `${process.env.NEXT_PUBLIC_PARTICLE_NETWORK_APP_ID}`,
    //     chains: [BaseSepolia, Base],
    //     particleWalletEntry: {
    //       //optional: particle wallet config
    //       displayWalletEntry: true, //display wallet button when connect particle success.
    //       defaultWalletEntryPosition: WalletEntryPosition.BR,
    //       supportChains: [BaseSepolia, Base],
    //       customStyle: {}, //optional: custom wallet style
    //     },
    //     securityAccount: {
    //       //optional: particle security account config
    //       //prompt set payment password. 0: None, 1: Once(default), 2: Always
    //       promptSettingWhenSign: 1,
    //       //prompt set master password. 0: None(default), 1: Once, 2: Always
    //       promptMasterPasswordSettingWhenLogin: 1,
    //     },
    //     wallets: evmWallets({
    //       projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string, //replace with walletconnect projectId
    //       showQrModal: false,
    //     }),
    //   }}
    //   theme={'auto'}
    //   language={'en'} //optional：localize, default en
    //   walletSort={['Particle Auth', 'Wallet']} //optional：walelt order
    //   particleAuthSort={[
    //     //optional：display particle auth items and order
    //     'email',
    //     'google',
    //   ]}>
    <ConnectKitProvider config={config}>{children}</ConnectKitProvider>
    // </ModalProvider>
  )
}
