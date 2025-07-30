import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import ReferenciaScroll from "../ReferenciaScroll";

export default function Contacto() {
  return (
    <section className="w-full relative">
      <ReferenciaScroll id="contacto" />
      <div className="contenido w-full px-3 sm:px-4 md:px-8 lg:px-10 2xl:px-0 flex flex-col gap-8  text-main-black max-w-[1440px] mx-auto">
        <header className="w-full flex items-center justify-center">
          <h2 className="capitalize text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl italic relative">
            contacto
          </h2>
        </header>
        <div className="texto max-w-[400px] mx-auto sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] flex flex-col gap-2">
          <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            Para hacer un pedido, consultar precios o sacarte dudas, podes
            escribirme por{" "}
            <a
              href="https://wa.me/5492612539172"
              target="_blank"
              className="relative top-[2px] inline-flex items-center justify-center gap-[2px] px-[2px]"
            >
              <FaWhatsapp className=" text-secondary-color " />
              <span className="capitalize text-secondary-color">whatsapp</span>
            </a>{" "}
            o{" "}
            <a
              href="https://www.instagram.com/tejidos_adrianasm/"
              target="_blank"
              className="relative top-[2px] inline-flex items-center justify-center gap-[2px] px-[2px]"
            >
              <FaInstagram className=" text-secondary-color " />
              <span className="capitalize text-secondary-color">instagram</span>
            </a>
            .
          </p>
          <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            Estoy feliz de ayudarte a crear algo hermoso y único ✨
          </p>
          <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            ¡Gracias por apoyar lo hecho a mano!
          </p>
        </div>
      </div>
    </section>
  );
}
