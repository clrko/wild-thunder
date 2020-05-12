import React , {useState} from "react";
import axios from 'axios'
import Modal from 'react-modal';

import "./LoginModal.css";

Modal.setAppElement('#root');

const LoginModal = () => {
    const [modalIsOpen,setModalIsOpen] = useState(false)
    
    const handleSubmit = (e) => {
        e.preventDefault() 
        axios.post("http://localhost:4242/auth/login", {
            username: e.target.username.value,
            password: e.target.password.value
        }).then(res => {
            console.log("resultat", res)
            localStorage.setItem("token", res.headers["x-access-token"])
        })
    }

    const handleTest = (e) => {
        e.preventDefault() 
        /* dnas le premier {} il va falloir emttre id de la chansson, favorite et autre truces à mettre dans la base, deuxieme c'ets config où il faut mettre le token  et autres headers*/
        axios.post("http://localhost:4242/auth/test", {},{
            headers: {
                'x-access-token': localStorage.getItem("token"),
            }
        })
    }
        return (
            <div className="homepageModal" >
                <button onClick={() => setModalIsOpen(true)}>Login</button>
                <Modal isOpen={modalIsOpen}
                onRequestClose={()=> setModalIsOpen(false)}
                style ={{
                    content: {color:'black',backgroundColor:'grey', width: '20%' ,bottom:'50%',left:"40%" }
                }}>
                    <div className="login-modal">
                        <h2 className="title-login-modal" >Login</h2>
                        <form onSubmit={handleSubmit}>
                            <label className="label-login-modal" >Username</label>
                            <input className="input-login-modal" type="text" name="username" placeholder="Username" />
                            <label className="label-login-modal" >Password</label>
                            <input className="input-login-modal" type="password" name="password" placeholder="Password"  /> 
                            <input className="button-login-modal" type="submit" value="Login"  />
                        </form>
                        <button onClick={handleTest}>testatokensend</button>
                    </div>
                    
                    <button  onClick={() => setModalIsOpen(false)}>Close</button>
                </Modal>
            </div>
        )
    }


export default LoginModal;