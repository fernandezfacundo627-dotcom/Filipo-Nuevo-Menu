import React, { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import { MenuCategory } from "../types/menu";

interface CategoryNavProps {
  categories: MenuCategory[];
  activeCategoryId: number;
  onSelectCategory: (categoryId: number) => void;
  onOpenIndex?: () => void;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({
  categories,
  activeCategoryId,
  onSelectCategory,
  onOpenIndex,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeBtnRef = useRef<HTMLButtonElement>(null);

  const currentIndex = categories.findIndex((c) => c.id === activeCategoryId);
  const safeIndex = currentIndex >= 0 ? currentIndex : 0;

  // Centrar automáticamente la categoría seleccionada en la barra
  useEffect(() => {
    if (activeBtnRef.current && scrollRef.current) {
      const container = scrollRef.current;
      const button = activeBtnRef.current;
      const containerRect = container.getBoundingClientRect();
      const buttonRect = button.getBoundingClientRect();

      const offsetLeft = buttonRect.left - containerRect.left + container.scrollLeft;
      const targetScroll = offsetLeft - containerRect.width / 2 + buttonRect.width / 2;

      container.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  }, [activeCategoryId]);

  // Navegación por flechas laterales
  const handlePrev = () => {
    if (safeIndex > 0) {
      onSelectCategory(categories[safeIndex - 1].id);
    } else if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -120, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (safeIndex < categories.length - 1) {
      onSelectCategory(categories[safeIndex + 1].id);
    } else if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 120, behavior: "smooth" });
    }
  };

  return (
    <nav
      aria-label="Navegación de categorías del menú"
      className="sticky top-[57px] z-20 bg-[#1A1510]/95 backdrop-blur-md border-b border-[rgba(196,168,130,0.2)] shadow-lg shadow-black/50"
    >
      <div className="flex items-center px-1">
        {/* Flecha Lateral Izquierda */}
        <button
          type="button"
          onClick={handlePrev}
          disabled={safeIndex === 0}
          aria-label="Categoría anterior"
          className={`p-2 rounded-[2px] transition-all shrink-0 flex items-center justify-center ${
            safeIndex === 0
              ? "text-white/15 cursor-not-allowed"
              : "text-[#EACB91] hover:text-white hover:bg-[#25201A] active:scale-95"
          }`}
        >
          <ChevronLeft size={18} />
        </button>

        {/* Carrusel de categorías scrolleable con el dedo */}
        <div
          ref={scrollRef}
          className="flex items-center gap-1.5 px-1 py-2.5 overflow-x-auto no-scrollbar scroll-smooth flex-1"
        >
          {/* Botón rápido de Índice completo en la barra */}
          {onOpenIndex && (
            <button
              type="button"
              onClick={onOpenIndex}
              aria-label="Abrir índice completo de la carta"
              className="relative px-3 py-1.5 rounded-[2px] text-[11px] uppercase tracking-[0.12em] font-bold whitespace-nowrap transition-all duration-200 shrink-0 border bg-[#2B2117] text-[#EACB91] hover:text-white hover:bg-[#C05028] border-[#C05028]/70 hover:border-[#C05028] flex items-center gap-1.5 shadow-sm active:scale-95"
            >
              <BookOpen size={13} className="text-[#C05028] group-hover:text-white" />
              <span>Índice</span>
            </button>
          )}

          {categories.map((cat) => {
            const isActive = activeCategoryId === cat.id;

            return (
              <button
                type="button"
                key={cat.id}
                ref={isActive ? activeBtnRef : null}
                onClick={() => onSelectCategory(cat.id)}
                aria-current={isActive ? "page" : undefined}
                className={`relative px-3 py-1.5 rounded-[2px] text-[11px] uppercase tracking-[0.1em] font-medium whitespace-nowrap transition-all duration-200 shrink-0 border ${
                  isActive
                    ? "bg-[#C05028] text-white font-bold border-[#C05028] shadow-md shadow-[#C05028]/30 scale-100"
                    : "text-[#C4A882] hover:text-white bg-[#25201A] hover:bg-[#2F2A24] border-[rgba(196,168,130,0.18)]"
                }`}
              >
                <span>{cat.name}</span>
                <span
                  className={`ml-1 text-[10px] ${
                    isActive ? "text-[#EACB91] font-bold" : "text-[#C4A882]/50"
                  }`}
                >
                  ({cat.itemsCount})
                </span>
                {isActive && (
                  <span className="absolute -bottom-1 left-2 right-2 h-[2px] bg-[#EACB91] rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Flecha Lateral Derecha */}
        <button
          type="button"
          onClick={handleNext}
          disabled={safeIndex === categories.length - 1}
          aria-label="Categoría siguiente"
          className={`p-2 rounded-[2px] transition-all shrink-0 flex items-center justify-center ${
            safeIndex === categories.length - 1
              ? "text-white/15 cursor-not-allowed"
              : "text-[#EACB91] hover:text-white hover:bg-[#25201A] active:scale-95"
          }`}
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </nav>
  );
};
