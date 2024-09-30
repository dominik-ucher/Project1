import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';
import Logo from '../../img/logo.png';

const Unauthorized_401 = () => {
  return (
    <div className="lg:px-8 md:px-6 px-4 py-8 items-center flex justify-center flex-col-reverse lg:flex-row gap-6">
  <div className="xl:w-1/2 lg:w-2/3 md:w-3/4 w-full relative pb-8 lg:pb-10">
    <div className="relative text-center">
      <h1 className="text-4xl lg:text-6xl font-bold text-gray-500 mb-2">401 Unauthorized</h1>
      <h1 className="my-2 text-gray-800 font-bold text-lg lg:text-2xl mb-4">
        Oops, ser ut som du er ikke logget inn
      </h1>
      <p className="my-2 text-gray-800 mb-4">
        Du kan logge inn ved å klikke{' '}
        <Link className="font-bold underline" to="/login">
          her
        </Link>
        , hvis ikke du har bruker kan du kontakte klubben for å få tildelt en bruker. Dette gjøres{' '}
        <Link className="font-bold underline" to="/contact">
          her
        </Link>
      </p>
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

export default Unauthorized_401;
