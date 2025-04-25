import React from "react";
import FillTheForm from "./FillTheForm";
import FormSubmitted from "./FormSubmited";

const Multi_step_form = () => {
  const data = [
    {
      id: "name",
      label: "Name",
      type: "text",
      button: "Next",
      placeholder: "Enter your name...",
    },
    {
      id: "dob",
      label: "D.O.B",
      type: "date",
      button: "Next",
      placeholder: "Enter your DOB...",
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      button: "Next",
      placeholder: "Enter your email...",
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      button: "Submit",
      placeholder: "Enter your password...",
    },
  ];

  const [index, setIndex] = React.useState(0);
  const [form, setForm] = React.useState(data);
  const [formData, setFormData] = React.useState({
    name: "",
    dob: "",
    email: "",
    password: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = React.useState(false);

  const handelChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    const copyFormData = { ...formData };
    copyFormData[id] = value;
    setFormData(copyFormData);
  };
  console.log(formData);

  const handelSubmit = (e) => {
    e.preventDefault();
    if (index === form.length - 1) {
      alert("form submited");
      setIsFormSubmitted(true);
    } else {
      setIndex((index) => index + 1);
    }
  };

  const handelBack = (e) => {
    e.preventDefault();
    setIndex((index) => index - 1);
  };

  return (
    <div className="w-screen  h-screen flex justify-center items-center ">
      {!isFormSubmitted ? (
        <FillTheForm
          form={form}
          index={index}
          formData={formData}
          handelSubmit={handelSubmit}
          handelBack={handelBack}
          handelChange={handelChange}
        />
      ) : (
        <FormSubmitted formData={formData} />
      )}
    </div>
  );
};

export default Multi_step_form;
