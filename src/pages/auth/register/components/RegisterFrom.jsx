import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router'; // ✅ ঠিক করা হয়েছে

const RegisterFrom = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      username: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string()
        .min(6, 'Minimum 6 characters')
        .required('Password is required'),
      username: Yup.string().required('Username is required'),
    }),
    onSubmit: values => {
      console.log('Form Data:', values);
    },
  });

  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8 xl:px-0 max-w-[600px] mx-auto">
      <div className="py-[48px] px-[24px] sm:px-[36px] bg-colorSeven rounded-[25px] shadow-lg">
        <form onSubmit={formik.handleSubmit}>
          {/* Email */}
          <label className="block text-colorFour font-montserrat text-[18px] sm:text-[20px] font-bold">
            Email Address
          </label>
          <input
            type="text"
            name="email"
            placeholder="amelia.watson@eshop.com"
            className="w-full py-[18px] sm:py-[25px] px-[20px] sm:px-[32px] text-colorFour font-montserrat text-[18px] sm:text-[20px] font-normal mt-[12px] bg-white rounded-md outline-none"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
          )}

          {/* Password */}
          <div>
            <label className="block text-colorFour font-montserrat text-[18px] sm:text-[20px] font-bold mt-[16px]">
              Password
            </label>
            <div className="relative mt-[12px]">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Enter your password"
                className="w-full py-[18px] sm:py-[25px] px-[20px] sm:px-[32px] pr-[50px] text-colorFour font-montserrat text-[18px] sm:text-[20px] font-normal bg-white rounded-md outline-none"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div
                className="absolute right-[16px] sm:right-[20px] top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
                onClick={togglePassword}
              >
                {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
              </div>
            </div>
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.password}
              </p>
            )}
          </div>

          {/* Username */}
          <div className="mt-[16px]">
            <label className="block text-colorFour font-montserrat text-[18px] sm:text-[20px] font-bold">
              UserName
            </label>
            <input
              type="text"
              name="username"
              placeholder="Amelia Watson"
              className="w-full py-[18px] sm:py-[25px] px-[20px] sm:px-[32px] text-colorFour font-montserrat text-[18px] sm:text-[20px] font-normal mt-[12px] bg-white rounded-md outline-none"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.username && formik.errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.username}
              </p>
            )}
          </div>

          {/* Submit */}
          <div className="mt-[20px]">
            <button
              type="submit"
              className="bg-primary px-10 py-4 rounded-md cursor-pointer font-montserrat text-lg sm:text-xl font-bold leading-[30px] text-white w-full"
            >
              Create Account
            </button>
          </div>

          {/* Redirect */}
          <div className="mt-[36px] flex flex-wrap justify-center gap-x-[8px] text-center">
            <p className="text-colorFour font-montserrat text-sm sm:text-base font-normal leading-[24px] block">
              Already have an account?
            </p>
            <Link
              to="/login"
              className="text-colorFour font-montserrat text-sm sm:text-base font-bold leading-[24px] text-center block"
            >
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterFrom;
