import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = ({ onAdd }) => {
  const handleSubmit = (values, actions) => {
    onAdd({
      id: nanoid(),
      ...values,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="name">
            Name
          </label>
          <Field
            className={styles.input}
            type="text"
            name="name"
            id="name"
            placeholder="Enter name"
          />
          <ErrorMessage
            name="name"
            component="span"
            className={styles.error}
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="number">
            Number
          </label>
          <Field
            className={styles.input}
            type="text"
            name="number"
            id="number"
            placeholder="Enter phone number"
          />
          <ErrorMessage
            name="number"
            component="span"
            className={styles.error}
          />
        </div>

        <button className={styles.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;