import axios from 'axios'

export default axios.create({
    baseURL: 'https://sbtsul1.pythonanywhere.com/api/'
})