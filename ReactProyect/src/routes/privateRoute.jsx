import { Navigate, useLocation } from "react-router-dom"
export const PrivateRoutes = ({children}) => {
    const {state} =  useLocation();
    const userDash = localStorage.getItem ('UserId')

        if (!userDash) {
            return state?.logged ? children : <Navigate to= '/login' />
        }
        return children
    
}
