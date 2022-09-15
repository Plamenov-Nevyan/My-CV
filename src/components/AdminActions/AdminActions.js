import { useState } from "react"
import { useSessionStorage } from "../../hooks/useSessionStorage"
import {AddAdminForm} from "./AddAdminForm"
import {AddProjectForm} from "./AddProjectForm"
import styles from "./css/admActions.module.css"

export const AdminActions = () => {
    const [storedBrowserData, setToStorage, clearFromStorage, getFromStorage] = useSessionStorage()
    const [admAction, setAdmAction] = useState('add-project')

    const changeAction = (action) => setAdmAction(action)

    return(
         <div className={styles.wrapper}>
             <div className={styles['select-action-container']}>
                <select name="selectAction" value={admAction} className={styles.selector} onChange={(e) => changeAction(e.target.value)}>
                    <option value="add-project">Add new project</option>
                    <option value="add-admin">Add new admin</option>
                </select>
             </div>
            {admAction === 'add-admin' && <AddAdminForm admSession={storedBrowserData.session}/>}
            {admAction === 'add-project' && <AddProjectForm admSession={storedBrowserData.session}/>}
         </div>
    )
}