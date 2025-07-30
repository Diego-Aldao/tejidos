import React, { ReactNode } from "react";

interface Props {
  nombre: string;
  children: ReactNode;
  link: string;
}

export default function MainButton({ nombre, children, link }: Props) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full transition-colors ease-custom border group border-transparent hover:border-background cursor-pointer flex items-center justify-center p-[2px] bg-secondary-color"
    >
      <span className="py-1 transition-all px-2 md:px-3 flex lg:gap-2 group-hover:bg-background group-hover:text-secondary-color text-background items-center gap-1 rounded-full bg-secondary-color lg:px-5 border border-background">
        {children}
        <span className="textos relative flex flex-col overflow-hidden ">
          <span className="top-0 relative group-hover:-translate-y-10 opacity-100 group-hover:opacity-0 transition-[opacity,translate] left-0 text-[10px] sm:text-xs md:text-sm lg:text-base capitalize font-medium ">
            {nombre}
          </span>

          <span className="top-10  opacity-0 group-hover:opacity-100 group-hover:-translate-y-10 transition-[opacity,translate] left-0 absolute text-[10px] sm:text-xs md:text-sm lg:text-base capitalize font-medium ">
            {nombre}
          </span>
        </span>
      </span>
    </a>
  );
}
