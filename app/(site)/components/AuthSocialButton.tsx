import React from "react";
import { IconType } from "react-icons";

interface AuthSocialButtonProps {
  icon: IconType;
  onClick: () => void;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
  icon: Icon,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
    inline-flex
    w-full
    justify-center
    rounded-md
    bg-[#ff004f]
    px-4
    py-2
    text-gray-200
    shadow-sm
    hover:bg-rose-600
    focus:outline-offset-0
    "
    >
      <Icon />
    </button>
  );
};

export default AuthSocialButton;
