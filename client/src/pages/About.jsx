import React from 'react'
import Background from '../../img/background.jpg';
import Hosting from '../../img/Hosting.png';
import Domain from '../../img/Domain.png';
import Design from '../../img/Design.png';
import team_coding from '../../img/team_coding.jpg'
import { Helmet } from 'react-helmet';

const About = () => {


    return(
        <div className='bg-black'>
            <Helmet>
            <title>About | RaindropCoding</title>
            <meta name="title" content="About | RaindropCoding" />
            <meta name="description" content="With our Digital Marketing service we can help increase your reach and popularity" />
            <meta name="keywords" content="Raindrop, RaindropCoding, Coding, Digital, Marketing, Website" />
            <meta name="robots" content="index, follow" />
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            </Helmet>
        <div className='w-full text-center bg-black pt-10'>
            <h2 className='sm:text-5xl font-medium title-font text-white mb-4'>About Us</h2>
            <div className='w-16 h-1 rounded-full bg-orange-400 mx-auto mb-4'></div>
            </div>
        <div className='flex flex-wrap items-center justify-center bg-black text-gray-500'>
            <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img alt="feature" className="object-cover object-center h-full w-full" src={team_coding} />
            </div>

            <div className="lg:w-1/2 px-6 py-6">
            <div className="flex flex-col lg:py-6 lg:pl-12 lg:text-left text-center">
                <div className="flex flex-col mb-10 lg:items-start items-center">
                <div className="flex-grow">
                    <h2 className="text-white text-2xl title-font font-medium mb-3">Digital Marketing</h2>
                    <p className="leading-relaxed text-lg">Our digital marketing services are designed to help you reach your target audience and grow your business. We offer a wide range of services, including search engine optimization (SEO), social media marketing, email marketing, and more. Our team of experts will work with you to create a customized marketing plan that meets your specific needs.</p>
                </div>
                </div>

                <div className="flex flex-col mb-10 lg:items-start items-center">
                <div className="flex-grow">
                    <h2 className="text-white text-2xl title-font font-medium mb-3">Website Designs</h2>
                    <p className="leading-relaxed text-lg">We specialize in creating custom website designs that are tailored to your business needs. Our team of designers will work with you to create a website that is both visually appealing and user-friendly. We use the latest design trends and technologies to ensure that your website is up-to-date and meets the needs of your customers.</p>
                </div>
                </div>

                {/* Repeat the above "Free" section for other sections */}
            </div>
            </div>
        </div>

        <div className='flex flex-wrap items-center justify-center bg-black text-gray-500 pt-10 pb-16'>
            <div className='w-full text-center'>
            <h2 className='sm:text-5xl font-medium title-font text-white mb-4'>What We Do</h2>
            <div className='w-16 h-1 rounded-full bg-orange-400 mx-auto'></div>
            </div>

            <div className='grid grid-cols-3 gap-10 px-10 mt-10'>
            <div className='flex justify-center text-center md:col-span-1 col-span-3'>
                <div className="flex-grow">
                <img src={Hosting} alt="" className='rounded w-60 mx-auto'/> {/* Added mx-auto */}
                <h2 className="text-white text-2xl title-font font-medium mb-3 pt-10">Digital Marketing</h2>
                <div className='w-32 h-1 rounded-full bg-orange-400 mx-auto mt-5'></div>
                <p className="leading-relaxed text-lg mt-5">With our Digital Marketing service we can help increase your reach and popularity, aswell as grow your digital presence.</p>
                </div>
            </div>
            <div className='flex justify-center text-center md:col-span-1 col-span-3'>
                <div className="flex-grow">
                <img src={Design} alt="" className='rounded w-60 mx-auto'/> {/* Added mx-auto */}
                <h2 className="text-white text-2xl title-font font-medium mb-3 pt-10">Website Designs</h2>
                <div className='w-32 h-1 rounded-full bg-orange-400 mx-auto mt-5'></div>
                <p className="leading-relaxed text-lg mt-5">We specialize in website designs custom to your needs. We make user friendly and websites that are both appealing and easy to use.</p>
                </div>
            </div>
            <div className='flex justify-center text-center md:col-span-1 col-span-3'>
                <div className="flex-grow">
                <img src={Domain} alt="" className='rounded w-60 mx-auto'/> {/* Added mx-auto */}
                <h2 className="text-white text-2xl title-font font-medium mb-3 pt-10">Digital Management</h2>
                <div className='w-32 h-1 rounded-full bg-orange-400 mx-auto mt-5'></div>
                <p className="leading-relaxed text-lg mt-5"> We simplify the process of managing your website and other digital processes, by keeping an eye on everything for you! So that you can use your time more efficently.</p>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default About