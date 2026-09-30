import React from "react";

export const MenuSkeleton: React.FC = () => {
  return (
    <div className="space-y-4 animate-pulse pt-1" aria-busy="true" aria-label="Cargando menú...">
      {/* Skeleton del botón de índice */}
      <div className="h-14 w-full bg-[#25201A] border border-[rgba(196,168,130,0.18)] rounded-[4px]" />

      {/* Skeleton del indicador de sección */}
      <div className="flex items-center justify-between px-1 py-1 border-b border-[rgba(196,168,130,0.18)]">
        <div className="h-4 w-28 bg-[#25201A] rounded-[2px]" />
        <div className="h-4 w-20 bg-[#25201A] rounded-[2px]" />
      </div>

      {/* Skeletons de las tarjetas de platos */}
      <div className="grid grid-cols-1 gap-2.5 pt-1">
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className="bg-[#25201A] border border-[rgba(196,168,130,0.18)] rounded-[3px] p-3.5 space-y-3"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 space-y-2">
                <div className="h-3 w-16 bg-[#C05028]/20 rounded-[2px]" />
                <div className="h-4 w-3/4 bg-[#1A1510] rounded-[2px]" />
                <div className="h-3 w-full bg-[#1A1510]/70 rounded-[2px]" />
                <div className="h-3 w-2/3 bg-[#1A1510]/50 rounded-[2px]" />
              </div>
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-[3px] bg-[#1A1510] shrink-0 border border-[rgba(196,168,130,0.15)]" />
            </div>
            <div className="pt-2 border-t border-[rgba(196,168,130,0.18)] flex items-center justify-between">
              <div className="h-5 w-20 bg-[#C05028]/30 rounded-[2px]" />
              <div className="h-6 w-16 bg-[#1A1510] rounded-[2px] border border-[rgba(196,168,130,0.2)]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
