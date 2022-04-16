import React from "react";

type Props = {
  label?: string;
  type?: string;
  register?: any;
};

const Input = ({ label, type = "text", register }: Props) => {
  return (
    <div className="my-2">
      {label && <label>{label}</label>}
      {type === "textarea" ? (
        <textarea
          className="border border-slate-500 rounded-md p-2 my-2 w-full"
          {...register}
        ></textarea>
      ) : (
        <input
          className="border border-slate-500 rounded-md p-2 my-2 w-full"
          type={type}
          {...register}
        />
      )}
    </div>
  );
};

export default Input;
