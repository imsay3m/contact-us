import React from 'react';
import './contactus.scss';
import Card from '../components/card/Card';
import whiskersonImg from '../assets/images/whiskerson.jpg';
import fluffykinsImg from '../assets/images/fluffykins.jpg';
import felixImg from '../assets/images/felix.jpg';
import pumpkinImg from '../assets/images/pumpkin.jpg';


function Contactus() {
    return (
        <>
            <div className='contacts'>
                <Card
                    img={whiskersonImg}
                    name="Mr. Whiskerson"
                    phone="(212) 555-1234"
                    email="mr.whiskaz@catnap.meow"
                />
                <Card
                    img={fluffykinsImg}
                    name="Fluffykins"
                    phone="(212) 555-2345"
                    email="fluff@me.com"
                />
                <Card
                    img={felixImg}
                    name="Felix"
                    phone="(212) 555-4567"
                    email="thecat@hotmail.com"
                />
                <Card
                    img={pumpkinImg}
                    name="Pumpkin"
                    phone="(0800) CAT KING"
                    email="pump@kin.com"
                />
            </div>
        </>
    )
}

export default Contactus;