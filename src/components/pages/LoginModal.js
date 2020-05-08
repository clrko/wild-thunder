import React , {useState} from "react";

import Modal from 'react-modal';

import "./LoginModal.css";

Modal.setAppElement('#root');

function LoginModal() {
    const [modalIsOpen,setModalIsOpen] = useState(false)
        return (
            <div className="homepageModal" >
                <button className='login-open-modal' onClick={() => setModalIsOpen(true)}>Login</button>
                <Modal  isOpen={modalIsOpen}
                onRequestClose={()=> setModalIsOpen(false)}
                style ={{
                    content: {backgroundColor:'#36393F', width: '50%',borderRadius : '5%'  ,marginLeft : '20%' ,height:'75%' }
                }}>
                    <div className="login-modal">
                        <h2 className="title-login-modal" >Login</h2>
                        <label className="label-login-modal" >Username</label>
                        <input className="input-login-modal" type="text" name="username" placeholder="Username" />
                        <label className="label-login-modal" >Password</label>
                        <input className="input-login-modal" type="password" name="password" placeholder="Password"  /> 
                        <input className="button-login-modal" type="submit" value="Login"  />
                        <button className='login-close-modal'  onClick={() => setModalIsOpen(false)}>Close</button>
                    </div>
                    
                </Modal>
            </div>
        )
    }


export default LoginModal;