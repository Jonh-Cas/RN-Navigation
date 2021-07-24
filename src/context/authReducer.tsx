import { AuthState } from './AuthContext';

type AuthAction =  
    | {type: 'signIn'}
    | {type: 'changeFavIcon', payload: string }
    | {type: 'logout', payload: AuthState }
    | {type: 'changeUserName', payload: string }

export const authReducer = (state: AuthState, action: AuthAction  ): AuthState => {

    switch (action.type) {
        case 'signIn':        
         return {
             ...state,
             isLoggedIn: true,
             username: 'no_user_name_yet',
         }

         case 'logout':
             return {
                 ...state,
                 isLoggedIn: action.payload.isLoggedIn,
                 username: action.payload.username,
                 favoriteIcon: action.payload.favoriteIcon
             }
         
         case 'changeFavIcon':
             return {
                 ...state,
                 favoriteIcon: action.payload
             }
             
         case 'changeUserName':
             return{
                 ...state,
                 username: action.payload
             }
        
    
        default:
            return state;
            
    }

}