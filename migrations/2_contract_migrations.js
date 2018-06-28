const ICOCoinCrowdsale = artifacts.require('./ICOCoinCrowdsale.sol');
const ICOCoin = artifacts.require('./ICOCoin.sol');

module.exports = function(deployer, network, accounts) {

    const openingTime = Math.round((new Date()).getTime() / 1000)+360;
    const closingTime = openingTime + 86400 * 20; // 20 days
    const rate = new web3.BigNumber(5000000000000000);
    const wallet = accounts[0];

    return deployer
        .then(() => {
            return deployer.deploy(ICOCoin,
                {
                    gas:2842978
                });
        })
        .then(() => {
            coinInst = ICOCoin;
            return deployer.deploy(
                ICOCoinCrowdsale,
                openingTime,
                closingTime,
                rate,
                wallet,
                ICOCoin.address, 
                {
                    gas:2835280
                }
        ).then(()=>{
            ICOCoinInstance = ICOCoin.at(ICOCoin.address)
            ICOCoinInstance.transferOwnership(ICOCoinCrowdsale.address)
        })
    });
};