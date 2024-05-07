import React, { useState } from 'react'
import './Order.scss'

function Order({render, setRender}) {
  const [active, setActive] = useState(1)
  let localData = JSON.parse(window.localStorage.getItem('locdata'))
  function delFood(id){
    setRender(!render)
     window.localStorage.setItem('locdata', JSON.stringify(localData.filter((i)=> i.id !== id)))
  }
  return (
    <div className="order">
      <h2>Order #34562</h2> <br />
      <div className='btn_list'>
       <button className={active === 1 ? 'order_btn active': 'order_btn'}onClick={()=>setActive(1)}>Dine in</button>
       <button className={active === 2 ? 'order_btn active': 'order_btn'}onClick={()=>setActive(2)}>Take away</button>
       <button className={active === 3 ? 'order_btn active': 'order_btn'}onClick={()=>setActive(3)}>Delivery</button>
    </div> <br />
    <ul className="order_list">
      {localData?.map((item, index)=>(
          <li key={index } className="order_item">
          <div className='item_top'>
         <img src={item.img} alt="" />
         <div>
          <h4>{item.title}</h4>
          <p>{item.price} som</p>
         </div>
         <span>
        {item.count}
         </span>
         <p>{item.price * item.count} som</p>
          </div> <br />
          <div className="item_bot">
            <input type="text" placeholder='order note...' />
            <button onClick={()=> delFood(item.id)}><i className="bi bi-trash"></i></button>
          </div>
      </li>  
       ))
      }
    </ul>
     </div>
  )
}
  
export default Order
