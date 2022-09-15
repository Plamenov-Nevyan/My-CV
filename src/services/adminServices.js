const baseUrl = 'http://localhost:5000/admin'

export const adminAuth = (data) => {
   return fetch(baseUrl + '/authorize', {
        method : 'POST',
        headers : {'content-type' : 'application/json'},
        body : JSON.stringify(data)
    })
    .then(resp => resp.json())
}

export const addAdmin = async (data, admSession) => {
   await fetch(baseUrl + '/add', {
        method : 'POST',
        headers : {'content-type':'application/json', 'X-Authorization' : admSession.accessToken},
        body : JSON.stringify(data)
    })
}

