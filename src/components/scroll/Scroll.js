import React from 'react'
import './scroll.scss'
import arrow from '../../images/arrow.png'



export const Scroll = () =>{

    return(
        <div className = 'scroll_wrap'>
          <div className = 'scroll'>
            <div className = 'scroll_text'>
                <h4>SCROLL DOWN TO SEE MORE</h4>
            </div>
            <div className = 'scroll_arrow'>
                <img src = {arrow} alt = {arrow}/>
            </div>
            
            </div>  
        </div>
        
    )
}