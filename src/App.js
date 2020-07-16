import React from 'react';
import './app.scss';
import { Layout } from './layouts/Layout';
import { Nav } from './components/nav/Nav';
import {connect} from 'react-redux'
import {MainContext} from './context/MainContext'
import { showMenu, hideMenu, scrollPage } from './redux/actionCreators/menu';

class App extends React.Component{


  render(){
 
    window.addEventListener('scroll', this.props.scrollPage)


    return(
      <MainContext.Provider  value = {{state: this.props}}>
          <div className = 'app'>
            <Layout/>
            <Nav/>
          </div>
     </MainContext.Provider> 
    )
    
  }
}


  function mapStateToProps(state){
    return{
      showNav: state.showNav,
      goMenu: state.goMenu,
      scrollHeight: state.scrollHeight

    }
  }

  function mapDispatchToProps(dispatch){
    return{
      showMenuHandler: ()=> dispatch(showMenu()),
      hideMenuHandler: ()=> dispatch(hideMenu()),
      scrollPage: ()=> dispatch(scrollPage())

    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(App)
