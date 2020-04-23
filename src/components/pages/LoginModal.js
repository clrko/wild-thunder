import React , {useState} from "react"

import Modal from 'react-modal'

import "./LoginModal.css"

Modal.setAppElement('#root')

function LoginModal() {
    const [modalIsOpen,setModalIsOpen] = useState(false)
        return(
            <div className="homepageModal" >
                <button onClick={() => setModalIsOpen(true)}>Login</button>
                <Modal   isOpen={modalIsOpen}
                onRequestClose={()=> setModalIsOpen(false)}
                style ={{
                    
                    content: {color:'black',backgroundColor:'grey', width: '20%' ,bottom:'50%',left:"40%" } ,
                    
                }}>
                <div className="login-modal">
                <h2 className="title-login-modal" >Login</h2>
                <label className="label-login-modal" >Username</label>
                <input className="input-login-modal" type="text" name="username" placeholder="Username" />
                <label className="label-login-modal" >Password</label>
                <input className="input-login-modal" type="password" name="password" placeholder="Password"  /> 
                <input className="button-login-modal" type="submit" value="Login"  />
                
            </div> 
                    
                <button  onClick={() => setModalIsOpen(false)}>Close</button>
                    

                </Modal>
            </div>
            
        )
    }




export default LoginModal