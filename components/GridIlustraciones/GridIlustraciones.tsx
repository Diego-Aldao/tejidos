import React, { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import NombrePrenda from "./NombrePrenda";

interface Props {
  imagenNiñoUno: StaticImageData;
  imagenNiñoDos: StaticImageData;
  imagenTipoTejido: StaticImageData;
  categoriaUno: string;
  categoriaDos: string;
  children: ReactNode;
  variacionDos?: boolean;
}

export default function GridIlustraciones({
  imagenNiñoUno,
  imagenNiñoDos,
  imagenTipoTejido,
  categoriaUno,
  categoriaDos,
  children,
  variacionDos,
}: Props) {
  return (
    <div className="cuadricula relative w-full max-w-[400px] mx-auto sm:max-w-full sm:mx-0 sm:max-h-full  grid grid-cols-2 grid-rows-[150px_100px_150px] sm:grid-rows-2  md:h-[450px] lg:h-[600px] xl:h-[700px] rounded-md overflow-hidden sm:grid-cols-3">
      <div
        className={`row-1 col-span-2 flex relative overflow-hidden after:w-[calc(100%-10px)] after:pointer-events-none after:absolute after:h-[calc(100%-10px)] after:bg-transparent after:top-[5px] after:left-[5px] after:border after:border-background after:rounded-t-md sm:after:rounded-tl-none  lg:after:border-2 ${
          variacionDos ? "bg-main-color" : "bg-secondary-color"
        }`}
      >
        <div className="texto-gigante absolute text-background w-full -top-12 2xl:-top-24 left-0 pointer-events-none">
          <span className="!font-playfair capitalize text-[150px] sm:text-[200px] lg:text-[250px] xl:text-[300px] 2xl:text-[350px]  opacity-5 italic">
            {categoriaUno}
          </span>
        </div>
        <div className="imagen1 overflow-hidden w-[50%] h-full">
          <Image
            src={imagenNiñoUno}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="relative select-none z-[3] [filter:drop-shadow(-5px_6px_10px_#000000a2)] max-w-[400px] pointer-events-none"
          />
        </div>
        <NombrePrenda nombre={categoriaUno} />
      </div>
      <div className="imagen2 bg-secondary-background sm:col-start-1 sm:row-start-1">
        <Image
          src={imagenTipoTejido}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="scale-x-[-1] pointer-events-none select-none"
        />
      </div>
      <div className="flex flex-col items-center justify-center sm:col-start-3 sm:row-start-2 bg-secondary-background ">
        {children}
      </div>
      <div
        className={`row-2 bg-main-color col-span-2 row-start-3 sm:row-start-2 flex relative overflow-hidden after:pointer-events-none  after:w-[calc(100%-10px)] after:absolute after:h-[calc(100%-10px)] after:bg-transparent after:top-[5px] after:left-[5px] after:border after:border-background after:rounded-b-md sm:after:rounded-br-none  lg:after:border-2 ${
          variacionDos ? "bg-secondary-color" : "bg-main-color"
        }`}
      >
        <div className="texto-gigante absolute text-background w-full -top-24 2xl:-top-36 left-0 pointer-events-none">
          <span className="!font-playfair capitalize text-[200px] sm:text-[250px] lg:text-[300px] xl:text-[350px] 2xl:text-[400px]  opacity-5 italic">
            {categoriaDos}
          </span>
        </div>
        <div
          className={`imagen3 bg-main-color w-[50%] ${
            variacionDos ? "bg-secondary-color" : "bg-main-color"
          }`}
        >
          <Image
            src={imagenNiñoDos}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="scale-x-[-1] select-none relative z-[2] [filter:drop-shadow(-5px_6px_10px_#000000a2)] max-w-[400px] pointer-events-none"
          />
        </div>
        <span className="relative right-[5px] top-[5px] capitalize h-fit font-medium pt-2 pr-4 ml-auto text-[10px] border-b-1 sm:ml-auto sm:pl-0 sm:pr-4 md:text-xs lg:text-sm xl:text-base lg:pt-4 lg:pr-8 border-background text-background">
          {categoriaDos}
        </span>
      </div>
    </div>
  );
}
