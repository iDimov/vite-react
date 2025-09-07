import { Field, ErrorMessage, useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import s from "./Input.module.css";
import "react-datepicker/dist/react-datepicker.css";

type InputProps<T = Record<string, unknown>> = {
  name: keyof T & string;
  label?: string;
  type?: string;
  as?: "input" | "textarea" | "datepicker";
};

function Input<T extends Record<string, unknown> = Record<string, unknown>>({
  name,
  label,
  type = "text",
  as = "input",
}: InputProps<T>) {
  const { setFieldValue, values } = useFormikContext<T>();
  
  const value = values[name];

  return (
    <div className={s.container}>
      {as === "textarea" && (
        <Field
          id={name}
          name={name}
          as="textarea"
          placeholder={label}
          className={s.textarea}
        />
      )}

      {as === "datepicker" && (
        <DatePicker
          id={name}
          selected={value ? new Date(value as string | number | Date) : null}
          onChange={(date) => setFieldValue(name, date)}
          className={s.input}
          dateFormat="yyyy-MM-dd"
          placeholderText={label}
          autoFocus={false}
        />
      )}

      {as === "input" && (
        <Field
          id={name}
          name={name}
          type={type}
          placeholder={label}
          className={s.input}
        />
      )}

      <ErrorMessage name={name}>
        {(msg) => <div className={s.error}>{msg}</div>}
      </ErrorMessage>
    </div>
  );
}

export default Input;
