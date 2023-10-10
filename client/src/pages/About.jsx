import React from 'react'
import Background from '../../img/background.jpg';
import Hosting from '../../img/Hosting.png';
import Domain from '../../img/Domain.png';
import Design from '../../img/Design.png';

const About = () => {


    return(
        <>
        <div className='flex flex-wrap items-center justify-center bg-black text-gray-500 pt-10'>
            <div className='w-full text-center'>
            <h2 className='sm:text-5xl font-medium title-font text-white mb-4'>What We Do</h2>
            <div className='w-16 h-1 rounded-full bg-orange-400 mx-auto'></div>
            </div>

            <div className='grid grid-cols-3 gap-10 px-10 mt-10'>
            <div className='flex justify-center text-center md:col-span-1 col-span-3'>
                <div className="flex-grow">
                <img src={Design} alt="" className='rounded w-60 mx-auto'/> {/* Added mx-auto */}
                <h2 className="text-white text-2xl title-font font-medium mb-3 pt-10">Website Designs</h2>
                <div className='w-32 h-1 rounded-full bg-orange-400 mx-auto mt-5'></div>
                <p className="leading-relaxed text-lg mt-5">We specialize in crafting budget-friendly websites that cater to your specific needs. Our skilled designers create visually appealing and user-friendly websites that effectively represent your brand and message.</p>
                </div>
            </div>
            <div className='flex justify-center text-center md:col-span-1 col-span-3'>
                <div className="flex-grow">
                <img src={Hosting} alt="" className='rounded w-60 mx-auto'/> {/* Added mx-auto */}
                <h2 className="text-white text-2xl title-font font-medium mb-3 pt-10">Hosting Solutions</h2>
                <div className='w-32 h-1 rounded-full bg-orange-400 mx-auto mt-5'></div>
                <p className="leading-relaxed text-lg mt-5">With our hosting services, you won't have to worry about the technical aspects of maintaining a website. We provide reliable hosting solutions that ensure your website is accessible 24/7, allowing your visitors to engage with your content seamlessly.</p>
                </div>
            </div>
            <div className='flex justify-center text-center md:col-span-1 col-span-3'>
                <div className="flex-grow">
                <img src={Domain} alt="" className='rounded w-60 mx-auto'/> {/* Added mx-auto */}
                <h2 className="text-white text-2xl title-font font-medium mb-3 pt-10">Domain Management</h2>
                <div className='w-32 h-1 rounded-full bg-orange-400 mx-auto mt-5'></div>
                <p className="leading-relaxed text-lg mt-5"> We simplify the process of obtaining and managing domains. Whether you need a new domain or want to transfer an existing one, we handle the domain registration and management process, ensuring your website has a professional online presence.</p>
                </div>
            </div>
            </div>
        </div>
        <div className='w-full text-center bg-black pt-10'>
                <h2 className='sm:text-5xl font-medium title-font text-white mb-4'>About Us</h2>
                <div className='w-16 h-1 rounded-full bg-white mx-auto'></div>
            </div><div className='flex flex-wrap items-center justify-center bg-black text-gray-500'>
                <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                    <img alt="feature" className="object-cover object-center h-full w-full" src={Background} />
                </div>

                <div className="lg:w-1/2 px-6 py-6">
                    <div className="flex flex-col lg:py-6 lg:pl-12 lg:text-left text-center">
                        <div className="flex flex-col mb-10 lg:items-start items-center">
                            <div className="flex-grow">
                                <h2 className="text-white text-2xl title-font font-medium mb-3">Innovative Designs</h2>
                                <p className="leading-relaxed text-lg">We specializes in creating cutting-edge designs that capture attention and leave a lasting impression.</p>
                            </div>
                        </div>

                        <div className="flex flex-col mb-10 lg:items-start items-center">
                            <div className="flex-grow">
                                <h2 className="text-white text-2xl title-font font-medium mb-3">Affordable Solutions</h2>
                                <p className="leading-relaxed text-lg">We offer cost-effective solutions tailored to your budget, allowing businesses of all sizes to access top-quality web design and development services.</p>
                            </div>
                        </div>

                        <div className="flex flex-col mb-10 lg:items-start items-center">
                            <div className="flex-grow">
                                <h2 className="text-white text-2xl title-font font-medium mb-3">User-Centric Approach</h2>
                                <p className="leading-relaxed text-lg">Our user-centric philosophy drives everything we do. We prioritize seamless user experiences, ensuring your website is intuitive, easy to navigate, and designed to convert visitors into customers.</p>
                            </div>
                        </div>

                        {/* Repeat the above "Free" section for other sections */}
                    </div>
                </div>
            </div></>
    )
}

export default About