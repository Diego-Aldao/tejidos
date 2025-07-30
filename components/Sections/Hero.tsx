import Image from "next/image";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import imagenHero from "@/assets/hero1.png";
import MainButton from "../Buttons/MainButton";

export default function Hero() {
  return (
    <section className="hero w-full min-h-[480px] border-4 border-background rounded-xl h-[480px] sm:h-[540px] md:h-[590px] lg:h-[690px] xl:h-[790px] bg-secondary-color relative flex  overflow-hidden text-background after:absolute after:w-[calc(100%-10px)] after:h-[calc(100%-10px)]  after:top-[5px] after:left-[5px] after:bg-transparent after:rounded-xl md:after:border xl:after:border-2 after:border-background">
      <span className="texto-gigante text-[250px] italic opacity-[4%] tracking-tighter md:text-[300px] md:-bottom-16 lg:text-[400px] lg:-bottom-20 xl:text-[500px] xl:-bottom-32 2xl:text-[700px] 2xl:-bottom-48 absolute -bottom-12 -left-20 capitalize !font-playfair">
        nubecita
      </span>
      <div className="contenido px-3 w-full pt-20 md:pt-24 lg:pt-28 sm:px-4 md:px-8 lg:px-10 2xl:px-0 relative max-w-[1440px] mx-auto ">
        <div className="texto flex flex-col w-fit relative z-[10]">
          <h1 className="font-playfair capitalize   italic text-[clamp(3rem,13vw,12rem)]  pl-1 sm:pl-2 xl:pl-3">
            nubecita
          </h1>
          <span className="capitalize text-xs sm:text-lg  italic relative -top-3 sm:-top-6 md:text-xl lg:-top-10 xl:-top-12 self-end pr-2">
            tejidos artesanales
          </span>
          <div className="botones flex items-center w-fit self-end gap-2 lg:gap-4">
            <MainButton nombre="whatsapp" link="https://wa.me/5492612539172">
              <FaWhatsapp className="h-3 w-3 md:h-4 md:w-4 lg:w-5 lg:h-5" />
            </MainButton>
            <MainButton
              nombre="instagram"
              link="https://www.instagram.com/tejidos_adrianasm/"
            >
              <FaInstagram className="h-3 w-3 md:h-4 md:w-4 lg:w-5 lg:h-5" />
            </MainButton>
          </div>
        </div>
        <div className="imagen pointer-events-none select-none w-fit h-[350px] scale-x-[-1] flex justify-center absolute -right-[150px] bottom-0 after:absolute after:inset-0 after:bg-gradient-to-t after:from-secondary-color/50 after:to-transparent after:via-transparent sm:h-[450px] md:h-[500px] lg:h-[600px] xl:h-[700px] before:absolute before:w-[100px] before:h-[150px] before:top-0 before:bg-gradient-to-b before:from-secondary-color before:to-transparent before:via-secondary-color/20 before:via-5% before:to-10% before:z-[2]">
          <Image
            src={imagenHero}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="[filter:drop-shadow(-100px_64px_60px_#000000a2)] pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
}
