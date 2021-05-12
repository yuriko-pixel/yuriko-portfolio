import React from 'react'
import ReactDOM from 'react-dom';
import Modal2 from './modal2'

function Modal(props) {
    
    const div = document.body.appendChild(document.createElement('div'));
    const elements = [];
    const draftContainer = document.querySelector('#root');
    if (draftContainer !== null) elements.push(draftContainer);
    elements.forEach(element => {
        element.classList.add('modal-blur');
    });

    const cleanup = () => {
        // console.log('cleaning')
        ReactDOM.unmountComponentAtNode(div);
        div.parentNode.removeChild(div);
        elements.forEach(element => {
            element.classList.remove('modal-blur');
        });
    };

    return new Promise((resolve, reject) => {
        ReactDOM.render(
            <Modal2 {...props} resolve={resolve} reject={reject} />,
            div
        );
    }).then(result => {
        cleanup();
        return result;
    }).catch(error => {
        console.warn(error);
        cleanup();
        return undefined;
    });
};

export default Modal

