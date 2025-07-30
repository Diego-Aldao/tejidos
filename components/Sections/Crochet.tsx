import React from "react";
import imagenLarge2 from "@/assets/crochet.png";
import imagenCrochet2 from "@/assets/vestidoCT.png";
import imagenCrochet1 from "@/assets/CapaCrochet2.png";
import ReferenciaScroll from "../ReferenciaScroll";
import GridIlustraciones from "../GridIlustraciones/GridIlustraciones";

export default function Crochet() {
  return (
    <section className="bg-background w-full relative overflow-hidden ">
      <ReferenciaScroll id="crochet" />
      <div className="contenido relative  max-w-[1440px] mx-auto w-full px-3 sm:px-4 md:px-8 lg:px-10 2xl:px-0  flex flex-col gap-8 lg:gap-12">
        <header className="max-w-[1440px] w-fit flex flex-col relative after:absolute after:-bottom-2 md:after:-bottom-3 xl:after:-bottom-4 after:-left-3 after:w-full sm:after:-left-4 md:after:-left-8 lg:after:-left-10 xl:after:w-[1000px] xl:after:-left-[600px] 2xl:after:-left-[500px] after:h-[2px] after:bg-main-black">
          <h2 className="capitalize text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl italic relative after:absolute after:w-[3px] after:rounded-full after:h-[3px] after:bg-main-black after:-bottom-2 md:after:-bottom-3 xl:after:-bottom-4 after:right-0">
            tejidos a crochet
          </h2>
        </header>
        <GridIlustraciones
          imagenTipoTejido={imagenLarge2}
          imagenNiñoUno={imagenCrochet2}
          imagenNiñoDos={imagenCrochet1}
          categoriaUno="vestidos"
          categoriaDos="capas"
        >
          <>
            <span className="relative z-[2] text-secondary-color capitalize italic sm:text-lg md:text-2xl lg:text-3xl xl:text-5xl font-semibold">
              detalles
            </span>
            <span className="relative z-[2] text-secondary-color capitalize italic sm:text-lg md:text-2xl lg:text-3xl xl:text-5xl font-semibold">
              paciencia
            </span>
            <span className="relative z-[2] text-secondary-color capitalize italic sm:text-lg md:text-2xl lg:text-3xl xl:text-5xl font-semibold">
              y cuidado
            </span>
          </>
        </GridIlustraciones>
      </div>
    </section>
  );
}
