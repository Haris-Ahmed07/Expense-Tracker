import { useContext } from "react";
import { GlobalContext } from "../Context/GlobleState";


const NewIncomeExpenses = () => {
   const { transactions } = useContext(GlobalContext)
   const color= {
    color:'black'
   }
   const amounts = transactions.map(transaction => transaction.amount)
   const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
   const expense = (amounts.filter(item => item < 0).reduce((acc, item)=>(acc += item), 0) * -1).toFixed(2);

   return (
    <div className='inc-exp-container' style={{borderRadius:'20px'}}>
    <div>
      <h4 style={color}>Income</h4>
      <p className='money plus'>{income}</p>
    </div>
    <div>
      <h4 style={color}>Expensee</h4>
      <p className="money minus">{expense}</p>
    </div>
  </div>
  )
  }
  
  export default NewIncomeExpenses;