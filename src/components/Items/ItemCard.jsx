import { Link } from 'react-router-dom'
import './ItemCard.css'

const ItemCard = ({item}) => {

  const {id, title,images } = item

  return (
    <div className='itemCard'>
      <Link to={`/${id}`}>
        <h2>{title}</h2>
        <img src={images[0]} alt="{title}" />
      </Link>
    </div>
  )
}

export default ItemCard