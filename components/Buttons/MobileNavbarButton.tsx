import React from "react";

interface Props {
  nombre: string;
  onClick: () => void;
}

export default function MobileNavbarButton({ nombre, onClick }: Props) {
  return (
    <li onClick={onClick}>
      <a
        href={`#${nombre}`}
        className="flex text-sm bg-secondary-background/10 rounded-xl py-2 px-1 capitalize"
      >
        {nombre}
      </a>
    </li>
  );
}
