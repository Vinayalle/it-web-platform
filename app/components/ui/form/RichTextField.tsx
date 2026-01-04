"use client";

import { Controller } from "react-hook-form";
import RichTextEditor from "../RichTextEditor";

interface Props {
  name: string;
  label: string;
  control: any;
  error?: any;
}

export default function RichTextField({
  name,
  label,
  control,
  error,
}: Props) {
  return (
    <div className="space-y-1">
      <label className="block font-medium text-gray-700">
        {label}
      </label>

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <RichTextEditor
            value={field.value || ""}
            onChange={field.onChange}
          />
        )}
      />

      {error && (
        <p className="text-sm text-red-500">{error.message}</p>
      )}
    </div>
  );
}
