import React, {useContext} from 'react'
import './header.scss'
import back from '../../images/back.png'
import { NavAdapt } from '../navAdapt/NavAdapt';
import { Scroll } from '../scroll/Scroll';
import { MainContext } from '../../context/MainContext';


export const Header = () =>{


    const {state} = useContext(MainContext)

    return(
        <header>
            <img src= {back} alt = {back}/>
            <NavAdapt/>
            {state.goMenu ? '' : <Scroll/>}
            
        </header>
    )
}