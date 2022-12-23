import Toast from 'react-bootstrap/Toast';
import {useState} from 'react'

export const ToastComponent = ({toggleShowA, showA, variant, title, message}) => {

    return(
        <div className="school-toast">
            <Toast bg={variant} show={showA} onClose={toggleShowA}>
                <Toast.Header>
                    <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                    />
                    <strong className="me-auto">{title}</strong>
                </Toast.Header>
                <Toast.Body>{message}</Toast.Body>
            </Toast>
        </div>
    )
}