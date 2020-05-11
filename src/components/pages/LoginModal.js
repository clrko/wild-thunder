import React , {useState} from "react";

import Modal from 'react-modal';

import "./LoginModal.css";

Modal.setAppElement('#root');

function LoginModal() {
    const [modalIsOpen,setModalIsOpen] = useState(false)
        return (
            <div className="homepageModal" >
                <button className='login-open-modal' onClick={() => setModalIsOpen(true)}>Login</button>
                <button className='button-signup'>Sign up</button>
                <Modal className='loginModal'  isOpen={modalIsOpen}
                onRequestClose={()=> setModalIsOpen(false)}
                style ={{
                    content: {backgroundColor:'rgb(88, 71, 71)',borderRadius : '5%'  }
                }}>
                    <div className="login-modal">
                        <h2>Login</h2>
                        <label  >Username</label>
                        <input className="input-login-modal" type="text" name="username" placeholder="Username" />
                        <label  >Password</label>
                        <input className="input-login-modal" type="password" name="password" placeholder="Password"  /> 
                        <input className="button-login-modal" type="submit" value="Login"  />
                        <button className='login-close-modal'  onClick={() => setModalIsOpen(false)}>Back</button>
                    </div>
                    
                </Modal>
            </div>
        )
    }


export default LoginModal;