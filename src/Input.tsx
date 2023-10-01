const Input = () => {
  function onChange(value) {
    console.log("12345", value);
  }
  return (
    <div>
      <textarea onChange={onChange} />
    </div>
  );
};

export default Input;
