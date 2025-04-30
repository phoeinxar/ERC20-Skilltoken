// File: erc20-skilltoken/contracts/SkillToken.sol

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract SkillToken is ERC20, Ownable, ReentrancyGuard {
    constructor() ERC20("SkillToken", "SKL") {}

    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }

    function burn(uint256 amount) external nonReentrant {
        _burn(msg.sender, amount);
    }
}
