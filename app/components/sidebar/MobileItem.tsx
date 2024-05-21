"use client";

import React, { useState } from "react";
import clsx from "clsx";
import Link from "next/link";

interface MobileItemProps {
  href: string;
  icon: any;
  active?: boolean;
  onClick?: () => void;
}

const MobileItem: React.FC<MobileItemProps> = ({
  href,
  icon: Icon,
  active,
  onClick,
}) => {
  const [isActive, setIsActive] = useState(active);
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
    setIsActive(!active);
  };
  return (
    <Link
      onClick={handleClick}
      href={href}
      className={clsx(
        `
    group
    flex
    gap-x-3
    text-sm
    leading-6
    font-semibold
    w-full
    justify-center
    p-4
    text-gray-400 
    hover:text-gray-100 
    hover:bg-[#ff004f]
    

  `,
        isActive &&
          "bg-[#ff004f] text-gray-300"
      )}
    >
      <Icon
        className={`
        h-6
        w-6
      `}
      />
    </Link>
  );
};

export default MobileItem;
