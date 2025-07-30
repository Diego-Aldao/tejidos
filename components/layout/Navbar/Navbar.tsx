"use client";
import React, { useState } from "react";
import NavbarButton from "@/components/Buttons/NavbarButton";
import Logo from "@/components/Logo";
import ModalNavbarMobile from "./ModalNavbarMobile";
import useScroll from "@/hooks/useScroll";
import MobileModalButton from "@/components/Buttons/MobileModalButton";

interface PropsNavDesktop {
  scrollY: number;
}
function NavDesktop({ scrollY }: PropsNavDesktop) {
  return (
    <ul className="nav-desktop hidden md:flex gap-2 items-center justify-center w-full mx-auto">
      <NavbarButton
        nombre="nosotros"
        customStyles={`${scrollY >= 200 && "text-xs lg:text-sm"}`}
      />
      <NavbarButton
        nombre="crochet"
        customStyles={`${scrollY >= 200 && "text-xs lg:text-sm"}`}
      />
      <li className="logo-desktop text-center flex-1 flex items-center justify-center max-w-[120px]">
        <Logo
          customStyles={`w-fit  ${
            scrollY >= 200 ? "h-8 lg:h-10" : "h-10 lg:h-14"
          }`}
        />
      </li>
      <NavbarButton
        nombre="dos agujas"
        customStyles={`${scrollY >= 200 && "text-xs lg:text-sm"}`}
      />
      <NavbarButton
        nombre="contacto"
        customStyles={`${scrollY >= 200 && "text-xs lg:text-sm"}`}
      />
    </ul>
  );
}

interface PropsNavMobile {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
function NavMobile({ setModalOpen }: PropsNavMobile) {
  return (
    <div className="nav-mobile md:hidden flex items-center justify-between w-full">
      <Logo />
      <MobileModalButton setModalOpen={setModalOpen} />
    </div>
  );
}

export default function Navbar() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const scrollY = useScroll();
  return (
    <>
      <header
        className={`h-16 mx-auto flex items-center px-3 sm:px-4 2xl:px-0  left-0 right-0 z-[10] ease-custom  text-background transition-[translate,opacity] after:w-[calc(100%-10px)] after:h-[calc(100%-10px)] after:top-[5px] after:left-[5px] after:border  after:border-background/50 after:bg-transparent after:absolute after:rounded-full after:pointer-events-none ${
          scrollY >= 500
            ? "fixed opacity-100 translate-y-0 bg-secondary-color border-2 border-secondary-background shadow-2xl shadow-black/50 w-[calc(100%-36px)] max-w-[380px]  md:max-w-[75%] xl:max-w-[980px] top-5 md:px-20 h-fit py-2 md:py-3 rounded-full after:hidden md:after:flex"
            : "absolute w-full md:px-8 lg:px-10 top-0 md:h-20 lg:h-24 after:hidden max-w-[1440px] "
        } ${scrollY >= 200 && "opacity-0 -translate-y-4"}`}
      >
        <NavMobile setModalOpen={setModalOpen} />
        <NavDesktop scrollY={scrollY} />
      </header>
      <ModalNavbarMobile modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </>
  );
}
