import React from 'react'
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
type InputProps = {
  label: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
};
export default function Input({
  label,
  type = "text",
  placeholder,
  register,
  error,
}: InputProps) {
  return (
     <div className="w-full">
      <label className="block mb-1 text-sm font-medium">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        {...register}
        className={`w-full rounded-md border px-3 py-2 focus:outline-none
          ${error ? "border-red-500" : "border-gray-300"}`}
      />

      {error && (
        <p className="mt-1 text-sm text-red-600">
          {error.message}
        </p>
      )}
    </div>
  )
}
