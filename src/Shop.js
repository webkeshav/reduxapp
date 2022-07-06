import React from 'react'
import { bindActionCreators } from 'redux';
import {actionCreators} from './state/index';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';


const Shop = () => {
  const dispatch = useDispatch();
  const {withdrawMoney,depositMoney} = bindActionCreators(actionCreators, dispatch)
  return (
    <div>
      <h3 className='m-4'>Deposit/Withdraw Money</h3>
      <button className='btn btn-primary mx-3' onClick={()=>{withdrawMoney(100)}}>-</button>
      Update Balance
      <button className='btn btn-primary mx-3' onClick={()=>{depositMoney(100)}}>+</button>
    </div>
  )
}

export default Shop
