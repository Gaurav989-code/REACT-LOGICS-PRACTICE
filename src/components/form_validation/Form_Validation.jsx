import React from "react";

const Form_Validation = () => {
  const defaultValues = {
    firstName: {
      id: "firstName",
      label: "First Name",
      type: "text",
      placeHolder: "First Name ....",
      value: "",
      isError: false,
      errorMsg: "First name can`t be empty...",
    },
    lastName: {
      id: "lastName",
      label: "Last Name",
      type: "text",
      placeHolder: "Last Name ....",
      value: "",
      isError: false,
      errorMsg: "Last name can`t be empty...",
    },
    email: {
      id: "email",
      label: "Email",
      type: "text",
      placeHolder: "Email ....",
      value: "",
      isError: false,
      errorMsg: "  Email can`t be empty...",
    },
    password: {
      id: "password",
      label: "Password",
      type: "Password",
      placeHolder: "Enter your Password ....",
      value: "",
      isError: false,
      errorMsg: "Enter correct password...",
    },
    confirmPassword: {
      id: "confirmPassword",
      label: "Confirm Password",
      type: "Password",
      placeHolder: "Confirm your Password ....",
      value: "",
      isError: false,
      errorMsg: "Password doesn`t match...",
    },
  };

  const [formData, setFormData] = React.useState(defaultValues);
  const [isPasswordMatch, setIsPasswordMatch] = React.useState(true);

  const handelInputChange = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    const copyFormData = { ...formData };
    copyFormData[key].value = value;
    setFormData(copyFormData);
    isValidForm();
  };

  const passwordMatch = () => {
    const copyFormData = { ...formData };
    const pass = copyFormData["password"].value;
    const confirmPass = copyFormData["confirmPassword"].value;
    if (pass !== confirmPass) {
      setIsPasswordMatch(false);
    } else {
      setIsPasswordMatch(true);
    }
    setFormData(copyFormData);
  };

  const isValidForm = () => {
    const copyFormData = { ...formData };
    Object.keys(copyFormData).forEach((key) => {
      const obj = copyFormData[key];
      console.log(obj);
      obj.isError = !obj.value ? true : false;
      passwordMatch();
    });
    setFormData(copyFormData);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    isValidForm();
  };

  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center">
      <div className="w-[400px]  ">
        <form onSubmit={handelSubmit} className="border-1 p-4  ">
          {Object.keys(formData).map((key) => {
            const { id, label, type, placeHolder, value, isError, errorMsg } =
              formData[key];
            return (
              <div key={id} className="flex flex-col gap-1 mt-10">
                <label htmlFor="" className="text-xl">
                  {label}
                </label>
                <input
                  onChange={handelInputChange}
                  className={`border-1 p-2 rounded-xl ${
                    isError ? "border-red-500" : ""
                  } `}
                  id={id}
                  type={type}
                  placeholder={placeHolder}
                  value={value}
                />
                {isError && <span className="text-red-500">{errorMsg}</span>}
                {key === "confirmPassword" && !isPasswordMatch && <span className="text-red-500">password doesn't match</span>}
              </div>
            );
          })}

          <div className="flex justify-center mt-4">
            <button className="bg-cyan-500 text-white py-2 px-6 border-1 border-black rounded-xl">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form_Validation;
