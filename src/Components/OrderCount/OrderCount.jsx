import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addProduct, removeProduct } from '../../store/order/orderSlise';
import style from './OrderCount.module.css';

export const OrderCount = ({ count, id }) => {
  const dispatch = useDispatch();/// функц.компонент вызывается внутри корня

  const addCount = () => {
    dispatch(addProduct({ id }))
  }

  const removeCount = () => {
    dispatch(removeProduct({ id }))
  }

  return (
    <div className={style.count}>
      <button className={style.minus} onClick={removeCount}>-</button>
      <p className={style.amount}>{count}</p>
      <button className={style.plus} onClick={addCount}>+</button>
    </div>
  );
}