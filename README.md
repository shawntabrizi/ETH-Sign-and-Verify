# ETH Sign and Verify

Sign and verify messages using your Ethereum account. Demonstrates `signer.signMessage()` and `ethers.verifyMessage()` with a browser wallet.

**Try it out: [shawntabrizi.com/ETH-Sign-and-Verify](https://shawntabrizi.com/ETH-Sign-and-Verify/)**

## How It Works

**Sign:** Connect your wallet (MetaMask, etc.), type a message, and click "Sign Message" to produce a cryptographic signature.

**Verify:** Paste a message and signature to recover the signing address — no wallet needed.

Optionally hash the message with Keccak-256 before signing/verifying.

## Related Projects

- [ETH Balance](https://github.com/shawntabrizi/ethbalance) — Get the ETH balance of an address
- [ERC-20 Token Balance](https://github.com/shawntabrizi/ERC20-Token-Balance) — Query ERC-20 token balances
- [ETH Balance Graph](https://github.com/shawntabrizi/ethgraph) — Graph ETH balance history over time

## License

[MIT](LICENSE)
