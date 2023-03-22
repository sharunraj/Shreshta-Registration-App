import axios from 'axios'

export default function callApi(endpoint, data) {
    return new Promise((resolve, reject) => {
        const BASE_URL = 'http://localhost:3000'
        const url = `${BASE_URL}/api/${endpoint}`
        const config = { headers: { "Authorization": `123456789` } }
        const body = data
        axios.post(url, body, config).then(res => {
            return resolve(res.data)
        }).catch(err => {
            return reject(err)
        })
    })
}