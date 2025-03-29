/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from "clsx";

import { FieldWrapper, FieldWrapperPassThroughProps } from "./field-wrapper";

type InputFieldProps = FieldWrapperPassThroughProps & {
  type?: "text" | "email" | "password" | "date" | "number";
  name: string;
  className?: string;
  disabled?: boolean;
  value?: string | number;
  onChange?: (e: any) => void;
};

export const INPUT_FIELD_STYLE =
  "block w-full rounded-md border-0 px-3 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#71ED45] sm:text-sm sm:leading-6";

export const InputField = ({
  type = "text",
  name,
  label,
  className,
  disabled = false,
  required = true,
  value,
  description,
  onChange,
}: InputFieldProps) => {
  return (
    <FieldWrapper
      label={label}
      required={required}
      description={description}
    >
      <input
        type={type}
        name={name}
        className={clsx(
          "block w-full rounded-md border-0 px-3 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#71ED45] sm:text-sm sm:leading-6",
          className,
          disabled && "opacity-60"
        )}
        disabled={disabled}
        value={value}
        onChange={onChange}
      />
    </FieldWrapper>
  );
};
