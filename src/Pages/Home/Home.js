import React from 'react';
import Market from '../Market';
import Client from './Client';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>

            <Slider></Slider>
            <Market></Market>
            <Client></Client>
        </div>
    );
};

export default Home;