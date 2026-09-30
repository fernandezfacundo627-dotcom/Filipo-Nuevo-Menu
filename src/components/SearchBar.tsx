import React, { useRef, useEffect } from "react";
import { Search, X, Sparkles } from "lucide-react";

interface SearchBarProps {
  query: string;
  onQueryChange: (query: string) => void;
  resultCount: number;
  totalCount: number;
  isOpen: boolean;
  onClose?: () => void;
}

const POPULAR_SUGGESTIONS = [
  "Lomo",
  "Café",
  "Tabla",
  "Hamburguesa",
  "Sin Gluten Agregado",
  "Promo",
  "Gin",
  "Pasta",
];

export const SearchBar: React.FC<SearchBarProps> = ({
  query,
  onQueryChange,
  resultCount,
  totalCount,
  isOpen,
  onClose,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      if (query) {
        onQueryChange("");
      } else if (onClose) {
        onClose();
      }
    }
  };

  const handleClear = () => {
    onQueryChange("");
    inputRef.current?.focus();
  };

  if (!isOpen && !query) return null;

  return (
    <div
      role="search"
      aria-label="Búsqueda de platos en la carta"
      className="bg-[#1A1510]/95 border-b border-[rgba(196,168,130,0.2)] p-4 shadow-xl shadow-black/70 animate-fadeIn"
    >
      {/* Campo de búsqueda */}
      <div className="relative flex items-center">
        <div className="absolute left-3.5 text-[#EACB91] pointer-events-none" aria-hidden="true">
          <Search size={16} />
        </div>
        <input
          ref={inputRef}
          type="search"
          name="q"
          id="search-menu-input"
          value={query}
          maxLength={80}
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
          onChange={(e) => onQueryChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Buscar plato, café, vino o ingrediente..."
          aria-label="Buscar plato, café, vino o ingrediente"
          className="w-full bg-[#25201A] text-[#FAF3E8] placeholder-[#C4A882]/50 text-sm rounded-[3px] pl-10 pr-10 py-2.5 border border-[rgba(196,168,130,0.25)] focus:outline-none focus:border-[#C05028] focus:ring-1 focus:ring-[#C05028]/40 transition-all shadow-inner"
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 p-1 rounded-full text-[#FAF3E8]/50 hover:text-[#EACB91] hover:bg-white/5 transition-colors focus:outline-none focus:ring-1 focus:ring-[#C05028]"
            aria-label="Borrar texto de búsqueda"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Sugerencias de búsqueda rápida */}
      {!query && (
        <div className="mt-3">
          <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] font-bold text-[#EACB91] mb-2">
            <Sparkles size={11} className="text-[#C05028]" />
            <span>Búsquedas sugeridas:</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {POPULAR_SUGGESTIONS.map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => onQueryChange(term)}
                className="text-[11px] px-2.5 py-1 rounded-[2px] bg-[#25201A] border border-[rgba(196,168,130,0.2)] text-[#FAF3E8]/80 hover:text-white hover:border-[#C05028] transition-colors focus:outline-none focus:ring-1 focus:ring-[#C05028]"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Contador de resultados */}
      {query && (
        <div className="mt-2.5 flex items-center justify-between text-[11px] text-[#C4A882] px-1">
          <span>
            {resultCount === 0
              ? "No se encontraron platos para tu búsqueda"
              : `Mostrando ${resultCount} de ${totalCount} opciones`}
          </span>
          {resultCount === 0 && (
            <button
              type="button"
              onClick={handleClear}
              className="text-[#EACB91] underline hover:text-white focus:outline-none"
            >
              Ver toda la carta
            </button>
          )}
        </div>
      )}
    </div>
  );
};
