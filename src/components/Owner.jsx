import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContex";

const Owner = () => {
  const { handleChange, uploadFile } = useContext(TransactionContext);
  return (
    <div className="flex w-full h-full items-center text-white flex-col sm:flex-row ">
      <div className="w-1/2 m-10 sm:w-full">
        <h1 className="flex text-5xl justify-center py-10 px-14 font-bold w-full">
          Upload your data over distributed network
        </h1>
      </div>
      <div className="w-1/2 p-10 sm:w-full">
        <form onSubmit={uploadFile} className="flex flex-col w-auto">
          <label htmlFor="inputTag" className="cursor-pointer text-3xl flex justify-center">
            select file <br/>
            <input type="file" id="inputTag" name="results" onChange={handleChange} className="hidden" />
          </label>
          <button className="bg-black p-3 drop-shadow-d rounded-full lg:w-1/2 lg:m-auto">upload</button>
        </form>
      </div>
    </div>
  );
};

export default Owner;
