import style from './CatalogProduct.module.css';
import { API_URI } from '../../const';
import { addProduct } from '../../store/order/orderSlise';
import { useDispatch } from 'react-redux';


export const CatalogProduct = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <article className={style.product}>
      <img src={`${API_URI}/${item.image}`} alt={item.title} className="image" />

      <p className={style.price}>{item.price}<span className="currency">&nbsp;₽</span></p>

      <h3 className={style.title}>
        <button className={style.detail}>{item.title}</button>
      </h3>

      <p className={style.weight}>{item.weight}</p>

      <button className={style.add} type="button"
        onClick={() => {
          dispatch(addProduct({ id: item.id }))
        }}
      >Добавить</button>
    </article>
  )
}