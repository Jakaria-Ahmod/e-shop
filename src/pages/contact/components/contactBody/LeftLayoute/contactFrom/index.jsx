import { useFormik } from 'formik';
import { contactShema, initialValues } from './contact';
import { toast } from 'react-toastify';

const ContactFrom = () => {
  const { handleSubmit, handleChange, values, errors, handleBlur, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: contactShema,
      onSubmit: (values, { resetForm }) => {
        console.log(values);
        resetForm();
        toast.success('From submiton sucessfully!');
      },
    });
  console.log(errors);

  return (
    <div className="p-5">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="" className="block">
            <span className="text-colorFour font-montserrat text-[20px] font-semibold leading-[30px] capitalize">
              name
            </span>{' '}
            <span className="text-primary font-montserrat text-[20px] font-semibold leading-[30px] capitalize">
              *
            </span>
          </label>
          <input
            type="text"
            placeholder="jakaria ahmod"
            name="name"
            onChange={handleChange}
            value={values.name}
            onBlur={handleBlur}
            className="lg:w-full w-[90%] mt-[12px] py-[20px] px-[32px] border-gray-400 border rounded-[10px] outline-none text-colorFour font-montserrat text-[20px] font-semibold leading-[30px] capitalize"
          />
          {errors.name && touched.name && (
            <p className="mt-[10px] text-red-600 font-montserrat">
              {errors.name}
            </p>
          )}
        </div>
        <div className="grid lg:grid-cols-2 gap-x-[15px] mt-[32px]">
          <div>
            <label htmlFor="" className="block">
              <span className="text-colorFour font-montserrat text-[20px] font-semibold leading-[30px] capitalize">
                Phone Number
              </span>{' '}
              <span className="text-primary font-montserrat text-[20px] font-semibold leading-[30px] capitalize">
                *
              </span>
            </label>
            <input
              type="text"
              placeholder="+123 456 7890"
              name="number"
              onChange={handleChange}
              value={values.number}
              onBlur={handleBlur}
              className="lg:w-full w-[90%] mt-[12px] py-[20px] px-[32px] border-gray-400 border rounded-[10px] outline-none text-colorFour font-montserrat text-[20px] font-semibold leading-[30px] capitalize"
            />
            {errors.number && (
              <p className="mt-[10px] text-red-600 font-montserrat">
                {errors.number}
              </p>
            )}
          </div>
          <div className="pt-[30px] lg:pt-0">
            <label htmlFor="" className="block">
              <span className="text-colorFour font-montserrat text-[20px] font-semibold leading-[30px] capitalize">
                Email Address
              </span>{' '}
              <span className="text-primary font-montserrat text-[20px] font-semibold leading-[30px] capitalize">
                *
              </span>
            </label>
            <input
              type="text"
              placeholder="amelia.watson@eshop.com"
              name="email"
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
              className="lg:w-full w-[90%] mt-[12px] py-[20px] px-[32px] border-gray-400 border rounded-[10px] outline-none text-colorFour font-montserrat text-[20px] font-semibold leading-[30px] capitalize"
            />
            {errors.name && (
              <p className="mt-[10px] text-red-600 font-montserrat">
                {errors.email}
              </p>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="" className="block mt-[32px]">
            <span className="text-colorFour font-montserrat text-[20px] font-semibold leading-[30px] capitalize">
              message
            </span>{' '}
            <span className="text-primary font-montserrat text-[20px] font-semibold leading-[30px] capitalize">
              *
            </span>
          </label>
          <textarea
            type="text"
            placeholder="jakaria ahmod"
            name="message"
            onChange={handleChange}
            value={values.message}
            onBlur={handleBlur}
            className="lg:w-full w-[90%] mt-[12px] py-[20px] px-[32px] border-gray-400 border rounded-[10px] outline-none text-colorFour font-montserrat text-[20px] font-semibold leading-[30px] capitalize resize-none h-[241px]"
          />
          {errors.message && (
            <p className="mt-[10px] text-red-600 font-montserrat">
              {errors.message}
            </p>
          )}
        </div>
        <div className="mt-[32px]">
          <button
            type="submit"
            className="bg-primary px-10 py-4 rounded-md cursor-pointer font-montserrat text-xl font-bold leading-[30px] text-white"
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactFrom;
