import React from 'react';
import './Display.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'


const Display = (props) => {
    const { photo, name, demandValue, role } = props.player;
    const addPlayer = props.addPlayer;
    return (
        <div>
            <h3>{name}</h3>
            <div className="responsive">
                <div className="gallery">
                    <a href={photo} >
                        <img src={photo} alt="" width="300px" height="200px" />
                   </a>
                   <div className="description">
                        <h6>{role}</h6>
                        <h6>Transfer Money: $ {demandValue}</h6>
                        <button className="btn btn-info" onClick={() => addPlayer(props.player)}><FontAwesomeIcon icon={faPlusSquare} />   Buy Now</button>
                   </div>
                </div>
            </div>
            


        </div>
    );
};

export default Display;