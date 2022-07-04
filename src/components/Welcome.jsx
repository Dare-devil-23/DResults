import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContex";
import Owner from "./Owner";
import Student from "./Student";
const Welcome = () => {
  const { connectWallet, currentAccount, owner } =
    useContext(TransactionContext);
  return (
    <div className="h-2/5">
      {!currentAccount ? (
        <div>
          <button type="button" onClick={connectWallet}>
            Connect
          </button>
        </div>
      ) : (
        <div>{currentAccount === owner ? <Owner /> : <Student />}</div>
      )}
    </div>
  );
};

export default Welcome;
