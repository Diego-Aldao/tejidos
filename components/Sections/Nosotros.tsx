import Image from "next/image";
import React from "react";
import tejedora from "@/assets/tejedora.webp";
import ReferenciaScroll from "../ReferenciaScroll";
import SectionsHeader from "../SectionsHeader";

export default function Nosotros() {
  return (
    <section className="w-full bg-secondary-background relative after:absolute after:w-full after:top-[20px] after:h-[calc(100%-40px)] after:bg-transparent after:border-background after:border-2 after:border-x-0">
      <ReferenciaScroll id="nosotros" />
      <div className="contenido w-full px-3 sm:px-4 md:px-8 lg:px-10 2xl:px-0 flex flex-col gap-8  py-10 text-main-black max-w-[1440px] mx-auto">
        <SectionsHeader titulo="cómo trabajamos" />
        <div className="contenido grid md:grid-cols-[1fr_245px] lg:grid-cols-[1fr_300px] md:gap-8 lg:gap-12 max-w-[1280px] mx-auto">
          <div className="texto flex flex-col gap-4 md:items-center md:justify-center ">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl xl:max-w-[700px] lg:max-w-[600px] sm:max-w-[500px] max-w-[400px]">
              En Nubecita realizamos tejidos a crochet y dos agujas hechos por
              encargo, pensados especialmente para bebés y niños/as de hasta 5
              años.
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl xl:max-w-[700px] lg:max-w-[600px] sm:max-w-[500px] max-w-[400px]">
              Sweaters, gorritos, mantas, vestidos y más: todo hecho a mano, con
              los materiales y las combinaciones de colores que vos elijas.
            </p>
          </div>
          <div className="imagen hidden md:flex h-full">
            <div className="contenedor-imagen rounded-t-[900px] relative overflow-hidden h-[300px] lg:h-[350px] w-full rounded-b-xl">
              <div className=" w-[calc(100%-20px)] h-[calc(100%-20px)] bg-transparent absolute bottom-[10px] left-[10px] rounded-t-[500px] rounded-b-xl border-4 border-secondary-background"></div>
              <Image
                src={tejedora}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="object-contain object-[50%_0px] pointer-events-none select-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
