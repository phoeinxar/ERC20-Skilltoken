import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import SkillToken from "./contract/SkillToken.json";

const CONTRACT_ADDRESS = "YOUR_DEPLOYED_CONTRACT_ADDRESS";

function App() {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [balance, setBalance] = useState("0");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    const init = async () => {
      const prov = new ethers.providers.Web3Provider(window.ethereum);
      await prov.send("eth_requestAccounts", []);
      const signer = prov.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, SkillToken.abi, signer);

      setProvider(prov);
      setSigner(signer);
      setContract(contract);
    };
    init();
  }, []);

  const getBalance = async () => {
    const address = await signer.getAddress();
    const bal = await contract.balanceOf(address);
    setBalance(bal.toString());
  };

  const burnTokens = async () => {
    const tx = await contract.burn(ethers.utils.parseUnits(amount, 18));
    await tx.wait();
    setAmount("");
    getBalance();
  };

  return (
    <div className="App">
      <h1>SkillToken Dashboard</h1>
      <button onClick={getBalance}>Get Balance</button>
      <p>Balance: {balance}</p>
      <input
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount to burn"
      />
      <button onClick={burnTokens}>Burn</button>
    </div>
  );
}

export default App;
