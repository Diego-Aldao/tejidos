import React from "react";
import Image from "next/image";
import separador from "@/assets/separador.png";

export default function SeparadorSections() {
  return (
    <div className="separador opacity-20 sm:opacity-10">
      <Image
        src={separador}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        className="pointer-events-none"
      />
    </div>
  );
}
