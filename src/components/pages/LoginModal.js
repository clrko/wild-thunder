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
        return (
            <div className="homepageModal" >
                <button className='login-open-modal' onClick={() => setModalIsOpen(true)}>Login</button>
                <button className='button-signup'>Sign up</button>
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
                    </div>            
                    
                </Modal>
            </div>
        )
    }


export default LoginModal;