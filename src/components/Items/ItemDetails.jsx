import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ItemDetails.css'

const ItemDetails = () => {
    
    const [item, setItem] = useState({});
    
    const params = useParams();

    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/${params.id}`)
        .then((res)=>setItem(res.data))
    },[params.id]);

    console.log(item.title);

  return (
      <div className='itemDetails'>

        {
            item &&
            <p>{item.title}</p>
        }

    </div>
  )
}

export default ItemDetails