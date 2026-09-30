import React, { useState, useEffect } from "react";
import { BookOpen, ArrowUp } from "lucide-react";

interface FloatingCategoryButtonProps {
  onOpenCategories: () => void;
  categoriesCount: number;
}

export const FloatingCategoryButton: React.FC<FloatingCategoryButtonProps> = ({
  onOpenCategories,
  categoriesCount,
}) => {
  const [showButton, setShowButton] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 250);
      setShowScrollTop(window.scrollY > 650);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!showButton && !showScrollTop) return null;

  return (
    <div className="fixed bottom-5 right-4 z-40 flex items-center gap-2 animate-fadeIn">
      {/* Botón volver arriba */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="p-3 rounded-[3px] bg-[#25201A]/95 text-[#EACB91] border border-[rgba(196,168,130,0.3)] shadow-xl shadow-black/80 hover:bg-[#C05028] hover:text-white hover:border-[#C05028] transition-all duration-300 backdrop-blur-md"
          aria-label="Volver arriba"
        >
          <ArrowUp size={18} />
        </button>
      )}

      {/* Botón flotante selector de categorías */}
      {showButton && (
        <button
          onClick={onOpenCategories}
          className="flex items-center gap-2 px-4 py-2.5 rounded-[3px] bg-[#C05028] hover:bg-[#8B3318] text-white font-bold text-xs uppercase tracking-[0.14em] shadow-2xl shadow-black/90 active:scale-95 transition-all border border-[rgba(234,203,145,0.4)] backdrop-blur-md"
          aria-label="Ver índice completo"
        >
          <BookOpen size={16} className="text-[#EACB91]" />
          <span>Índice ({categoriesCount})</span>
        </button>
      )}
    </div>
  );
};
