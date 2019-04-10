import React from 'react';
import Modal from 'react-modal';
const OptionModal = (props) => ( < div className = 'ReactModalPortal' > 
<Modal isOpen = {!!(props.option)
    }
    contentLabel = "Select"
    onRequestClose = {
        props.Okay
    }

    closeTimeoutMS = {
        200
    }
    className = "modal" >
    <h3 className = 'modal__title' > Selected Option < /h3> 
    <p className = 'modal__body' > {props.option} < /p >  
    <button className = 'button'
    onClick = {
        props.Okay
    } > Okay < /button>< /
    Modal >
    <
    /div >
);
export default OptionModal;