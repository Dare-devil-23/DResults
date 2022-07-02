import React,{useContext} from "react";
import { TransactionContext } from "../context/TransactionContex";
import Owner from './Owner';
import Student from './Student';
const Welcome = ()=>{
    const { connectWallet , currentAccount , owner} = useContext(TransactionContext);
    return(
        <div>
            {!currentAccount && <div>
                <button type="button" onClick={connectWallet}>Connect</button>
            </div>}
            {(currentAccount === owner) ? 
                <Owner />
            : <Student />}
            
        </div>
    )
}

export default Welcome;