import React from "react";

const FillTheForm = (props) => {
  const { form, index, formData, handelSubmit, handelBack, handelChange } =
    props;

  return (
    <div className="w-[500px] h-[500px] border border-black shadow-lg shadow-gray-900 flex justify-center">
      <form className="flex flex-col gap-3 mt-10" onSubmit={handelSubmit}>
        {index > 0 && (
          <a
            className="text-lg font-semibold cursor-pointer"
            onClick={handelBack}
            href="/"
          >
            ⬅️Back
          </a>
        )}

        <label className="text-3xl font-semibold mt-6 " htmlFor="">
          {form[index].label}
        </label>
        <input
        required
          onChange={handelChange}
          value={formData[form[index].id]}
          id={form[index].id}
          className="border border-black text-2xl p-2 rounded-lg mt-4"
          type={form[index].type}
          placeholder={form[index].placeholder}
        />
        <button className="bg-blue-500 text-white">{form[index].button}</button>
      </form>
    </div>
  );
};

export default FillTheForm;
