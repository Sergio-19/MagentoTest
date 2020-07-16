import React, {useContext} from 'react'
import './navAdapt.scss'
import { MainContext } from '../../context/MainContext';



export const NavAdapt = () =>{

    const {state} = useContext(MainContext)

    const cls = ['fa']
    const classes = ['adapt_content']

    if(state.showNav){
        cls.push('fa-times')
        classes.push('show_adapt_content')
    }else{
        cls.push('fa-bars')
    }

    return(
        <div className = 'adapt'>
        <div>
           <div className = 'adapt_head'>
            <i className = {cls.join(' ')} onClick = {!state.showNav ? state.showMenuHandler : state.hideMenuHandler}/>
        </div>
        <div className = {classes.join(' ')}>

        <ul>
            <li><a href = '/'>HOME</a></li>
            <li><a href = '/'>ABOUT ME</a></li>
            <li><a href = '/'>PORTFOLIO</a></li>
            <li><a href = '/'>CONTACT</a></li>
            <li><a href = 'https://github.com' target= '_blank' rel="noopener noreferrer">GitHub...</a></li>
        </ul>

        
        
        </div> 
        </div>
        


        </div>
    )
}