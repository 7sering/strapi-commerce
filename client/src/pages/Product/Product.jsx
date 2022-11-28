import {useState} from 'react'
import AddShoppingCart from "@mui/icons-material/AddShoppingCart"
import FavoriteBorder from "@mui/icons-material/FavoriteBorder"
import Balance from "@mui/icons-material/Balance"

import "./Product.scss"


const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const images = [
    "https://images.pexels.com/photos/1770193/pexels-photo-1770193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1816644/pexels-photo-1816644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ]
  return (
    <div className='product'>
      <div className='left'>
        <div className='images'>
          <img src={images[0]}  alt='singleProduct' onClick={e=>setSelectedImg(0)}/>
          <img src={images[1]}  alt='singleProduct' onClick={e=>setSelectedImg(1)}/>
        </div>

        <div className='mainImg'>
          <img src={images[selectedImg]} alt='mainImage' />
        </div>
      </div>
      <div className='right'>
        <h1>Brown Flees Jacket</h1>
        <span className='price'>$199</span>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        <div className='quantity'>
          <button onClick={()=>setQuantity(prev=>prev === 1 ? 1 : prev-1)}>-</button>
          {quantity}
          <button onClick={()=>setQuantity(prev=>prev+1)}>+</button>
        </div>

        <button className='add'>
          <AddShoppingCart/> ADD TO CART
        </button>

        <div className='link'>
            <div className='item'>
              <FavoriteBorder/> ADD TO WISHLIST
            </div>
            <div className='item'>
              <Balance/> ADD TO COMPARE
            </div>
        </div>

        <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>

      </div>
    </div>
  )
}

export default Product