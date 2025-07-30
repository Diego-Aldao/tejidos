import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";
import { IoIosClose } from "react-icons/io";
import Copy from "@/components/Copy";
import MobileNavbarButton from "@/components/Buttons/MobileNavbarButton";
import Logo from "@/components/Logo";

interface Props {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ModalNavbarMobile({ modalOpen, setModalOpen }: Props) {
  const handleModalVisibility = () => {
    setModalOpen(false);
    document.body.style.overflow = "";
  };
  return (
    <div
      onClick={handleModalVisibility}
      className={`fixed bottom-0 left-0 w-full h-full z-50 bg-main-black/70 items-end md:hidden flex transition-all ${
        modalOpen ? "visible opacity-100" : "delay-100 invisible opacity-0"
      }`}
    >
      <div
        className={`menu w-full border-2 border-background border-b-0 mx-auto  bg-secondary-color rounded-t-xl relative overflow-hidden transition-[translate,opacity] delay-100 ${
          modalOpen
            ? "translate-y-0 opacity-100"
            : "delay-0 opacity-0 translate-y-10"
        }`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="gigatext absolute bottom-0 left-0 w-full h-full">
          <span className="!font-playfair capitalize text-[200px] tracking-tighter text-white italic opacity-[2%]">
            Nubecita
          </span>
        </div>
        <header className="py-4 px-3 sm:px-4 flex justify-between relative after:w-full after:absolute after:h-[1px] after:bottom-0 after:left-0 after:bg-gradient-to-l after:from-transparent after:to-transparent after:via-background">
          <Logo onClick={handleModalVisibility} />

          <button
            className="btn-cerrar text-white gap-2 border border-background/50 rounded-full py-1 px-3 flex items-center"
            onClick={handleModalVisibility}
          >
            <span className="uppercase text-[10px] font-medium">cerrar</span>
            <IoIosClose />
          </button>
        </header>
        <ul className="relative z-[2] py-10 px-3 flex flex-col gap-4 text-background w-full">
          <MobileNavbarButton
            nombre="nosotros"
            onClick={handleModalVisibility}
          />
          <MobileNavbarButton
            nombre="crochet"
            onClick={handleModalVisibility}
          />
          <MobileNavbarButton
            nombre="dos agujas"
            onClick={handleModalVisibility}
          />
          <MobileNavbarButton
            nombre="contacto"
            onClick={handleModalVisibility}
          />
        </ul>
        <footer>
          <Copy />
        </footer>
      </div>
    </div>
  );
}
