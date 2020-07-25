// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

contract BankContract {

    struct Account { 
      string name;
      uint balance;
   }
   mapping (uint => Account) accounts;
   
   uint account_index = 1 ;
   
    function createAccount(string memory name , uint balance) public returns(bool) {
        accounts[account_index] = Account(name , balance);
        account_index = account_index + 1 ;
        emit BankEvent(msg.sender, "Account created");
        return true;
    }

    function checkBalance(uint index) public view returns(uint) {
        return accounts[index].balance;
    }

    function getAccountName(uint index) private view returns (string memory) {
        return accounts[index].name;
    }

    event BankEvent(address from, string message);
}