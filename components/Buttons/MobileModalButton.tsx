import React from "react";

interface Props {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileModalButton({ setModalOpen }: Props) {
  const handleModalVisibility = () => {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <button
      onClick={handleModalVisibility}
      className="boton-menu gap-2 border border-background/50 rounded-full py-1 px-3 flex items-center"
    >
      <span className="uppercase text-[10px] font-medium">menu</span>
      <div className="deco flex flex-row gap-[2px]">
        <span className="w-[3px] h-[3px] bg-background inline-block rounded-full"></span>
        <span className="w-[3px] h-[3px] bg-background inline-block rounded-full"></span>
        <span className="w-[3px] h-[3px] bg-background inline-block rounded-full"></span>
      </div>
    </button>
  );
}
