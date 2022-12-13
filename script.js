const Web3 = require("web3");
const web3 = new Web3("http://127.0.0.1:7545/");
const lotteryJSON = require("./build/contracts/Lottery.json");

// const getAccounts = async () => {
//     try {
//       const accounts = await web3.eth.getAccounts();
//       console.log(accounts);
//     } catch (error) {
//       console.log("ACCOUNTS ERROR", error);
//     }
// }

// getAccounts();

const contract_address = "0x08D4098AB7599d980F0d25Fbf334056Cf98A46cC";

const lottery = new web3.eth.Contract(lotteryJSON.abi, contract_address);

const getPlayers = async () => {
    try {
      const response = await lottery.methods.getPlayers().call();
      console.log(response);
    } catch (error) {
      console.log("ERROR GETTING PLAYERS")
    }
}

getPlayers();

// const betInfo = await RouletteWeb.methods.getPlayerLastGameRound().call({
//     from: addr,
//     value: '0'
//   });