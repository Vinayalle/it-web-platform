// components/ui/Select.tsx
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  label: string;
  options: Option[];
  register: UseFormRegisterReturn;
  error?: FieldError;
};

export default function Select({
  label,
  options,
  register,
  error,
}: SelectProps) {
  return (
    <div className="w-full">
      <label className="block mb-1 text-sm font-medium">
        {label}
      </label>

      <select
        {...register}
        className={`w-full rounded-md border px-3 py-2
          ${error ? "border-red-500" : "border-gray-300"}`}
      >
        <option value="">Select category</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {error && (
        <p className="mt-1 text-sm text-red-600">
          {error.message}
        </p>
      )}
    </div>
  );
}
