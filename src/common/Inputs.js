import React from "react";


const Inputs = (props) => {
    const {formik, label, type, name} = props;

    return ( 
        <React.Fragment>
            <label>{label}:</label>
            <input type={type} name={name} {...formik.getFieldProps(name)} />
            {formik.errors.name && formik.touched[name] && <p>{formik.errors[name]}</p>}
        </React.Fragment>
     );
}
 
export default Inputs;