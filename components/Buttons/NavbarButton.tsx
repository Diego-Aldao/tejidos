import React from "react";
interface Props {
  nombre: string;
  customStyles?: string;
}

export default function NavbarButton({ nombre, customStyles }: Props) {
  return (
    <li className="flex-1 w-fit max-w-[120px] text-center">
      <a
        href={`#${nombre}`}
        className={`text-sm lg:text-base text-nowrap capitalize font-medium text-background after:absolute relative after:bottom-0 pb-[2px] overflow-hidden after:-left-5 after:w-[90%] after:h-[2px] after:bg-background  after:origin-left hover:after:left-0 after:transition-all after:ease-custom before:ease-custom after:opacity-0 hover:after:opacity-100 before:absolute before:-bottom-1 before:opacity-0 hover:before:opacity-100 before:right-0 before:w-[2px] before:h-[2px] before:bg-background before:delay-75 before:rounded-full hover:before:-bottom-0 before:transition-all ${customStyles}`}
      >
        {nombre}
      </a>
    </li>
  );
}
