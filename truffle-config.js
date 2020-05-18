require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glide fruit sugar fire ridge remember social imitate problem sword turkey'; 
let testAccounts = [
"0x2d53f4269df95738f5691dbefc19007da25adfb477f17aa923f93bd481c1e8de",
"0x4c82ff02690e17cec7c8116f6d6451776e2c2fea7c70dfa45669eed7163deba4",
"0x0f9578514a8bd92766c4781d9f707acff06de9ad112914eb502f434dbe006162",
"0x7ded3ef72472be59e845a6e8f24285fb435bd1c97fc1f9301a53fa11a2440459",
"0x0017873b5c80596ad3513e30dd71dd2883c8f5a321cd1c264fe10105d81a4af1",
"0x4e9dd9b637102242f94efe2960a90cdb6505a810542cbabd02e8896578255ef8",
"0x6676658fa7134d4958d9c782abef5a654dd07bf2512f47ee27df9d06cd6410bc",
"0xeaa4c8c7f4e79ef85b4d63a8c21b3407746ef52e683d1008daddd5ec0c0db3a7",
"0x55bee0f584e95a313770cdbe31d5c64ed031a7571b222f98ac73b858d9341c9d",
"0x81df036846accfb58ae22288fafda05aa0eaa77fbf560e24921d2bd57da20cfa"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
