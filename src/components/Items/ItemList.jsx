import { useEffect, useState } from 'react'
import ItemCard from './ItemCard'
import axios from 'axios'
import './ItemList.css'

const ItemList = () => {

  const [items, setItem] = useState([])

  useEffect(()=>{
    axios.get('https://dummyjson.com/products')
    .then((res)=> setItem(res.data.products))
},[])

  return (
    <div className='itemlist'>
        {items.map((item)=>(
          <ItemCard key={item.id} item={item} />
        ))}
    </div>
  )
}

export default ItemList