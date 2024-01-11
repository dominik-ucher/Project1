import axios from 'axios'
import { Button } from 'flowbite-react'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet';

const Contact = () => {
  const axiosInstance = axios.create({baseURL: import.meta.env.VITE_REACT_APP_API_URL,});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSent, setIsSent] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axiosInstance.post('/api/contact/send-email', formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.status === 200) {
        // Handle success
        setIsSent(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        // Handle failure
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('An error occurred', error);
    }
  };


    return(
    <div className='flex flex-wrap items-center justify-center p-20 bg-black text-gray-500'>
        <Helmet>
            <title>Contact | RaindropCoding</title>
            <meta name="title" content="Contact | RaindropCoding" />
            <meta name="description" content="Let us know what you are thinking about, and contact us!" />
            <meta name="keywords" content="Raindrop, RaindropCoding, Coding, Digital, Marketing, Website" />
            <meta name="robots" content="index, follow" />
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        </Helmet>
        <div className='w-full text-center'>
          <h2 className='sm:text-5xl font-medium title-font text-white mb-4'>Contact Us</h2>
          <div className='w-16 h-1 rounded-full bg-white mx-auto'></div>
          <p className="leading-relaxed text-lg mt-5">Let us know what you are thinking about,</p>
          <p className="leading-relaxed text-lg">and contact us with the form bellow</p>
        </div>
        <form className='gap-5 flex justify-center flex-col w-72'>
        <input type="text" placeholder='Name' className='mt-10 bg-black border-b-2 border-t-0 border-x-0 border-white' value={formData.name} onChange={handleInputChange}/>
        <input type="text" placeholder='email@email.com' className='mt-10 bg-black border-b-2 border-t-0 border-x-0 border-white' value={formData.email} onChange={handleInputChange}/>
        <input type="text" placeholder='About' className='mt-10 bg-black border-b-2 border-t-0 border-x-0 border-white' value={formData.subject} onChange={handleInputChange}/>
        <textarea type="textarea" placeholder='Message' className='h-32 mt-10 bg-black border-b-2 border-t-0 border-x-0 border-white' value={formData.message} onChange={handleInputChange}/>
        <Button pill color="gray" className="mt-5" onClick={handleSubmit}>Send</Button>
        {isSent && (
              <div className="text-green-500">Email Sent</div>
            )}
        </form>
    </div>
    )
}

export default Contact