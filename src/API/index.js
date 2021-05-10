import axios from 'axios'

export default axios.create({
    baseURL: 'https://sbtsul.pythonanywhere.com/api/'
})