import { useState } from "react"
import { addProject } from "../../services/projectServices"

export const AddProjectForm = ({admSession}) => {
    const [data, setData] = useState({
        projectName : '',
        link : '',
        previewImg : '',
        description : '',
        tags : ''
    })

    const onChangeHandler = (e) => {
        setData(oldData => {return {
         ...oldData,
         [e.target.name] : e.target.value
        }
     })
     }

     const onSubmitHandler = async (e) => {
        e.preventDefault()
        data.tags = [...data.tags.split(', ')]
       await addProject(data, admSession)
    }

    return(
        <form onSubmit={(e) => onSubmitHandler(e)}>
        <label htmlFor="projectName">Project name</label>
        <input type="text" name="projectName" onChange={(e) => onChangeHandler(e)} value={data.projectName}/>
        <label htmlFor="link">Link to the source code</label>
        <input type="text" name="link" onChange={(e) => onChangeHandler(e)} value={data.link}/>
        <label htmlFor="previewImg">Preview Image</label>
        <input type="text" name="previewImg" onChange={(e) => onChangeHandler(e)} value={data.previewImg}/>
        <label htmlFor="description">Short description</label>
        <textarea name="description" onChange={(e) => onChangeHandler(e)} value={data.description}></textarea>
        <input type="text" name="tags" placeholder="write them separated with [, ]" onChange={(e) => onChangeHandler(e)} value={data.tags}/>
        <button>Add Project</button>
    </form>
    )
}