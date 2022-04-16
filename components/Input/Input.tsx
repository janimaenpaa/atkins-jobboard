import React from "react";
import { FieldError } from "react-hook-form";

type Props = {
  label?: string;
  type?: string;
  error?: FieldError;
  register?: any;
};

const Input = ({ label, type = "text", error, register }: Props) => {
  return (
    <div className="flex flex-col my-2">
      {label && <label>{label}</label>}
      {error && error.type === "required" && (
        <span className="text-red-500 text-sm">This field is required.</span>
      )}
      {error && error.type === "pattern" && (
        <span className="text-red-500 text-sm">
          Enter a valid email address.
        </span>
      )}
      {type === "textarea" ? (
        <textarea
          className={
            error
              ? "border border-red-500 rounded-md p-2 my-2 w-full"
              : "border border-slate-500 rounded-md p-2 my-2 w-full"
          }
          {...register}
        ></textarea>
      ) : (
        <input
          className={
            error
              ? "border border-red-500 rounded-md p-2 my-2 w-full"
              : "border border-slate-500 rounded-md p-2 my-2 w-full"
          }
          type={type}
          {...register}
        />
      )}
    </div>
  );
};

export default Input;
