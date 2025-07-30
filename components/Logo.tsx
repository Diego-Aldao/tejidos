import Image from "next/image";
import React from "react";
import imageLogo from "@/assets/logo.png";

interface Props {
  customStyles?: string;
  onClick?: () => void;
}

export default function Logo({ customStyles, onClick }: Props) {
  return (
    <a
      onClick={onClick}
      href="#inicio"
      className={`${customStyles ?? "w-fit h-8"}`}
    >
      <Image
        src={imageLogo}
        width={0}
        height={0}
        sizes="100vw"
        alt=""
        className="!object-contain pointer-events-none"
      />
    </a>
  );
}
