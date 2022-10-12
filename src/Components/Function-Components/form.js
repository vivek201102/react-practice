import { useState } from 'react';

function Form() {
  // const [name, setName] = useState("");
  const [inputs, setInputs] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  }

  const submitForm = (event) => {
    event.preventDefault();
    alert(`Entered Details is : ${inputs.name} and ${inputs.email} and ${inputs.details} and ${inputs.gender}`);
    setInputs("");
  }
  return (
    <>
      <form onSubmit={submitForm}>
        <label>Enter Your Name:</label>
        <input type="text" name="name" value={inputs.name || ""} onChange={handleChange}></input>
        <br />

        <label>Enter Your Email:</label>
        <input type="email" name="email" value={inputs.email || ""} onChange={handleChange}></input>
        <br />

        <label>Enter Your Details</label>
        <textarea name="details" value={inputs.details || ""} onChange={handleChange}></textarea>
        <br />

        <label>Gender</label>
        <select name="gender" value={inputs.gender || ""} onChange={handleChange} required>
          <option value="" disabled>Choose</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <button>submit</button>
      </form>
    </>
  );
}

export default Form;