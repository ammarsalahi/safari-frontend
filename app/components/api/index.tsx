import axios from "axios";

const BASE_URL=""

const Api=axios.create({
    baseURL:BASE_URL
})


export {
    Api,BASE_URL
}