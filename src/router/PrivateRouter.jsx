import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext"


export const PrivateRouter = ({ children }) => {

    const { status } = useContext(AuthContext)

    console.log(status);

  return status === 'authenticated' ? children : <Navigate to={'/login'}/>
}
