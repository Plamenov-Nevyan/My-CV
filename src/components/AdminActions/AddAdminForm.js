import { useState } from "react"
import {addAdmin} from "../../services/adminServices"

export const AddAdminForm = ({admSession}) => {
    const [data, setData] = useState({
        email : '',
        username : '',
        password : ''
    })
    const [error, setError] = useState('')

    const onSubmitHandler = async (e) => {
        e.preventDefault()
       await addAdmin(data, admSession)
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
    <input type="text" name="email" onChange={(e) => onChangeHandler(e)} value={data.email}/>
    <label htmlFor="username">Username</label>
    <input type="text" name="username" onChange={(e) => onChangeHandler(e)} value={data.username}/>
    <label htmlFor="password">Password</label>
    <input type="password" name="password" onChange={(e) => onChangeHandler(e)} value={data.password}/>
    <button>Submit data</button>
</form>
)

}