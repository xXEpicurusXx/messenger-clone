import clsx from "clsx";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
  className?: string;

}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  fullWidth,
  children,
  onClick,
  secondary,
  danger,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(
        `
        flex 
        justify-center 
        items-center
        w-full
        rounded-md 
        px-3 
        py-2 
        text-sm 
        font-semibold 
        focus-visible:outline 
        focus-visible:outline-2 
        focus-visible:outline-offset-2 
        mt-3
        `,
        disabled && "opacity-50 cursor-default",
        fullWidth && "w-full",
        secondary
          ? "text-white hover:bg-gray-600"
          : "text-white ",
        danger &&
          "bg-[#ff004f] hover:bg-rose-600 focus-visible:outline-rose-600",
        !secondary &&
          !danger &&
          "bg-[#ff004f] hover:bg-rose-600 focus-visible:outline-[#ff004f]"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
