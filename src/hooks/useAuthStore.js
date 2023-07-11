import { useDispatch, useSelector } from 'react-redux'
import { clearErrorMessage, onChecking, onLogin, onLogout } from '../../store/auth/authSlice'
import {restaurantApi} from '../../api/restaurantAPI'

export const useAuthStore = () => {
    const { status, user, errorMessage } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const startLogin = async( {key} ) => {
        dispatch(onChecking())

        try {
            const { data } = await restaurantApi.post('/auth', {key})
            const { payload, success, message } = data

            if (success) {
                localStorage.setItem('restaurant_code', payload.code)
                dispatch(onLogin({code: payload.code}))
            }else{
                dispatch(onLogout(message))
                setTimeout(() => {
                    dispatch(clearErrorMessage())
                }, 1000);
            }
        } catch (error) {
            console.log(error);
            dispatch(onLogout('Error, por favor comunicarse con el administrador'))
            setTimeout(() => {
                dispatch(clearErrorMessage())
            }, 1000);
        }
    }

    const startLogout = ()=> {
        localStorage.clear()
        dispatch(onLogout())
    }

    const checkAuthToken = async() =>{
        const token = localStorage.getItem('restaurant_code');
        if (!token) return dispatch(onLogout())

        dispatch(onLogin({token}))
    }
    
    return {
        //* Properties
        status,
        user,
        errorMessage,
        //* Methods
        startLogin,
        startLogout,
        checkAuthToken
    }
}