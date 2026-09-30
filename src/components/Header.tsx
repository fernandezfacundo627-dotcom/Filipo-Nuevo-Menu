import React from "react";
import { Search } from "lucide-react";
import logoImg from "../assets/logo.png";

interface HeaderProps {
  onToggleSearch: () => void;
  isSearchOpen: boolean;
  totalItems: number;
}

export const Header: React.FC<HeaderProps> = ({
  onToggleSearch,
  isSearchOpen,
  totalItems,
}) => {
  return (
    <header className="relative bg-[#1A1510]/95 backdrop-blur-md border-b border-[rgba(196,168,130,0.2)] sticky top-0 z-30 transition-all duration-300 shadow-md shadow-black/60">
      <div className="px-4 py-3 flex items-center justify-between gap-3">
        {/* Logo de Filipo e indicador de MENÚ */}
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full bg-[#25201A] border border-[rgba(234,203,145,0.4)] p-1 flex items-center justify-center shadow-md shadow-black/80 shrink-0">
            <img
              src={logoImg}
              alt="Filipo Café Resto Bar Logo"
              width={36}
              height={36}
              decoding="async"
              className="w-full h-full object-contain"
              onError={(e) => {
                (e.target as HTMLElement).style.display = "none";
              }}
            />
            <span className="font-serif font-bold text-[#EACB91] text-base select-none hidden group-has-[img[style*='display: none']]:inline">
              F
            </span>
          </div>

          <div>
            <div className="flex items-center gap-2.5">
              <h1 className="font-serif text-xl sm:text-2xl font-bold tracking-[0.14em] text-white leading-none">
                FILIPO
              </h1>
              <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#EACB91] bg-[#C05028] px-2 py-0.5 rounded-[2px] shadow-sm">
                CARTA 2026
              </span>
            </div>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6A8635] shrink-0" />
              <span className="text-[10px] font-medium tracking-wider text-[#EACB91]/90 uppercase">
                Carta abierta todo el día
              </span>
            </div>
          </div>
        </div>

        {/* Lupa para buscar */}
        <button
          onClick={onToggleSearch}
          aria-expanded={isSearchOpen}
          aria-label={isSearchOpen ? "Cerrar buscador" : "Buscar platos en el menú"}
          className={`relative p-2.5 rounded-[4px] border transition-all duration-200 flex items-center justify-center ${
            isSearchOpen
              ? "bg-[#C05028] text-white border-[#C05028] shadow-md shadow-[#C05028]/30"
              : "bg-[#25201A] text-[#EACB91] border-[rgba(196,168,130,0.25)] hover:border-[#EACB91] hover:text-white"
          }`}
        >
          <Search size={17} />
          {totalItems > 0 && !isSearchOpen && (
            <span className="absolute -top-1 -right-1 bg-[#C05028] text-[#EACB91] font-bold text-[9px] w-4 h-4 rounded-full flex items-center justify-center shadow">
              {totalItems > 99 ? "300+" : totalItems}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};
