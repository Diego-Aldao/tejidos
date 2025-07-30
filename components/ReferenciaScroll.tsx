import React from "react";

interface Props {
  id: string;
}

export default function ReferenciaScroll({ id }: Props) {
  return (
    <div
      id={id}
      className="referencia-scroll absolute  -top-24 left-0 invisible pointer-events-none opacity-0"
    ></div>
  );
}
