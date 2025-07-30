import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Copy from "../Copy";

interface PropsFooterNavItem {
  nombre: string;
}
function FooterNavItem({ nombre }: PropsFooterNavItem) {
  return (
    <li className="py-1 pl-1 flex">
      <a
        href={`#${nombre}`}
        className="capitalize text-sm lg:text-base opacity-80 ease-custom hover:opacity-100 transition-opacity"
      >
        {nombre}
      </a>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="w-full  bg-secondary-color border-4 border-t-0  border-background rounded-xl text-white relative after:absolute after:w-[calc(100%-10px)] after:h-[calc(100%-10px)]  after:top-[5px] after:left-[5px] after:bg-transparent after:rounded-xl md:after:border xl:after:border-2 after:border-background after:pointer-events-none">
      <div className="contenido px-3 sm:px-6 md:px-8 lg:px-10 2xl:px-0 max-w-[1440px] mx-auto py-10 pb-20 flex flex-wrap">
        <header className="w-full sm:w-fit sm:flex-1">
          <a href="#inicio" className="texto w-fit flex flex-col">
            <span className="!font-playfair capitalize italic text-3xl lg:text-5xl xl:text-6xl">
              nubecita
            </span>
            <span className="text-[10px] capitalize self-end pr-1 lg:text-xs xl:text-sm">
              tejidos artesanales
            </span>
          </a>
        </header>
        <ul className="navegacion flex flex-col gap-1 mt-4 md:mt-0 flex-1">
          <FooterNavItem nombre="nosotros" />
          <FooterNavItem nombre="crochet" />
          <FooterNavItem nombre="dos agujas" />
          <FooterNavItem nombre="contacto" />
        </ul>
        <ul className="contacto flex flex-1 flex-col  gap-1 mt-4 md:mt-0">
          <li className="">
            <a
              className="p-1 flex gap-1 items-center capitalize opacity-80 hover:opacity-100 transition-opacity"
              href="https://wa.me/5492617141474"
            >
              <FaWhatsapp className="lg:w-5 lg:h-5 text-background" />
              <span className="text-sm lg:text-base">whatsapp</span>
            </a>
          </li>
          <li className="">
            <a
              className="p-1 flex gap-1 items-center capitalize opacity-80 hover:opacity-100 transition-opacity"
              href="https://www.instagram.com/tejidos_adrianasm/"
              target="_blank"
            >
              <FaInstagram className="lg:w-5 lg:h-5 text-background" />
              <span className="text-sm lg:text-base">instagram</span>
            </a>
          </li>
        </ul>
      </div>
      <Copy />
    </footer>
  );
}
