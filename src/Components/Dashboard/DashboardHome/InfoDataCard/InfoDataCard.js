import React from 'react';
import './InfoDataCard.css'

const InfoDataCard = (props) => {
    const {title, qty} = props.InfoData
    return (
        <div className='infoDataCard'>
            <h5>{title}</h5>
            <h6>{qty}</h6>
        </div>
    );
};

export default InfoDataCard;