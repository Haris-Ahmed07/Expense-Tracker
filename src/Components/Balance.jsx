import { useContext } from "react"
import { GlobalContext } from "../Context/GlobleState"


const Balance = () => {
   const { transactions } = useContext(GlobalContext)
   const amounts = transactions.map(transaction => transaction.amount);
   console.log(amounts);
   const total = amounts.reduce((acc, item)=>(acc += item), 0).toFixed(2);

  return (
    <>
        <h4 style={{fontSize:'20px'}}>Your Balance</h4>
        <h1 style={{color:'#2ecc71'}}>${total}</h1>
    </>
  )
}

export default Balance