import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CommonButton from '../../../../globalComponents/comonButton';
import { toast } from 'react-toastify';

const From = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      address: '',
      country: '',
      state: '',
      city: '',
      zip: '',
      notes: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      phone: Yup.string().required('Phone is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      address: Yup.string().required('Address is required'),
      country: Yup.string().required('Country is required'),
      state: Yup.string().required('State is required'),
      city: Yup.string().required('City is required'),
      zip: Yup.string().required('ZIP Code is required'),
      notes: Yup.string().required('Order notes are required'),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log('Form Data:', values);
      toast.success('Successfully submitted!');
      resetForm();
    },
  });

  const inputClass =
    'py-[20px] px-[32px] border mt-[12px] w-full rounded-md border-gray-300 outline-none font-montserrat text-[18px] md:text-[20px] font-normal leading-[30px] opacity-75';

  const errorStyle = 'text-red-500 text-sm mt-1';

  return (
    <div className="w-full">
      <div>
        <h2 className="text-colorFour font-poppins text-[28px] md:text-[36px] font-semibold leading-[38px] md:leading-[46px]">
          Billing Details
        </h2>
        <form className="mt-[32px] md:mt-[40px]" onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[32px] gap-y-[24px]">
            {/* First Name */}
            <div>
              <label className="flex items-center gap-x-2.5">
                <span className="text-colorFour font-montserrat text-[18px] md:text-[20px] font-bold leading-[30px]">
                  First Name
                </span>
                <span className="text-primary">*</span>
              </label>
              <input
                name="firstName"
                type="text"
                placeholder="Amelia Robert"
                className={inputClass}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <div className={errorStyle}>{formik.errors.firstName}</div>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label className="flex items-center gap-x-2.5">
                <span className="text-colorFour font-montserrat text-[18px] md:text-[20px] font-bold leading-[30px]">
                  Last Name
                </span>
                <span className="text-primary">*</span>
              </label>
              <input
                name="lastName"
                type="text"
                placeholder="Watson"
                className={inputClass}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <div className={errorStyle}>{formik.errors.lastName}</div>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="flex items-center gap-x-2.5">
                <span className="text-colorFour font-montserrat text-[18px] md:text-[20px] font-bold leading-[30px]">
                  Phone Number
                </span>
                <span className="text-primary">*</span>
              </label>
              <input
                name="phone"
                type="text"
                placeholder="+123 456 7890"
                className={inputClass}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              {formik.touched.phone && formik.errors.phone && (
                <div className={errorStyle}>{formik.errors.phone}</div>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="flex items-center gap-x-2.5">
                <span className="text-colorFour font-montserrat text-[18px] md:text-[20px] font-bold leading-[30px]">
                  Email Address
                </span>
                <span className="text-primary">*</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="amelia.watson@eshop.com"
                className={inputClass}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <div className={errorStyle}>{formik.errors.email}</div>
              )}
            </div>

            {/* Address */}
            <div className="col-span-1 md:col-span-2">
              <label className="flex items-center gap-x-2.5">
                <span className="text-colorFour font-montserrat text-[18px] md:text-[20px] font-bold leading-[30px]">
                  Address
                </span>
                <span className="text-primary">*</span>
              </label>
              <input
                name="address"
                type="text"
                placeholder="Home Address, Auxiliary St. 12345, Anywhere State"
                className="py-[20px] px-[32px] border mt-[12px] w-full rounded-md border-gray-300 outline-none font-montserrat text-[18px] md:text-[20px] font-normal leading-[30px] opacity-75"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
              />
              {formik.touched.address && formik.errors.address && (
                <div className={errorStyle}>{formik.errors.address}</div>
              )}
            </div>

            {/* Country, State, City */}
            {[
              {
                name: 'country',
                label: 'Country',
                options: ['Indonesia', 'Bangladesh', 'India'],
              },
              {
                name: 'state',
                label: 'State',
                options: ['Kalimantan Timur', 'Bangladesh', 'India'],
              },
              {
                name: 'city',
                label: 'City',
                options: ['Samarinda', 'Bangladesh', 'India'],
              },
            ].map(field => (
              <div key={field.name}>
                <label className="flex items-center gap-x-2.5">
                  <span className="text-colorFour font-montserrat text-[18px] md:text-[20px] font-bold leading-[30px]">
                    {field.label}
                  </span>
                  <span className="text-primary">*</span>
                </label>
                <select
                  name={field.name}
                  className={inputClass}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values[field.name]}
                >
                  <option value="">Select {field.label}</option>
                  {field.options.map(opt => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                {formik.touched[field.name] && formik.errors[field.name] && (
                  <div className={errorStyle}>{formik.errors[field.name]}</div>
                )}
              </div>
            ))}

            {/* ZIP */}
            <div>
              <label className="flex items-center gap-x-2.5">
                <span className="text-colorFour font-montserrat text-[18px] md:text-[20px] font-bold leading-[30px]">
                  ZIP Code
                </span>
                <span className="text-primary">*</span>
              </label>
              <input
                name="zip"
                type="text"
                placeholder="555555"
                className={inputClass}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.zip}
              />
              {formik.touched.zip && formik.errors.zip && (
                <div className={errorStyle}>{formik.errors.zip}</div>
              )}
            </div>

            {/* Notes */}
            <div className="col-span-1 md:col-span-2">
              <label className="flex items-center gap-x-2.5">
                <span className="text-colorFour font-montserrat text-[18px] md:text-[20px] font-bold leading-[30px]">
                  Order Notes
                </span>
                <span className="text-primary">*</span>
              </label>
              <textarea
                name="notes"
                placeholder="Enter your order notes ..."
                className="py-[20px] px-[32px] min-h-[170px] border mt-[12px] w-full rounded-md border-gray-300 outline-none font-montserrat text-[18px] md:text-[20px] font-normal leading-[30px] opacity-75"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.notes}
              />
              {formik.touched.notes && formik.errors.notes && (
                <div className={errorStyle}>{formik.errors.notes}</div>
              )}
            </div>
          </div>

          <div className="mt-[20px]">
            <CommonButton type="submit">Order Now</CommonButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default From;
