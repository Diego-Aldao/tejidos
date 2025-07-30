import React from "react";

export default function Copy() {
  return (
    <div className="text-background w-full relative after:w-full after:absolute after:top-0 after:left-0 after:h-[1px] after:bg-gradient-to-l after:from-transparent after:to-transparent after:via-background flex items-center justify-center py-2">
      <span className="capitalize text-xs">&copy; nubecita 2025</span>
    </div>
  );
}
