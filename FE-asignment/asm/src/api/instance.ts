import axios from "axios";

const instance = axios.create({

    baseURL: 'http://localhost:3886/api'
})

export default instance