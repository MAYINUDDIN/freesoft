import React from 'react';

import { BsFillGeoAltFill } from "react-icons/bs";
import Iframe from 'react-iframe';
import contact from '../assets/img/contact.gif';

const Contact = () => {
    return (
        <div>
            <h1 className='font-bold text-secondary text-2xl mt-3 drop-shadow'>CONTACT US</h1>

            <div class="stats rounded  shadow-lg mt-5 px-24 bg-primary">

                <div class="stat bg-primary text-white ">

                    <h1 className='font-bold text-xl drop-shadow'>Email</h1>
                    <p>Email: info@icas-intl.com <br />
                    Email: Freesft@spftbd.com
                     </p>
                </div>
                <div class="stat bg-success text-white ">
                    <div class="stat-figure text-primary">
                    </div>
                    <h1 className='font-bold text-xl drop-shadow'>Location</h1>
                    <p> House#414 (3rd Floor), Lane#7, <br />
                         Baridhara DOHS, Dhaka, Bangladesh</p>
                </div>
                <div class="stat bg-primary text-white ">

                    <h1 className='font-bold text-xl drop-shadow'>Mobile</h1>
                    <p>Mob: +8801999-070234 <br />
                    Mob: +8801713-098765
                     </p>
                </div>

            </div>

            <div class="hero mt-5 ">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={contact} class="max-w-lg rounded-md shadow-2xl" />
                    <div class="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                        <div class="card-body">

                            <div class="form-control">
                                <input type="text" placeholder="Your Name" class="input input-bordered rounded" />
                                <input type="text" placeholder="Your Email" class="input mt-2 input-bordered rounded" />
                                <input type="text" placeholder="Subject" class="input mt-2 input-bordered rounded" />
                                <input type="text" placeholder="Message" class="input mt-2 h-24 input-bordered rounded" />

                            </div>
                            <div class="form-control mt-3">
                                <button class="btn btn-primary">Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default Contact;