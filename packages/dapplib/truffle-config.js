require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter brand spot toy note pave column hunt inflict symptom genius'; 
let testAccounts = [
"0xa7a178ec5349597dc728c2ad48e072ea3c9d8ea0e9f00ee72bd8b9fa767478a1",
"0x4016d360e5ad7f122c93cd7a1d1ddb104d00ac210ae4720b47c7e74fe1518331",
"0x3d89cef311841c0be400cd47db54e268d16a72c62d1f7fd58598ad11af54c652",
"0x407537721f5d3e3c225bd98f7aede7336e0efe2ad13f2b38df85d410347adb86",
"0x2762b29a736a743563c6d822a5691298e2586142e994f2f0e8d5d3c245c3a0dd",
"0x79bdf4a1c80887ccebca2e8931d2b19f47d43d08948f64c37c32903aa67e72db",
"0x1869a07d6e334e0162080e837de40d883d5bf8fc7d94c75df341b221d6c257f4",
"0xabdd40bb60482c41a05fe10b5cd96acc68fb7672c2da1302ce0876f88c235aba",
"0xd6e531806e950a8fca7de5c69d134e99175955376f8109f7dab4d42f41c9970b",
"0xaabf459d8ca5ee693b902515d21b2f85eac9bab6d662bb128dd49711d616dbeb"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

