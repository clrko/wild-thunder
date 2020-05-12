import React , {useState} from "react";
import { NavLink } from "react-router-dom";
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
                <button className='login-open-modal' onClick={() => setModalIsOpen(true)}>Login</button>
                <NavLink to="/register/pseudo"><button className='button-signup'>Register</button></NavLink>
                <Modal className='loginModal'  isOpen={modalIsOpen}
                    onRequestClose={()=> setModalIsOpen(false)}
                    style ={{
                    content: {backgroundColor:'rgb(88, 71, 71)',borderRadius : '5%'  }
                        }}>
                    <div>
                        <form onSubmit={handleSubmit} className="login-modal" >
                            <h2>Login</h2>
                            <label>Username</label>
                            <input className="input-login-modal" type="text" name="username" placeholder="Username" />
                            <label>Password</label>
                            <input className="input-login-modal" type="password" name="password" placeholder="Password"  /> 
                            <input className="button-login-modal" type="submit" value="Login"  />
                            <button className='login-close-modal'  onClick={() => setModalIsOpen(false)}>Back</button>
                        </form>
                        <button onClick={handleTest}>testatokensend</button>
                    </div>
                    
                </Modal>
            </div>
        )
    }


export default LoginModal;