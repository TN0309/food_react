import React, { useLayoutEffect, useState } from 'react'
import './HomTom.scss'

function HomTom({setVal}) {
   return (
    <div className='home_tom'>
      <div className='top_title'>
        <h2>Jeager Resto</h2> <br />
        <p>Tuesday, 2 Feb 2021</p>
      </div>
      <div className='top_search'>
      <i className="bi bi-search"></i>
      <input onChange={(e)=> setVal(e.target.value)} type="text" placeholder='search...' />
      </div>
    </div>
  )
}

export default HomTom
