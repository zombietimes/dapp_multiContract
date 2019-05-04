pragma solidity >=0.5.0;

import './HelloZombies.sol';

contract ImportZombies {
  HelloZombies public helloZombies;
  constructor() public {
    helloZombies = new HelloZombies();
  }
  function Read() external view returns (string memory) {
    string memory value = helloZombies.Get();
    return value;
  }
  function Write(string calldata value) external {
    helloZombies.Set(value);
  }
}
