import style from '../BooksList.module.scss';

function Item({ book }) {
  console.log('item atual: ', { book })
  return (
    <li className={style.item}>
      <h3>0</h3>
    </li>
  )
}

export default Item;