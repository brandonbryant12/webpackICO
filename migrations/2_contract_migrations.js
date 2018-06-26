const ICOCoinCrowdsale = artifacts.require('./ICOCoinCrowdsale.sol');
const ICOCoin = artifacts.require('./ICOCoin.sol');

module.exports = function(deployer, network, accounts) {
    

    const openingTime = 1530116982;//web3.eth.getBlock('latest').timestamp + 2; // two secs in the future
  //  const openingTime = Math.round((new Date()).getTime() / 1000)-86400;
    const closingTime = openingTime + 86400 * 20; // 20 days
    const rate = new web3.BigNumber(1000);
    const wallet = accounts[0];
    console.log(typeof(1530030279));
    console.log(openingTime);


    return deployer
        .then(() => {
            return deployer.deploy(ICOCoin,
                {
                    gas:1842978
                });
        })
        .then(() => {
            console.log(ICOCoin.address);
            console.log(rate);
            return deployer.deploy(
                ICOCoinCrowdsale,
                openingTime,
                closingTime,
                rate,
                wallet,
                ICOCoin.address, 
                {
                    gas:1835280
                }
            );
        });
};