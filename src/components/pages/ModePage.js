import React, { useState } from "react";
import Modal from 'react-modal';

import ModePageChoice from "./ModePageChoice";
import ModePageMainRules from './ModePageMainRules';
import NavbarFooter from '../shared/NavbarFooter';
import NavbarHeader from '../shared/NavbarHeader';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './ModePage.css'

Modal.setAppElement('#root');

const ModePage = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div className="modepage-wrapper">
            <NavbarHeader />
            <ModePageChoice username={props.match.params.pseudo} />
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className="main-rule-modal">
                <div className="modal-content">
                    <button onClick={() => setModalIsOpen(false)} className="main-rule-close-btn"><FontAwesomeIcon icon={faTimes} className="modal-icon" /></button>
                    <ModePageMainRules username={props.location.state} />
                </div>
            </Modal>
            <button onClick={() => setModalIsOpen(true)} className="main-rule-open-btn"><FontAwesomeIcon icon={faQuestionCircle} className="modal-icon" /></button>
            <NavbarFooter />
        </div>
    )
}

export default ModePage;