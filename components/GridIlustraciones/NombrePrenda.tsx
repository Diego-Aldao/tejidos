"use client";
import React from "react";

interface Props {
  nombre: string;
}

export default function NombrePrenda({ nombre }: Props) {
  return (
    <div className="relative  after:w-full after:absolute after:h-[1px] w-fit  hover:after:right-10px after:-bottom-[0px] after:bg-background right-[5px] top-[5px] capitalize h-fit font-medium ml-auto pt-2 pr-4 text-[10px] text-background md:text-xs lg:text-sm xl:text-base lg:pt-4 lg:pr-8 hover:after:-translate-x-2 after:delay-200 after:right-0 after:ease-custom after:transition-[opacity,translate] overflow-hidden pb-[1px]">
      <span>{nombre}</span>
    </div>
  );
}
