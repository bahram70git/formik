import React from "react";

const RadioInputs = ({ radioItems, formik }) => {
  const options = radioItems.map((x) => (
    <React.Fragment key={x.id}>
      <input
        type="radio"
        id={x.id}
        value={x.id}
        name="gender"
        onChange={formik.handleChange}
        checked={formik.values.gender === x.id}
      />
      <label htmlFor={x.id}>{x.name}:</label>
    </React.Fragment>
  ));

  return <React.Fragment>{options}</React.Fragment>;
};

export default RadioInputs;
