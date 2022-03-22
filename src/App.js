import React, { useEffect } from "react";
import Greeter from "./BE/src/artifacts/contracts/Greeter.sol/Greeter.json";
import { ethers } from "ethers";

export default function App() {
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Please install MetaMask!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);
      fetchGreetings();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchGreetings = async () => {
    let contractAddress = "YOUR_CONTRACT_ADDRESS";
    const { ethereum } = window;

    if (!ethereum) {
      alert("Please install MetaMask!");
      return;
    }

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      contractAddress,
      Greeter.abi,
      provider
    );

    const greeting = await contract.greet();
    console.log(greeting);
  };

  useEffect(() => {
    connectWallet();
  }, []);

  return <div></div>;
}
