import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  const initialValues = { username: "", email: "", password: "" ,password_1:""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
  }

  function containsCapitalChars(str) {
    const specialChars = /[`QWERTYUIOPASDFGHJKKLZXCVBNM?~]/;
    return specialChars.test(str);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
 
    if (!values.password) {
      errors.password = "Password is required";
    }   else if (! values.password_1){
      errors.password_1=" this field is required";
    }else if (! containsSpecialChars(values.password)){
      errors.password="password has no special character"
    }
    else if (! containsCapitalChars(values.password)){
      errors.password="password has no capital letters"
    }
    else if (values.password.length < 7) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 100) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
  
    else if (values.password != values.password_1) {
      errors.password_1 = "password does not match";
    }
    return errors;
  };
 

  const Registartion=()=>{
    return ( <div className="container">
    {Object.keys(formErrors).length === 0 && isSubmit ? (
      <h2>Signed in successfully</h2>
    ) : (
      <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
    )}

    <form onSubmit={handleSubmit}>
      <h1>Login Form</h1>
      <div className="ui divider"></div>
      <div className="ui form">
        <div className="field">
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formValues.username}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.username}</p>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.email}</p>
        <div className="field">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formValues.password}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.password}</p>
        <div className="field">
          <label>Confirm Password</label>
          <input
            type="password_1"
            name="password_1"
            placeholder="Password_1"
            value={formValues.password_1}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.password_1}</p>
        <button className="fluid ui button blue">Submit</button>
      </div>
    </form>
  </div>);
  }


  const Navigation=()=>{
    return(<div>
     <h1>mom is heloo</h1>
    </div>);
  }
 
  return (
    Registartion()
   
    
  );
}

export default App;