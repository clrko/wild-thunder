import axios from "axios";

const getApiKey = () => {
    axios.get("https://thunder-backend.herokuapp.com/apikey").then(res => { return res.data.key })
}

export default getApiKey