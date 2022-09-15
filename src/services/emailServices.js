const baseUrl = 'http://localhost:5000/email'

const endpoints = {
    'SEND' : '/send'
}

export const sendEmailToBackend = (emailData) => {
    return fetch(baseUrl + endpoints.SEND, {
        method : 'POST',
        headers : {'content-type' : 'application/json'},
        body : JSON.stringify(emailData)
    })
    .then(resp => resp.json())
}