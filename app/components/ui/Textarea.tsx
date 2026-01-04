// components/ui/Textarea.tsx
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type TextareaProps = {
  label: string;
  placeholder?: string;
  rows?: number;
  register: UseFormRegisterReturn;
  error?: FieldError;
};

export default function Textarea({
  label,
  placeholder,
  rows = 4,
  register,
  error,
}: TextareaProps) {
  return (
    <div className="w-full">
      <label className="block mb-1 text-sm font-medium">
        {label}
      </label>

      <textarea
        rows={rows}
        placeholder={placeholder}
        {...register}
        className={`w-full rounded-md border px-3 py-2 resize-none
          ${error ? "border-red-500" : "border-gray-300"}`}
      />

      {error && (
        <p className="mt-1 text-sm text-red-600">
          {error.message}
        </p>
      )}
    </div>
  );
}
