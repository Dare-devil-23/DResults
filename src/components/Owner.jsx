import React , { useContext }from "react";
import { TransactionContext } from "../context/TransactionContex";

const Owner = () => {
  const {handleChange , uploadFile} = useContext(TransactionContext);
  return (
    <div>
      <form onSubmit={uploadFile}>
        <input
          type="file"
          name="results"
          onChange={handleChange}
        />
        <button>upload</button>
      </form>

    </div>
  );
};

export default Owner;
