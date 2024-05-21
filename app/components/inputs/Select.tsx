"use client";

import clsx from "clsx";
import ReactSelect from "react-select";

interface SelectProps {
  label: string;
  value?: Record<string, any>;
  onChange: (value: Record<string, any>) => void;
  options: Record<string, any>[];
  disabled?: boolean;
}

const Select: React.FC<SelectProps> = ({ label, value, onChange, options, disabled }) => {
  return (
    <div className="z-[100]">
      <label
        className="
          block 
          text-sm 
          font-medium 
          leading-6 
          text-gray-200
        "
      >
        {label}
      </label>
      <div className="mt-2">
        <ReactSelect
          isDisabled={disabled}
          value={value}
          onChange={onChange}
          isMulti
          options={options}
          menuPortalTarget={document.body}
          styles={{
            menuPortal: (base) => ({ ...base, zIndex: 9999 }),
            option: (base, { isFocused, isSelected }) => ({
              ...base,
              backgroundColor: isFocused
                ? "#EEEEEE"
                : !isSelected
                ? "rgb(224, 224, 224)"
                : "#E0E0E0",
            }),
          }}
          classNames={{
            control: (state) =>
              clsx(
                `
                text-sm `,
                state.isFocused && "border-gray-200"
              ),
            menu: () => "dark:bg-lightgray",
          }}
        />
      </div>
    </div>
  );
};

export default Select;