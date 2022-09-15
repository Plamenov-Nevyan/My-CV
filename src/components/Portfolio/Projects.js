import { useState, useEffect } from "react"
import { getProjects } from "../../services/projectServices"
import {ErrorAlert} from "../Alerts/ErrorAlert"
import {SmallLoadingSpinner} from "../SmallLoadingSpinner/SmallLoadingSpinner"
import styles from "./css/projects.module.css"
import {Pager} from "./Pager"
import {ProjectBox} from "./ProjectBox"

export const Projects = () => {
   const [projectsData, setProjectsData] = useState(null)
   const [page, setPage] = useState(1)
   const [errors, setErrors] = useState([])
   const [sortType, setSortType] = useState('recent')

   useEffect(() => {
    getProjects(page, sortType)
    .then(receivedData => setProjectsData(receivedData))
    .catch(err => setErrors(oldErrors => [...oldErrors, err.message]))
   },[page])

   const onSortChange = (e) => {
      setSortType(e.target.value)
   }

   const onPageChange = (page) => {
      if(page > projectsData.pages || page < 1){return}
      else {setPage(page)}
  } 

let sortedProjects
if(projectsData){
   if(projectsData.projects){
      sortedProjects = sortType === 'recent' 
      ? projectsData.projects.sort((a,b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
      : projectsData.projects.sort((a,b) => Date.parse(a.createdAt) - Date.parse(b.createdAt))
   }
}
   return (
      <>
      {errors.length > 0 && <ErrorAlert errors={errors} />}
      <div className={styles.wrapper}>
         <div className={styles['sort-select-container']}>
              <label htmlFor="sortSelect">Sort by</label>
              <select name="sortSelect" className={styles['sort-select']} value={sortType} onChange={(e) => onSortChange(e)}>
                   <option value="recent">Most recent</option>
                   <option value="oldest">Oldest</option>
              </select>
         </div>
         <div className={styles['projects-container']}>
                {projectsData
                  ? projectsData.projects.length > 0
                    ? projectsData.projects.map((project, index) => <ProjectBox key={project._id} {...project} />)
                    : <h1>No projects added yet...</h1>
                  : <SmallLoadingSpinner />
                }
         </div>
          {projectsData 
            ? projectsData.projects.length > 0
              ? < Pager onPageChange={onPageChange} totalPages={projectsData.pages} currentPage={page}/>
              : null
            : null
          }
      </div>
      </>
   )
}