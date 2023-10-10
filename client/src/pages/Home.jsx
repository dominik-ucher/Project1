import React, { useEffect, useRef, useState } from 'react';
import Background from '../../img/background.jpg';
import Hosting from '../../img/Hosting.png';
import Domain from '../../img/Domain.png';
import Design from '../../img/Design.png';
import { Button, Card } from 'flowbite-react';
import '../style.css';
import FadeIn from 'react-fade-in/lib/FadeIn';

const Home = () => {
  const scrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardData = [
    // Array containing your card data, each element represents a card
    // You can customize this array with your actual card data
    {
      title: 'Card 1 Title',
      content: 'Card 1 Content',
    },
    {
      title: 'Card 2 Title',
      content: 'Card 2 Content',
    },
    {
      title: 'Card 2 Title',
      content: 'Card 2 Content',
    },
    {
      title: 'Card 2 Title',
      content: 'Card 2 Content',
    },
    {
      title: 'Card 2 Title',
      content: 'Card 2 Content',
    },
    // ... More cards
  ];

  const maxIndex = Math.ceil(cardData.length / 3) - 1;

  const scrollLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const scrollRight = () => {
    if (currentIndex < 3) { // Adjust this based on the number of cards
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <>
      {/* First Section */}
      <FadeIn>
      <div className='flex items-center justify-center h-80 bg-black p-8 md:h-screen'>
        <div className='text-center'>
          <FadeIn delay={300}>
          <h1 className='text-4xl md:text-8xl font-bold tracking-tighter text-white'>
            Welcome to UcherTech
          </h1>
          </FadeIn>
          <FadeIn delay={400}>
          <p className='pt-3 md:pt-5 text-sm md:text-2xl font-normal leading-relaxed text-orange-400'>
            Where Ideas Come to Life on the Web!
          </p>
          <div className='w-32 h-1 rounded-full bg-white mt-3 md:mt-5 inline-block' />
          </FadeIn>
        </div>
      </div>
      </FadeIn>

      {/* Second Section */}
      <div className='flex items-center justify-center bg-black'>
        <div className='container flex items-center justify-center py-8 mx-auto rounded-lg md:p-1'>
          <div className='w-full md:w-2/3'>
            <img
              className='object-cover object-center w-full md:h-auto mb-10 border-gray-200 dark:border-gray-900 border rounded-lg shadow-md'
              alt='hero'
              src={Background}
            />
          </div>
        </div>
      </div>

       {/* Third Section */}
       <div className='w-full text-center bg-black pt-10'>
          <h2 className='sm:text-5xl font-medium title-font text-white mb-4'>About Us</h2>
          <div className='w-16 h-1 rounded-full bg-orange-400 mx-auto'></div>
        </div>
       <div className='flex flex-wrap items-center justify-center bg-black text-gray-500'>
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
      </div>

      {/* Fourth Section */}
      <div className='flex flex-col pt-10 bg-black text-gray-500'>
        <div className='w-full text-center'>
          <h2 className='sm:text-5xl font-medium title-font text-white mb-4'>Our Projects</h2>
          <div className='w-16 h-1 rounded-full bg-orange-400 mx-auto'></div>
        </div>

        <div className='flex items-center'>
          <button onClick={scrollLeft} className={`px-4 py-2 bg-gray-800 text-white rounded-l ${currentIndex === 0 && 'hidden'}`}>
            &lt; {/* Left arrow */}
          </button>
          <div className='flex p-5 items-center ' style={{ width: '100%' }} ref={scrollContainerRef}>
            {/* Horizontal scrolling container */}
            {cardData.map((card, index) => (
              <div
                key={index}
                className={`w-1/3 mx-2`}
                style={{
                  flexShrink: 0,
                  display: currentIndex === Math.floor(index / 3) ? 'block' : 'none',
                }}
              >
                <Card className='w-full' imgAlt='' imgSrc={Background}>
                  <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    {card.title}
                  </h5>
                  <p className='font-normal text-gray-700 dark:text-gray-400'>
                    {card.content}
                  </p>
                </Card>
              </div>
            ))}
          </div>
          <button onClick={scrollRight} className={`px-4 py-2 bg-gray-800 text-white rounded-r ${currentIndex === maxIndex && 'hidden'}`}>
            &gt; {/* Right arrow */}
          </button>
        </div>
      </div>

      {/* Fifth Section */}
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


      {/* Sixth Section */}
      <div className='flex flex-wrap items-center justify-center p-20 bg-black text-gray-500'>
        <div className='w-full text-center'>
          <h2 className='sm:text-5xl font-medium title-font text-white mb-4'>Contact Us</h2>
          <div className='w-16 h-1 rounded-full bg-orange-400 mx-auto'></div>
        </div>
        <form className='gap-5 flex justify-center flex-col w-48'>
        <input type="text" placeholder='Name' className='mt-10 bg-black border-b-2 border-t-0 border-x-0 border-white'/>
        <input type="text" placeholder='email@email.com' className='mt-10 bg-black border-b-2 border-t-0 border-x-0 border-white'/>
        <input type="text" placeholder='About' className='mt-10 bg-black border-b-2 border-t-0 border-x-0 border-white'/>
        <textarea type="textarea" placeholder='Message' className='h-32 mt-10 bg-black border-b-2 border-t-0 border-x-0 border-white'/>
        <Button pill color="gray" className="mt-5">Send</Button>
        </form>
      </div>
    </>
  );
};

export default Home;
