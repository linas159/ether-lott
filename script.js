let account;
const connectMetamask = async () =>{
    if (window.ethereum !== "undefined") {
    const accounts = await ethereum.request({method: "eth_requestAccounts"});
    account = accounts[0];
    document.getElementById("accountArea").innerHTML = account;
    }
}

const connectContract = async () => {
    const ABI = [
{
"inputs": [],
"name": "enter",
"outputs": [],
"stateMutability": "payable",
"type": "function"
},
{
"inputs": [],
"name": "pickWinner",
"outputs": [],
"stateMutability": "nonpayable",
"type": "function"
},
{
"inputs": [],
"stateMutability": "nonpayable",
"type": "constructor"
},
{
"inputs": [],
"name": "getBalance",
"outputs": [
    {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [],
"name": "getPlayers",
"outputs": [
    {
        "internalType": "address payable[]",
        "name": "",
        "type": "address[]"
    }
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [],
"name": "getRandomNumber",
"outputs": [
    {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [
    {
        "internalType": "uint256",
        "name": "lottery",
        "type": "uint256"
    }
],
"name": "getWinnerByLottery",
"outputs": [
    {
        "internalType": "address payable",
        "name": "",
        "type": "address"
    }
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [
    {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }
],
"name": "lotteryHistory",
"outputs": [
    {
        "internalType": "address payable",
        "name": "",
        "type": "address"
    }
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [],
"name": "lotteryId",
"outputs": [
    {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [],
"name": "owner",
"outputs": [
    {
        "internalType": "address",
        "name": "",
        "type": "address"
    }
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [
    {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }
],
"name": "players",
"outputs": [
    {
        "internalType": "address payable",
        "name": "",
        "type": "address"
    }
],
"stateMutability": "view",
"type": "function"
}
];
    const Address = "0x08D4098AB7599d980F0d25Fbf334056Cf98A46cC";
    window.web3 = await new Web3(window.ethereum);
    window.contract = await new window.web3.eth.Contract( ABI, Address); 
    document.getElementById("contractArea").innerHTML = "connected to smart contract";
}

const enter = async () => {
try {
    await window.contract.methods.enter().send({
        from: account,
        value: '1000000000000000000',
        gas: 3000000,
        });
    let balance = await window.contract.methods.getBalance().call();
    document.getElementById("prizePool").innerHTML = balance/1000000000000000000;
}
catch (error) {
    console.log("ERROR ENTERING", error);
}
}

// const refresh = async () => {
//     try {
//         let balance = await window.contract.methods.getBalance().call();
//         document.getElementById("prizePool").innerHTML = balance/1000000000000000000;
//     }
//     catch (error) {
//         console.log("ERROR ENTERING", error);
//     }
// }

const pickWinner = async () => {
    try {
        await window.contract.methods.pickWinner().send({ 
            from: account,
        });
        const lottID = await window.contract.methods.lotteryId().call();
        const winner = await window.contract.methods.getWinnerByLottery(lottID-1).call();
        document.getElementById("winner").innerHTML = "Winner is " + winner;
    }
    catch (error) {
        console.log("ERROR PICKING", error);
    }
}