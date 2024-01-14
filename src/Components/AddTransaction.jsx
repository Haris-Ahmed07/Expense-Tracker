import React, { useContext, useState } from 'react'
import { GlobalContext } from '../Context/GlobleState';


const AddTransaction = () => {
    const {addTransanction} = useContext(GlobalContext)

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const onSubmit = e => {
        e.preventDefault();

        const addNewTransaction = {
            id: Math.floor(Math.random()*100000000),
            text,
            amount: +amount
        }

        addTransanction(addNewTransaction);
    }

  return (
    <>
    <h3>Add New Transaction</h3>
    <form onSubmit={onSubmit}> 
        <div className="form-control">
            <h3 htmlFor="Text" style={{fontSize:'15px'}}>Purpose</h3>
            <input style={{borderRadius:'20px'}} required type="text" id='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter Purpose...' />
        </div>
        <div className="form-control">
            <h3 htmlFor="Amount" style={{fontSize:'15px'}}>
                Amount
                ( <span style={{color:'#c0392b'}}>- Negative Expense</span>  ,  <span style={{color:'#2ecc71'}}>+ Positive Expense</span> )
            </h3>
            <input style={{borderRadius:'20px'}} required type="text" id='amount' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='enter amount...'/>
        </div>
        <button className='btn' style={{fontSize:'18px', backgroundColor:'green'} }>Add Expense</button>
    </form>
    </>
  )
}

export default AddTransaction