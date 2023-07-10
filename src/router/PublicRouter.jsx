import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext"


export const PublicRouter = ({ children }) => {

    const { status } = useContext(AuthContext)

    console.log(status);

  return status === 'not-authenticated' ? children : <Navigate to={'/'}/>
}
