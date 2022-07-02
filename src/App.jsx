import React ,{useContext , useEffect , useState} from 'react';
import Footer from "./components/Footer"
import Header from "./components/Header"
import History from "./components/History"
import Welcome from "./components/Welcome"
import { TransactionContext } from "./context/TransactionContex";
const App = () => {  
  const { results } = useContext(TransactionContext);
  const [load , setLoad] = useState(false);

  useEffect(()=>{
    if(results){
      setLoad(true);
    }
  },[results]);

  return (
    <div className="App">
      <Header />
      <Welcome />
      {load ? <History {...results}/> : <p>Loading Data</p>}
      <Footer />
    </div>
  )
}

export default App
