import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../redux/contactsSlice';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must be less than 50 characters')
    .required('Name is required'),
  number: Yup.string()
    .min(3, 'Number must be at least 3 characters')
    .max(50, 'Number must be less than 50 characters')
    .required('Number is required')
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const handleSubmit = (values, { resetForm, setFieldError }) => {
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (existingContact) {
      setFieldError('name', `${values.name} is already in contacts`);
      return;
    }

    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="name">👤 Contact Name</label>
          <Field type="text" name="name" id="name" placeholder="Enter full name" />
          <ErrorMessage name="name" component="div" />
        </div>
        <div>
          <label htmlFor="number">📞 Phone Number</label>
          <Field type="tel" name="number" id="number" placeholder="Enter phone number" />
          <ErrorMessage name="number" component="div" />
        </div>
        <button type="submit">✚ Add Contact</button>
      </Form>
    </Formik>
  );
}