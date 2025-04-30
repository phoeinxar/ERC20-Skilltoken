# ERC20-Skilltoken
---
# SkillToken (ERC-20)

A custom ERC-20 token with:

- 🔒 OnlyOwner mint
- 🔥 User burn
- 🛡️ Reentrancy protection
- 🌐 React + Ethers.js frontend

## Deploy
```bash
npx hardhat run scripts/deploy.js --network localhost
```

## Test
```bash
npx hardhat test
```

## Frontend
```bash
cd frontend && npm install && npm start
```

Replace `CONTRACT_ADDRESS` in `App.js` with the deployed address.

## Security
- `onlyOwner` on `mint`
- `nonReentrant` on `burn`

## Stack
- Hardhat
- Solidity + OpenZeppelin
- React + Ethers.js
