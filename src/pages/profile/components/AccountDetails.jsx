import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AccountDetails = () => {
  // Formik Setup
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    }),
    onSubmit: values => {
      console.log('Form Submitted:', values);
      alert('Profile updated successfully!');
    },
  });

  return (
    <div>
      <div>
        <h2 className="text-colorFour font-poppins text-[36px] font-semibold leading-[46px]">
          Account Details
        </h2>
        <div className="w-[289px] bg-primary h-[4px]"></div>
        <div className="mt-[48px]">
          <form onSubmit={formik.handleSubmit}>
            <div className="grid grid-cols-2 gap-x-6 gap-y-6">
              {/* First Name */}
              <div>
                <label className="font-montserrat text-colorFour text-[20px] font-bold leading-[30px] block">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  className="py-[15px] px-[32px] border mt-[12px] w-[100%] rounded text-colorFour outline-none border-gray-300 font-montserrat"
                  placeholder="Amelia"
                />
                {formik.touched.firstName && formik.errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.firstName}
                  </p>
                )}
              </div>

              {/* Last Name */}
              <div>
                <label className="font-montserrat text-colorFour text-[20px] font-bold leading-[30px] block">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                  className="py-[15px] px-[32px] border mt-[12px] w-[100%] rounded text-colorFour outline-none border-gray-300 font-montserrat"
                  placeholder="Robert"
                />
                {formik.touched.lastName && formik.errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.lastName}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="font-montserrat text-colorFour text-[20px] font-bold leading-[30px] block">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="py-[15px] px-[32px] border mt-[12px] w-[100%] rounded text-colorFour outline-none border-gray-300 font-montserrat"
                  placeholder="amelia.watson@eshop.com"
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.email}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="font-montserrat text-colorFour text-[20px] font-bold leading-[30px] block">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className="py-[15px] px-[32px] border mt-[12px] w-[100%] rounded text-colorFour outline-none border-gray-300 font-montserrat"
                  placeholder="************"
                />
                {formik.touched.password && formik.errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.password}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-[40px]">
              <button
                type="submit"
                className="bg-primary py-[16px] px-[40px] text-white font-montserrat text-[20px] font-bold leading-[30px] cursor-pointer rounded-md"
              >
                Edit Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
