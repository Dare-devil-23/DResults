import React from "react";
import CsvReader from "./CsvReader";
const History = (results) => {
  const resArr = Object.keys(results).map((key) => results[key]);
  return (
    <div className="bg-zinc-800 text-white pb-32">
      <div className="flex p-5 items-center justify-center text-2xl font-bold">
        Available Results
      </div>
        <div>
      {resArr.map((ele, i) => {
        //  console.log(`https://gateway.ipfs.io/ipfs/${ele.fileHash}`)
        // return <p key={i}>fileName : {ele.fileName} <br/> <a  rel="noreferrer" target={"_blank"} href={`http://ipfs.infura.io/ipfs/${ele.fileHash}` } >Result {i}</a></p>
        return (
          <div key={i}>
            {i === 4 && (
              <CsvReader
                file={`https://gateway.ipfs.io/ipfs/${ele.fileHash}`}
              />
            )}
          </div>
        );
      })}</div>
    </div>
  );
};

export default History;
