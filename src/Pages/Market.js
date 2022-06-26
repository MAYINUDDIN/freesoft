import React from 'react';
import website from '../../src/assets/slider/web.gif'
import apps from '../../src/assets/slider/apps.jpg'
import ERP from '../../src/assets/slider/erp.jpg'
import ecommerce from '../../src/assets/slider/ecmrc.jpg'

const Market = () => {
    return (
        <div className=''>
            <h2 className='text-2xl font-bold text-dark drop-shadow mt-5'>OUR SERVICES</h2>

            <div className='grid px-6 lg:px-16 grid-col-4 lg:grid-cols-4 gap-3  mt-5 mb-5 flex justify-center  '>
                <div class="card bordered rounded h-80 w-62 bg-base-100 shadow-xl ">
                    <figure><img className='h-48 w-96 hover:scale-110 duration-1000' src={website} alt="Shoes" /></figure>
                    <h1 className='text-primary mt-3 text-lg drop-shadow font-bold'>WEBSITE DEVELOPMENT</h1>
                    <p className='text-justify pl-5 pr-5 mt-2 text-sm'>Web Development consists of two segments: front end development and backend development</p>
                </div>


                <div class="card bordered rounded h-80 w-62 bg-base-100 shadow-xl">
                    <figure><img className='h-48 w-96 hover:scale-110 duration-1000' src={apps} alt="Shoes" /></figure>
                    <h1 className='text-primary mt-3 text-lg drop-shadow font-bold'>MOBILE APPS DEVELOPMENT</h1>
                    <p className='text-justify pl-5 pr-5 mt-2 text-sm'>With the world going mobile, the importance of apps is increasing day by day</p>
                </div>


                <div class="card bordered rounded h-80 w-62 bg-base-100 shadow-xl">
                    <figure><img className='h-48 w-96 hover:scale-110 duration-1000' src={ERP} alt="Shoes" /></figure>
                    <h1 className='text-primary mt-3 text-lg drop-shadow font-bold'>ERP SOFTWARE</h1>
                    <p className='text-justify pl-5 pr-5 mt-2 text-sm'>ERP Software consists of two segments: front end development and backend development</p>
                </div>

                <div class="card bordered rounded h-80 w-62 bg-base-100 shadow-xl">
                    <figure><img className='h-48 w-96 hover:scale-110 duration-1000' src={ecommerce} alt="Shoes" /></figure>
                    <h1 className='text-primary mt-3 text-lg drop-shadow font-bold'>ECOMMERCE SOLUTION</h1>
                    <p className='text-justify pl-5 pr-5 mt-2 text-sm'>Web Development consists of two segments: front end development and backend development</p>
                </div>

            </div>


        </div >

    );
};

export default Market;