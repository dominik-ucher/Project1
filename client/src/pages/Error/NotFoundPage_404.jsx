import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';
import Logo from '../../img/logo.png';

const NotFoundPage_404 = () => {
  return (
<div className="lg:px-8 md:px-6 px-4 py-8 items-center flex justify-center flex-col-reverse lg:flex-row gap-6">
  <div className="xl:w-1/2 lg:w-2/3 md:w-3/4 w-full relative pb-8 lg:pb-10">
    <div className="relative text-center">
      <h1 className="text-4xl lg:text-6xl font-bold text-gray-500 mb-2">404 Page Not Found</h1>
      <h1 className="my-2 text-gray-800 font-bold text-lg lg:text-2xl mb-6">
        Oops, ser ut denne siden finnes ikke lenger
      </h1>
      <Button color="dark">
        <Link to="/">Tilbake til hjemmesiden!</Link>
      </Button>
    </div>
  </div>
  <div className="w-full flex justify-center">
    <img className="max-w-full h-auto" src={Logo} alt="Logo" />
  </div>
</div>

  );
};

export default NotFoundPage_404;
