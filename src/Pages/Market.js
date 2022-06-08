import React from 'react';
import finance from '../../src/assets/slider/finance.jpg'
const Market = () => {
    return (
        <div className=''>
            <div className='grid px-6 lg:px-16 grid-col-4 lg:grid-cols-4 gap-3  mt-5 mb-5 flex justify-center'>
                <div class="card bordered rounded h-60 w-62 bg-base-100 shadow-xl">
                    <figure><img className='h-48 w-96' src={finance} alt="Shoes" /></figure>
                    <h1 className='text-primary mt-2 text-xl font-bold'>Finance</h1>
                </div>

                <div class="card bordered rounded w-62 bg-base-100 shadow-xl">
                    <figure><img className='h-40 w-96' src={finance} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title font-bold text-primary drop-shadow ">
                            সারাদেশে <span className='text-success'>ডেলিভারি</span>
                            <div class="badge badge-secondary text-white ">মাত্র ৭০ টাকায়</div>
                        </h2>
                        <p className='text-center'> <span className='text-secondary  text-lg font-bold'>৩০ টাকায় ঢাকাতে</span></p>
                        <p className='text-center'> <span className='text-dark text-sm'>আমরাই অল্প সময়ে ডেলিভারি নিশ্চিত করে থাকি</span></p>

                        <div class="card-actions justify-center">
                            <button className='btn btn-primary btn-md rounded px-12 mt-2 ' >কুরিয়ার করুন</button>

                        </div>
                    </div>
                </div>

                <div class="card bordered rounded w-62 bg-base-100 shadow-xl">
                    <figure><img className='h-40 w-96' src={finance} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title font-bold text-primary drop-shadow ">
                            সারাদেশে <span className='text-success'>ডেলিভারি</span>
                            <div class="badge badge-secondary text-white ">মাত্র ৭০ টাকায়</div>
                        </h2>
                        <p className='text-center'> <span className='text-secondary  text-lg font-bold'>৩০ টাকায় ঢাকাতে</span></p>
                        <p className='text-center'> <span className='text-dark text-sm'>আমরাই অল্প সময়ে ডেলিভারি নিশ্চিত করে থাকি</span></p>

                        <div class="card-actions justify-center">
                            <button className='btn btn-primary btn-md rounded px-12 mt-2 ' >কুরিয়ার করুন</button>

                        </div>
                    </div>
                </div>

                <div class="card bordered rounded w-62 bg-base-100 shadow-xl">
                    <figure><img className='h-40 w-96' src={finance} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title font-bold text-primary drop-shadow ">
                            সারাদেশে <span className='text-success'>ডেলিভারি</span>
                            <div class="badge badge-secondary text-white ">মাত্র ৭০ টাকায়</div>
                        </h2>
                        <p className='text-center'> <span className='text-secondary  text-lg font-bold'>৩০ টাকায় ঢাকাতে</span></p>
                        <p className='text-center'> <span className='text-dark text-sm'>আমরাই অল্প সময়ে ডেলিভারি নিশ্চিত করে থাকি</span></p>

                        <div class="card-actions justify-center">
                            <button className='btn btn-primary btn-md rounded px-12 mt-2 ' >কুরিয়ার করুন</button>

                        </div>
                    </div>
                </div>

            </div>


        </div >

    );
};

export default Market;