import "./Signup.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import Inputs from "../common/Inputs";
import RadioInputs from "../common/RadioInputs";
import SelectInputs from "../common/SelectInputs";
import CheckBoxInputs from "../common/CheckBoxInputs";

const setData = {
  name: "bahram",
  phone: "99999999999",
  email: "a@gmail.com",
  password: "6666",
  passwordConfirmation: "6666",
  gender: "male",
};

const initialValues = {
  name: "",
  phone: "",
  email: "",
  password: "",
  passwordConfirmation: "",
  gender: "male",
  city: "", 
  age: []
};

const radioItems = [
  { name: "Male", id: "male" },
  { name: "Female", id: "female" },
];

const selectItems = [
  { name: "Select a city", value: "" },
  { name: "Mashhad", value: "mashhad" },
  { name: "Tehran", value: "tehran" },
  { name: "Tabriz", value: "tabriz" }
];

const checkItems = [
  { name: "Young", value: "Young" },
  { name: "Middle Age", value: "Middle Age" },
  { name: "Old", value: "Old" },
];

const onSubmit = (x) => console.log(x);

const validationSchema = yup.object({
  name: yup.string().required("Name is required!"),
  email: yup.string().email().required("Email is required!"),
  phone: yup
    .string()
    .required("Phone is required!")
    .matches(/^[0-9]{11}$/, "Phone number is not valid!"),
  password: yup
    .string()
    .min(4, "At least 4 charecters")
    .required("Password is required!"),
  passwordConfirmation: yup
    .string()
    .min(4, "At least 4 charecters")
    .required("Password is required!")
    .oneOf([yup.ref("password")], "Passwords must match!"),
  gender: yup.string().required(),
  city: yup.string().required(),
  age: yup.array().min(1).required()
});

const Signup = () => {
  const [currentData, setCurrentData] = useState(null);

  const formik = useFormik({
    initialValues: currentData || initialValues,
    onSubmit,
    validationSchema,
    enableReinitialize: true,
    validateOnMount: true,
  });

  console.log(formik.values);

  return (
    <form className="Signup" onSubmit={formik.handleSubmit}>
      <Inputs 
        formik={formik} 
        label="Name" 
        type="text" 
        name="name" 
      />
      <Inputs 
        formik={formik} 
        label="Phone" 
        type="tel" 
        name="phone" 
      />
      <Inputs 
        formik={formik} 
        label="Email" 
        type="email" 
        name="email" 
      />
      <Inputs
        formik={formik}
        label="Password"
        type="password"
        name="password"
      />
      <Inputs
        formik={formik}
        label="Password Confirmation"
        type="password"
        name="passwordConfirmation"
      />

      <div className="Signup-radio">
        <RadioInputs radioItems={radioItems} formik={formik} />
        <SelectInputs selectItems={selectItems} formik={formik} />
      </div>

      <CheckBoxInputs checkItems={checkItems} name="age" formik={formik} />

      <div className="Signup-btn">
        <button type="button" onClick={() => setCurrentData(setData)}>
          Edit
        </button>
        <button type="submit" disabled={!formik.isValid}>
          Sign up
        </button>
      </div>
    </form>
  );
};

export default Signup;
