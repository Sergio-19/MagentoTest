import React from 'react'
import './block.scss'
import photo from '../../images/photo.png'


export const Block = () =>{

    return(
        <div className = 'block_container'>
        <div className = 'block_photo'>
            <img src = {photo} alt = {photo}/>
        </div>
        <div className = 'block_text'>

            <div className = 'block_text_head'>
                <h1>ABOUT ME</h1>
            </div>

            <div className = 'block_text_content'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>

            <div className = 'block_text_foot'>
                <h3>Jason Wood</h3>
            </div>
        
        
        </div>
     </div>
    )
}