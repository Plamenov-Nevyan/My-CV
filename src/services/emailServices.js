const baseUrl = 'https://nevyan-resume.herokuapp.com/email'

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