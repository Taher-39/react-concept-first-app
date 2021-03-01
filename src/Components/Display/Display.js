import React from 'react';
import './Display.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Display = (props) => {
    const { photo, name, demandValue } = props.player;
    const handleEvent = props.handleEvent;
    return (
        <div>
            <h2>{name}</h2>
            <div className="responsive">
                <div className="gallery">
                    <a href={props.player.photo} >
                        <img src={photo} alt="" width="300px" height="200px" />
                   </a>
                   <div className="description">
                        <h3>Transfer Money: $ {demandValue}</h3>
                        <button className="add-button" onClick={() => handleEvent(props.player)}><FontAwesomeIcon icon={faCoffee} />   Buy Now</button>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Display;