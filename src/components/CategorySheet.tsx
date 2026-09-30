import React, { useEffect } from "react";
import { X, ChevronRight, Layers } from "lucide-react";
import { MenuCategory } from "../types/menu";

interface CategorySheetProps {
  isOpen: boolean;
  onClose: () => void;
  categories: MenuCategory[];
  activeCategoryId: number;
  onSelectCategory: (categoryId: number) => void;
}

export const CategorySheet: React.FC<CategorySheetProps> = ({
  isOpen,
  onClose,
  categories,
  activeCategoryId,
  onSelectCategory,
}) => {
  // Bloquear scroll de fondo y escuchar tecla Escape
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="category-sheet-title"
      className="fixed inset-0 z-50 flex flex-col justify-end bg-black/80 backdrop-blur-sm animate-fadeIn"
    >
      {/* Clic fuera para cerrar */}
      <div className="flex-1" onClick={onClose} aria-hidden="true" />

      {/* Contenedor del Bottom Sheet en Grafito (#25201A) */}
      <div className="bg-[#25201A] border-t border-[rgba(196,168,130,0.25)] rounded-t-2xl max-h-[85vh] flex flex-col shadow-2xl shadow-black overflow-hidden animate-slideUp">
        {/* Manija táctil superior */}
        <div className="w-12 h-1 bg-[#EACB91]/30 rounded-full mx-auto my-3" />

        {/* Encabezado del modal */}
        <div className="px-5 pb-3 flex items-center justify-between border-b border-[rgba(196,168,130,0.2)]">
          <div className="flex items-center gap-2">
            <Layers size={18} className="text-[#C05028]" />
            <h3 id="category-sheet-title" className="font-serif text-lg font-bold text-white tracking-wide">
              Índice de la Carta
            </h3>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#EACB91] bg-[#C05028] px-2 py-0.5 rounded-[2px]">
              {categories.length} categorías
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-[#FAF3E8]/60 hover:text-[#EACB91] hover:bg-white/5 transition-colors"
            aria-label="Cerrar índice"
          >
            <X size={20} />
          </button>
        </div>

        {/* Lista scrolleable de categorías */}
        <div className="overflow-y-auto p-4 space-y-1.5">
          {categories.map((cat, idx) => {
            const isActive = activeCategoryId === cat.id;

            return (
              <button
                type="button"
                key={cat.id}
                onClick={() => {
                  onSelectCategory(cat.id);
                  onClose();
                }}
                className={`w-full flex items-center justify-between p-3 rounded-[3px] text-left transition-all duration-200 border ${
                  isActive
                    ? "bg-[#C05028]/25 border-[#C05028] text-white font-bold shadow-sm shadow-[#C05028]/20"
                    : "bg-[#1A1510] border-[rgba(196,168,130,0.18)] hover:border-[rgba(234,203,145,0.4)] text-[#FAF3E8]/80 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-[12px] font-serif font-bold text-[#EACB91] w-6">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="text-sm font-medium leading-tight">
                      {cat.name}
                    </div>
                    {cat.description && (
                      <div className="text-[11px] text-[#C4A882] line-clamp-1 mt-0.5 font-light italic">
                        {cat.description}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#EACB91] font-mono bg-[#25201A] px-2 py-0.5 rounded-[2px] border border-[rgba(196,168,130,0.2)]">
                    {cat.itemsCount}
                  </span>
                  <ChevronRight size={14} className="text-[#C4A882]" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Pie del modal en #1A1510 */}
        <div className="p-3 bg-[#1A1510] border-t border-[rgba(196,168,130,0.2)] text-center">
          <button
            type="button"
            onClick={onClose}
            className="w-full py-2.5 rounded-[3px] bg-[#C05028] hover:bg-[#8B3318] text-white font-bold text-xs uppercase tracking-[0.14em] shadow-md shadow-[#C05028]/20 transition-colors"
          >
            Volver a la carta
          </button>
        </div>
      </div>
    </div>
  );
};
