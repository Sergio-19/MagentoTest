import React, {useContext} from 'react'
import './nav.scss'
import { MainContext } from '../../context/MainContext';




export const Nav = () =>{

    const {state} = useContext(MainContext)

    let height = state.scrollHeight

    const cls = ['nav_container']

    if(height > 0 && height < 500){
        cls.push('nav_fixed')
    }

    if(height >= 500){
        cls.push('nav_absolute')
    }



    return(
        <nav>
            <div className = {cls.join(' ')}>
                <div>
                  <ul>
                    <li><a href= '/'>HOME</a></li>
                    <li><a href= '/'>ABOUT ME</a></li>
                    <li><a href= '/'>PORTFOLIO</a></li>
                    <li><a href= '/'>CONTACT</a></li>
                 </ul>  
                </div>
                 
                 <hr/>
            </div>
        </nav>
    )
}