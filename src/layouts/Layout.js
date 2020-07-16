import React, {Fragment} from 'react'
import './layout.scss'
import { Header } from '../components/header/Header';
import { Block } from '../components/block/Block';







export const Layout = () =>{



    return(
        <Fragment>
            <Header/>
            <div className = 'layout'>
                <Block/>
            </div>
        </Fragment>
    )
}