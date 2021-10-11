# ether_token_swap

This is a Ethereum to ERC20 token uniswap software. You create your own ERC20 tokens and exchange it with Ether or vise-versa. 

# 1)Project Name:  Ethereum Token Swap Exchange
    # Technologies               :    Nodejs,Solidity,Smart Contract,Truffle,MetaMask, Reactjs, 
Scope Of Project: In this project, a user can create his own ERC20 tokens and then set up an exchange to buy/sell his tokens against Ether. Swapping part is finished. However, more functionalities would be added in future. The idea is to swap tokens against fiat currencies. This could be crucial to build apps that provide decentralised services like cab booking, donation portals.

# install Truffle
npm install -g truffle

# intialize Truffle Project
truffle init

# compile Truffle Project
truffle compile

# use Metamask wallet

# use infura for deploying project on Ropsten TestNet
Infura is a Web3 backend and Infrastructure-as-a-Service (IaaS) provider that offers a range of services and tools for blockchain developers. This includes the Infura API (Application Programming Interface) suite. The flagship Infura Ethereum API is at the heart of the Infura Web3 service.

# install following things  for deployment

npm install fs

npm install @truffle/hdwallet-provider



# Migrate Truffle Project for Ropsten Project

truffle migrate --network ropsten

truffle deploy --network ropsten --reset --compile-none


# for add fack token in ropsten

goto website https://faucet.ropsten.be/

# for check transaction details about accounts

goto website https://ropsten.etherscan.io/


