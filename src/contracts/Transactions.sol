// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Transactions {
    // Event declaration
    event uploadFile(
        address payable from,
        address to,
        string fileHash,
        string fileName,
        uint256 timeStamp
    );

    // Struct declaration
    struct UploadStruct {
        string fileHash;
        string fileName;
        uint256 timeStamp;
    }

    // State variables
    address private owner;
    uint256 private transactionCount;
    UploadStruct[] private uploads;

    // Constructor to initialize the contract owner
    constructor() {
        owner = msg.sender;
    }

    // Function to retrieve the owner address
    function getOwner() public view returns (address) {
        return owner;
    }

    // Function to retrieve the total transaction count
    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }

    // Function to retrieve the upload history
    function getHistory() public view returns (UploadStruct[] memory) {
        return uploads;
    }

    // Function to upload file details
    function uploadResults(
        address payable from,
        address to,
        string memory fileHash,
        string memory fileName
    ) public {
        uploads.push(UploadStruct(fileHash, fileName, block.timestamp));
        transactionCount++;
        emit uploadFile(from, to, fileHash, fileName, block.timestamp);
    }
}
