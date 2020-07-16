import { SHOW_NAV, HIDE_NAV, SCROLL_PAGE, GO_MENU, BACK_MENU } from "../actionTypes";

export function showMenu(){
    return{
        type: SHOW_NAV
    }
}

export function hideMenu(){
    return{
        type: HIDE_NAV
    }
}


export function scrollPage(){
    return (dispatch)=>{

        let windowScroll = document.body.scrollTop || document.documentElement.scrollTop
    //   let windowHeight = document.documentElement.scrollHeight
                dispatch(getScrollHeight(windowScroll))

                if(windowScroll > 500){
                    dispatch(goMenu())
                }

                if(windowScroll < 500){
                    dispatch(backMenu())
                }
    }

}


    
  


export function getScrollHeight(height){
    return{
        type: SCROLL_PAGE,
        payload: height
    }
}  


export function goMenu(){
    return{
        type: GO_MENU
    }
}

export function backMenu(){
    return{
        type: BACK_MENU
    }
}

    // function progress(event){
    //   let windowScroll = document.body.scrollTop || document.documentElement.scrollTop
    //   let windowHeight = document.documentElement.scrollHeight
    //   console.log(`height: ${windowHeight} scroll: ${windowScroll}`)
    // }