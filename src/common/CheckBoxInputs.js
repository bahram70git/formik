import React from "react";


const CheckBoxInputs = ({formik, checkItems, name}) => {

    return ( 
        <div className="Signup_check" {...formik.getFieldProps('age')}>
            {checkItems.map(x => 
                <React.Fragment key={x.name}>
                    <input type="checkbox" name={name} value={x.name} id={x.name} />
                    <label htmlFor={x.name}>{x.name}</label>
                </React.Fragment>
            )}
        </div>
     );
}
 
export default CheckBoxInputs;