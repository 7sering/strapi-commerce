import { useParams } from 'react-router-dom'
import List from '../../Components/List/List'
import { useState } from 'react';
import "./Products.scss"


const Products = () => {
  const catId = parseInt(useParams().id)
  const [sort, setSort] = useState(null)
  const [maxPrice,setMaxPrice] = useState(1000)
  
  // console.log(param);
  return (
    <div className='products'>
    {/* LEFT SECTION */}
      <div className='left'>
        <div className='filterItem'>
          <h2> Product Categories </h2>
          <div className='inputItem'>
            <input type="checkbox" id='1' value={1}/>
            <label htmlFor='1'>Shoes</label>
          </div>
          <div className='inputItem'>
            <input type="checkbox" id='2' value={2}/>
            <label htmlFor='1'>Skirts</label>
          </div>
          <div className='inputItem'>
            <input type="checkbox" id='3' value={3}/>
            <label htmlFor='1'>Jackets</label>
          </div>
        </div>
        <div className='filterItem'>
        <h2> Filter by price</h2>
        <div className='inputItem'>
            <span>0</span>
           <input type="range" min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className='filterItem'>
        <h2> Sort by </h2>
        <div className='inputItem'>
            <input type="radio" id='asc' value="asc" name='price' onChange={e=>setSort("asc")}/>
            <label htmlFor='asc'> Price (Lowest First) </label>
        </div>
        <div className='inputItem'>
            <input type="radio" id='desc' value="asc" name='price' onChange={e=>setSort("desc")} />
            <label htmlFor='desc'> Price (Highest First) </label>
        </div>
        </div>
      </div>


    {/* RIGHT SECTION */}
      <div className='right'>
        <img src='https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='cover' className='catImg'/>

        <List catId={catId} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  )
}

export default Products