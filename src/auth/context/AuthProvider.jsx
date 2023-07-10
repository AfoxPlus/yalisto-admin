import { useEffect } from 'react';
import { AuthContext } from './AuthContext'
import { useAuthStore } from '../../hooks' 
import { SpinnerLoader } from '../../ui/components';


export const AuthProvider = ({children}) => {

    const { status, checkAuthToken } = useAuthStore();

    useEffect(() => {
        checkAuthToken();
    }, [])    

    if (status === 'checking') {
        return (
            <SpinnerLoader/>
        )
    }

    return(
        <AuthContext.Provider value={{ status }}>
            {children}
        </AuthContext.Provider>
    )
}