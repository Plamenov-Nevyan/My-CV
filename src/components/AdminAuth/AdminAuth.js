import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { adminAuth } from "../../services/adminServices"
import { useSessionStorage } from "../../hooks/useSessionStorage"

export const AdminAuth = () => {
    const [data, setData] = useState({
        email : '',
        username : '',
        password : ''
    })
    const [storedBrowserData, setToStorage, clearFromStorage, getFromStorage] = useSessionStorage()
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const onSubmitHandler = (e) => {
        e.preventDefault()
       adminAuth(data)
       .then(session => {
        setToStorage('session', session)
        navigate('/admin/actions', {replace: true})
       })
       .catch(err => setError(err.message))
    }

const onChangeHandler = (e) => {
   setData(oldData => {return {
    ...oldData,
    [e.target.name] : e.target.value
   }
})
}

    return(
        <form onSubmit={(e) => onSubmitHandler(e)}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" onChange={(e) => onChangeHandler(e)}/>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" onChange={(e) => onChangeHandler(e)}/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={(e) => onChangeHandler(e)}/>
            <button>Submit data</button>
        </form>
    )
}