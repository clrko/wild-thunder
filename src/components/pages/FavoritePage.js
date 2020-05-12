import React from "react"
import axios from "axios"

const FavoritePage = () => { 
        axios.get("http://localhost:4242/favorite")
            .then(res => {
                console.log(res.data);
                console.log(res.status);
                console.log(res.statusText);
                console.log(res.headers);
                console.log(res.config);
            });
        

    return <div>Hello</div>
}

export default FavoritePage;