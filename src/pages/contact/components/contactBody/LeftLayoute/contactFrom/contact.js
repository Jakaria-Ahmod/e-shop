import { object, string } from 'yup';
export const contactShema = object({
  name: string().required('Enter your Name'),
  number: string()
    .required('Enter your number')
    .matches(/^(\+88001|01)[0-9]{9}$/, 'Please enter a valid number'),
  email: string().required('Enter your email'),
  message: string().required('Enter your message'),
});
export const initialValues = {
  name: '',
  number: '',
  email: '',
  message: '',
};
