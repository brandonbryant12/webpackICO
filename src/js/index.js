import React from 'react'
import ReactDOM from 'react-dom'
//import Web3 from 'web3'
import {default as contract} from 'truffle-contract'
import ICOCoin from '../../build/contracts/ICOCoin.json'
import ICOCoinCrowdsale from '../../build/contracts/ICOCoinCrowdsale.json'
import Content from './Content'
//import 'bootstrap/dist/css/bootstrap.css'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tokenName:'',
      account:0,
      openTime:0,
      closeTime:0,
      eth_balance:0,
      rate:0,
      tokenBalance:0,
      totalSupply:0,
      crowdsaleInst: '',
    }

/*

    if (typeof web3 != 'undefined') {
      this.web3Provider = web3.currentProvider
    } else {
      this.web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545')
    }



    this.web3 = new Web3(this.web3Provider)
    console.log("Is connected: ", this.web3.isConnected())
    console.log("Current Provider: ",this.web3.currentProvider)
    console.log("Default Account: ", this.web3.eth.accounts[0])
    



    this.token = contract(ICOCoin)
    this.crowdsale = TruffleContract(ICOCoinCrowdsale)
    this.token.setProvider(this.web3Provider)
    this.crowdsale.setProvider(this.web3Provider)
    this.buyTokens = this.buyTokens.bind(this)
    this.watchEvents = this.watchEvents.bind(this)

  }

  buyTokens(amount) {
    console.log("Buy: ", amount)
    /*this.setState({ voting: true })
    this.electionInstance.vote(candidateId, { from: this.state.account }).then((result) =>
      this.setState({ hasVoted: true })
    )*/
    /*this.crowdsaleInst.buyTokens(this.state.account,
    {
      from:this.state.account, 
      gas:2100000, 
      value: web3.toWei(amount,'ether')
    }).then((result) =>{
      console.log(result)
      this.tokenInstance.totalSupply().then((supply) =>{ this.setState({totalSupply:supply.toString(10)})});
      this.tokenInstance.balanceOf(this.account).then((balance) =>{this.setState({tokenBalance:balance.toString(10)})});

    })*/
  }
  watchEvents() {
    /*// TODO: trigger event when vote is counted, not when component renders
    this.electionInstance.votedEvent({}, {
      fromBlock: 0,
      toBlock: 'latest'
    }).watch((error, event) => {
      this.setState({ voting: false })
    })*/
  }
  componentDidMount() {

    ///let crowdSaleAddress;
    // TODO: Refactor with promise chain
    /*this.web3.eth.getCoinbase((err, account) => {
      this.setState({account:account})
      /*this.web3.eth.getBalance(account, (err,balance)=>{
        if (!err){
          console.log("Eth_balance: ", web3.fromWei(balance, 'ether').toString(10));
          balance = web3.fromWei(balance, 'ether').toString(10)
          this.setState({eth_balance:balance})
        }
      })*/
      //this.crowdsale.deployed().then((crowdsaleInst) => {
        //this.crowdsaleInst = crowdsaleInst
        /*this.crowdsaleInst.openingTime().then((time) =>{
          let date = new Date(time.toNumber()*1000);
          this.setState({openTime:date.toString()})
        })*/
        /*this.crowdsaleInst.closingTime().then((time) =>{
          let date = new Date(time.toNumber()*1000);
          this.setState({closeTime:date.toString(10)})
        })*/
        /*this.crowdsaleInst.rate().then((r) =>{
          this.setState({rate:r.toString(10)})
        })
      })
      this.token.deployed().then((tokenInstance) => {
        this.tokenInstance = tokenInstance
        this.watchEvents()
        //this.tokenInstance.name().then((name) =>{ this.setState({tokenName:name})});
        //this.tokenInstance.totalSupply().then((supply) =>{ this.setState({totalSupply:supply.toString(10)})});
        //this.tokenInstance.balanceOf(account).then((balance) =>{this.setState({tokenBalance:balance.toString(10)})});
      })
    })*/
  }
  render() {
    return (
      <div class='row'>
        <div class='col-lg-12' >
          <br/>
          { this.state.loading 
            ? <p class='text-center'>Loading...</p>
            : <Content
            	 tokenName={this.state.tokenName}
                account={this.state.account}
                openTime={this.state.openTime}
                closeTime={this.state.closeTime}
                eth_balance={this.state.eth_balance}
                rate={this.state.rate}
                tokenBalance={this.state.tokenBalance}
                totalSupply={this.state.totalSupply} 
                buyTokens={this.buyTokens}/>
          }
        </div>
      </div>
    )
  }
}


ReactDOM.render(
   <App />,
   document.querySelector('#root')
)







