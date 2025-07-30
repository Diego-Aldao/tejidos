import React from "react";

interface Props {
  titulo: string;
  lineStyles?: string;
}

export default function SectionsHeader({ titulo, lineStyles }: Props) {
  return (
    <header
      className={`max-w-[1440px] w-fit flex flex-col relative after:absolute after:-bottom-2 md:after:-bottom-3 xl:after:-bottom-4 after:-left-3 after:w-full sm:after:-left-4 md:after:-left-8 lg:after:-left-10  after:h-[2px] after:bg-main-black ${
        lineStyles ??
        "xl:after:w-[1000px] xl:after:-left-[590px] 2xl:after:-left-[490px]"
      }`}
    >
      <h2 className="capitalize text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl italic relative after:absolute after:w-[3px] after:rounded-full after:h-[3px] after:bg-main-black after:-bottom-2 md:after:-bottom-3 xl:after:-bottom-4 after:right-0">
        {titulo}
      </h2>
    </header>
  );
}
