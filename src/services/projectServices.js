const baseUrl = 'http://localhost:5000/projects'
const pageLimit = 4
const endpoints = {
    GET_PROJECTS : '/get',
    ADD_PROJECT : '/add'
}

export const getProjects = (page, projectsSortType) => {
    let query = `?skip=${(page - 1) * pageLimit}&limit=${pageLimit}&sort=${projectsSortType}`

    return fetch(baseUrl + endpoints.GET_PROJECTS + query)
    .then(resp => resp.json())
}

export const addProject = (data, admSession) => {
   return fetch(baseUrl + endpoints.ADD_PROJECT, {
    method : 'POST',
    headers : {'content-type' : 'application/json', 'X-Authorization' : admSession.accessToken},
    body:JSON.stringify(data)
   })
   .then(res => res.json())
}