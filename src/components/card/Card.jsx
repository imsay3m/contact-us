import React from 'react';
import './card.scss';
import phoneIcon from '../../assets/images/icon/phone-icon.svg';
import emailIcon from '../../assets/images/icon/email-icon.svg';

function Card(props) {
    return (
        <>
            <div className="contact__card">
                <img className='contact__img' src={props.img} alt={props.name} />
                <h3 className='contact__name'>{props.name}</h3>
                <div className="contact__info">
                    <img className='info__icon' src={phoneIcon} alt='phone' />
                    <p className='info'>{props.phone}</p>
                </div>
                <div className="contact__info">
                    <img className='info__icon' src={emailIcon} alt='email' />
                    <p className='info'>{props.email}</p>
                </div>
            </div>
        </>
    )
}

export default Card;