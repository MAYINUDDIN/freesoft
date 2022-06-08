import React from 'react';
import '../Slider/Slider.css'
import slider from '../../../assets/slider/slider.jpg'
import slider1 from '../../../assets/slider/slider2.jpg'
import slider2 from '../../../assets/slider/slider3.jpg'

const Slider = () => {
    return (
        <div>
            <div class="carousel w-full">
                <div id="item1" class="carousel-item w-full">
                    <img src={slider1} class="w-full slider" />
                </div>
                <div id="item2" class="carousel-item w-full">
                    <img src={slider} class="w-full slider" />
                </div>
                <div id="item3" class="carousel-item w-full">
                    <img src={slider2} class="w-full slider" />
                </div>

            </div>
            <div class="flex justify-center w-full py-2 gap-2">
                <a href="#item1" class="btn btn-primary rounded  btn-xs">1</a>
                <a href="#item2" class="btn btn-primary rounded btn-xs">2</a>
                <a href="#item3" class="btn  btn-primary rounded btn-xs">3</a>
            </div>
        </div>

    );
};

export default Slider;