// 运行前，请确保服务127.0.0.1:8545运行，请在另一个终端执行 node_modules/.bin/ganache-cli
// 然后在另一个终端运行 node，再执行分别执行以下命令

Web3 = require('web3')
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
web3.eth.accounts

code = fs.readFileSync('Voting.sol').toString()
solc = require('solc')

input = {language: 'Solidity', sources: {['Voting.sol']: {content: code}},settings:{outputSelection:{'*':{'*':['*']}}}}
output = JSON.parse(solc.compile(JSON.stringify(input)))

abi = output.contracts['Voting.sol']['Voting'].abi
bytecode = output.contracts['Voting.sol']['Voting'].evm['bytecode'].object


