import React from 'react';
import RegisterFrom from '../register/components/RegisterFrom';
import LoginFrom from './components/LoginFrom';

const Login = () => {
  return (
    <div>
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-[570px] w-full mx-auto my-[32px] sm:my-[64px]">
          <div>
            <h3 className="text-colorFour font-poppins text-[32px] sm:text-[48px] lg:text-[56px] font-bold leading-[40px] sm:leading-[56px] lg:leading-[68px] text-center">
              Log In
            </h3>
          </div>
          <div className="mt-[40px] sm:mt-[60px] lg:mt-[80px]">
            <LoginFrom></LoginFrom>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
