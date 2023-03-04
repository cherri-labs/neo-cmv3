# neo-cmv3
## Introduction

I don't have the pretence of saying there is anything new or different in here. What this is is some minor improvements upon the [original repo](https://github.com/wearekite/candy-machine-v3-ui), with some connection error fixes, some CSS added variables in globals.css for easier and more diverse customization, font (Noto Sans) and color (wallet menus) style refinements, self-hosted font imports (previous one was not working for me), Firefox patches (number input appearance and more).

I tried to mantain as much of the original structure and concept as possible so I wouldn't have to write a new README. I'll just keep it here below. I mostly just updated relevant links to point to new places.

I've also provided a quick setup for title, icon and meta tags which you can customize in the [index.tsx](/pages/index.tsx).

The original project, while very cool, was a mess. But this is not to blame the creator, since CMv3 is still in alpha and the Metaplex official repo provides you with a very ugly red quickstart example themselves. You still may have to `npm i --force` to solve some dependency issues (or god knows what else), and you'll still find a bit of a bungalow down in the console section of your browser. Just try to ignore that. The Candy Machine should still work as expected (it did for me).

### Preview
![Desktop preview of Candy Machine V3](https://cdn.discordapp.com/attachments/1039648022516215919/1072170298398474250/cmv3.png)
— Desktop preview.

Preview it live [here](https://neo-cmv3.vercel.app/).

### Deploy with Vercel *(recommended)*
Vercel is great to host your Candy Machine on, deploy it instantly by clicking the button below.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fcherri-labs%2Fneo-cmv3&env=NEXT_PUBLIC_SOLANA_NETWORK,NEXT_PUBLIC_RPC_HOST,NEXT_PUBLIC_CANDY_MACHINE_ID&project-name=neo-cmv3&repository-name=neo-cmv3)

### Implemented features
- [x] Responsive UI
- [x] Single Mint UI
- [x] Multi Mint UI
- [x] Start Time Countdown
- [x] Preview Minted NFTs
- [x] Guards Supported
  - [x] Start Date
  - [x] End Date
  - [x] Sol Payment
  - [x] Token Payment
  - [x] Mint Limit
  - [x] Bot Tax
  - [x] Token Burn
  - [x] Token Gate
  - [x] NFT Payment
  - [x] NFT Burn
  - [x] NFT Gate
  - [x] Redeemed Amount
  - [x] Address Gate
  - [x] Allow List
  - [x] Gatekeeper

### Multi Group 
*For Multi-group functionality use [multi-group](/tree/multi-group) branch*

![Desktop preview of Multi Group Functionality](https://media.discordapp.net/attachments/621055440268165121/1080220611982401598/Mint_Groups.png)
— Desktop preview of multi group functionality.

*(PS: For optimal use, limit active/ongoing groups to 1 - button will be added automatically for each active group)*

### Env Variables
```
NEXT_PUBLIC_SOLANA_NETWORK=mainnet/devnet
```
```
NEXT_PUBLIC_RPC_HOST=networkURL
```
```
NEXT_PUBLIC_CANDY_MACHINE_ID=candyMachineID
```
*If on Vercel or a similar host you need to add these as environmental variables in your project settings.*

### Quick customization
Want to customize the color scheme? This frontend uses 6 main colors that can be found in [globals.css](/styles/globals.css) change these values and the changes will apply globally.
```
:root {
  --main-background-color: #0E0E0E;
  --alt-background-color: #202020;
  --white: #fff;
  --black: #000;
  --primary: #4E44CE;
  --error: #D92D20;
}
```

### Preview alternative Candy Machine states
![Candy Machine V3 with Start Date](https://media.discordapp.net/attachments/1039648022516215919/1072171560288399440/startdatecmv3.png)
— Candy Machine V3 with Start Date

![Candy Machine V3 with Address Gate, Allow List or other similar guards](https://cdn.discordapp.com/attachments/1039648022516215919/1072171559520833656/privatecmv3.png)
— Candy Machine V3 with Address Gate, Allow List or other similar guards

### Credits
Thanks to [wearekite](https://github.com/wearekite/candy-machine-v3-ui) and [Solana Studio](https://github.com/Solana-Studio) for creating the original frontend. This repo is just a quick JS patch with some added CSS customization. Nothing more.

## Contacts / Help
cherrynoize9987@outlook.com | hello@kite.studio (<- if you have doubts this guy probably knows best)
