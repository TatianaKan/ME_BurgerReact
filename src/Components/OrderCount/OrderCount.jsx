import style from './OrderCount.module.css'

export const OrderCount = (props) => (
  <div className={style.count}>
    <button className={style.minus}>-</button>
    <p className={style.amount}>{props.count}</p>
    <button className={style.plus}>+</button>
  </div>
)