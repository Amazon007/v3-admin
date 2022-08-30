import axios from 'axios'


const instence = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    timeout: 5000
})

export default instence