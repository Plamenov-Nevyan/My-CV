import {useSessionStorage} from "../../hooks/useSessionStorage"
import { Navigate, Outlet } from "react-router-dom"

export const PrivateRoute = () => {
    const [storedBrowserData, setToStorage, clearFromStorage, getFromStorage] = useSessionStorage()

    if(!storedBrowserData.session){
        return <Navigate to={'/'} replace />
    }
    else {
        return <Outlet />
    }
}