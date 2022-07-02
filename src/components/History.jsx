import React from "react";
import CsvReader from "./CsvReader";
const History = (results)=>{
    const resArr = Object.keys(results).map((key) => results[key]);
    return(
        <div>
            History
            <br/>
            {resArr.map((ele,i)=>{
                // console.log(`https://ipfs.infura.io/ipfs/${ele.fileHash}`)
                // return <p key={i}>fileName : {ele.fileName} <br/> <a  rel="noreferrer" target={"_blank"} href={`http://ipfs.infura.io/ipfs/${ele.fileHash}` } >Result {i}</a></p>
                return <>
                    {i===4 && <CsvReader key={i} file={`https://ipfs.infura.io/ipfs/${ele.fileHash}`}/>}
                </>

            })}
        </div>
    )
}

export default History;