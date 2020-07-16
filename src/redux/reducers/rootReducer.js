import { SHOW_NAV, HIDE_NAV, SCROLL_PAGE, GO_MENU, BACK_MENU } from "../actionTypes";


const initialState = {
    showNav: false,
    goMenu: false,
    scrollHeight: 0
}


export const rootReducer = (state = initialState, action) =>{
    switch(action.type){

        case SHOW_NAV:
        return{
            ...state,
            showNav: true
        }

        case HIDE_NAV:
            return{
                ...state,
                showNav: false
            }


         case SCROLL_PAGE:
            return{
                ...state,
                scrollHeight: action.payload
            } 
            
         case GO_MENU:
            return{
                ...state,
                goMenu: true
                
            }  
         
         case BACK_MENU:
            return{
                ...state,
                goMenu: false
            }   

        default:
        return state
    }
}