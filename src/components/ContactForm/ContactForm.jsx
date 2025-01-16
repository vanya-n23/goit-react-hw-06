import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./ContactForm.css";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Must be at least 3 characters")
    .max(50, "Must be 50 characters or less")
    .required("Name is required"),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Number must be in format XXX-XX-XX")
    .required("Number is required"),
});

const ContactForm = ({ onSubmit }) => {
  const initialValues = { name: "", number: "" };

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values.name, values.number);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="contact-form">
        <label>
          Name
          <Field className="field-form" type="text" name="name" />
          <ErrorMessage name="name" component="div" className="error" />
        </label>
        <label>
          Number
          <Field className="field-form" type="text" name="number" />
          <ErrorMessage name="number" component="div" className="error" />
        </label>
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;