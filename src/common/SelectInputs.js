const SelectInputs = ({ selectItems, formik }) => {
  return (
    <select name="city" {...formik.getFieldProps('city')}>
      {selectItems.map((x) => (
        <option value={x.value} key={x.value}>
          {x.name}
        </option>
      ))}
    </select>
  );
};

export default SelectInputs;
