import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import s from "./TruckOrderForm.module.css";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { useDispatch } from "react-redux";
import { openModal, closeModal } from "../../redux/modal/slice";

interface FormValues {
  name: string;
  email: string;
  bookingDate: Date | null;
  comment: string;
}

const initialValues: FormValues = {
  name: "",
  email: "",
  bookingDate: null,
  comment: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  bookingDate: Yup.date().nullable().required("Booking date is required"),
  comment: Yup.string(),
});

const TruckOrderForm: React.FC = () => {
  const dispatch = useDispatch();

  const handleSubmit = (_values: FormValues, { resetForm }: { resetForm: () => void }) => {
    dispatch(openModal("notification"));
    setTimeout(() => {
      dispatch(closeModal("notification"));
    }, 5000);
    resetForm(); 
  };

  return (
    <div className={s.container}>
      <h3 className={s.title}>Book your campervan now</h3>
      <p className={s.p}>Stay connected! We are always ready to help you.</p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ dirty }) => (
          <Form>
            <div className={s.inputCont}>
              <Input name="name" label="Name*" />
              <Input name="email" type="email" label="Email*" />
              <Input name="bookingDate" as="datepicker" label="Booking date*" />
              <Input name="comment" as="textarea" label="Comment" />
            </div>
            <Button type="submit" className="send" disabled={!dirty}>
              Send
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TruckOrderForm;
