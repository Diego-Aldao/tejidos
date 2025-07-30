import React from "react";
import imagenLarge2 from "@/assets/hero.webp";
import imagenDosAgujas1 from "@/assets/gorroDA.png";
import imagenDosAgujas2 from "@/assets/niño1.png";
import ReferenciaScroll from "../ReferenciaScroll";
import GridIlustraciones from "../GridIlustraciones/GridIlustraciones";
import SectionsHeader from "../SectionsHeader";

export default function DosAgujas() {
  return (
    <section className="w-full relative overflow-hidden">
      <ReferenciaScroll id="dos agujas" />
      <div className="contenido max-w-[1440px] mx-auto w-full px-3 sm:px-4 md:px-8 lg:px-10 2xl:px-0 flex flex-col gap-12">
        <SectionsHeader
          titulo="tejidos a dos agujas"
          lineStyles="xl:after:w-[1000px] xl:after:-left-[520px] 2xl:after:-left-[410px]"
        />
        <GridIlustraciones
          imagenTipoTejido={imagenLarge2}
          imagenNiñoUno={imagenDosAgujas1}
          imagenNiñoDos={imagenDosAgujas2}
          categoriaUno="gorros"
          categoriaDos="sacos"
          variacionDos
        >
          <>
            <span className="relative z-[2] text-secondary-color capitalize italic sm:text-lg md:text-2xl lg:text-3xl xl:text-5xl font-semibold">
              comodidad
            </span>
            <span className="relative z-[2] text-secondary-color capitalize italic sm:text-lg md:text-2xl lg:text-3xl xl:text-5xl font-semibold">
              sencillez
            </span>
            <span className="relative z-[2] text-secondary-color capitalize italic sm:text-lg md:text-2xl lg:text-3xl xl:text-5xl font-semibold">
              y suavidad
            </span>
          </>
        </GridIlustraciones>
      </div>
    </section>
  );
}
