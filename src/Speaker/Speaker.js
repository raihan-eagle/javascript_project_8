import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPlusCircle, faGlobe, faDice } from '@fortawesome/free-solid-svg-icons'
import './Speaker.css'

const Speaker = (props) => {
    const {name, img, age, contact, honorarium, topic} = props.speaker

    const element = <FontAwesomeIcon icon={faPlusCircle} />
    
    return (
        <div className='speaker-cart-container'>
            <img src={img} alt="" />
            <div>
                <p><span className='title'>Name:</span> {name}</p>
                <p><span className='title'>Age:</span> {age}</p>
                <p><span className='title'>Topic:</span> {topic}</p>
                <p><span className='title'>Contact:</span> {contact}</p>
                <p><span className='title'>Honorarium:</span> {honorarium}</p>
            </div>
            <button className= 'btn'
                onClick={()=>props.handleSpeakerAdd(props.speaker)}
            > {element} Add Guest</button>
            <div >
                <FontAwesomeIcon className='bottom-icon' icon={faGlobe} />
                <FontAwesomeIcon className='bottom-icon'icon={faDice} />
            </div>
        </div>
    );
};

export default Speaker;