import React from 'react';
import './InfoDataCard.css'

const InfoDataCard = (props) => {
    const {title, qty, img} = props.InfoData
    return (
        <div className='infoCard'>
            
            <div className='infoDataCard'>
            <img src={img} alt=""/>
        </div>
        <div className='infoText'>
            
            <h5>{title}</h5>
            <h6>{qty}</h6>
        </div>
        </div>
    );
};

export default InfoDataCard;