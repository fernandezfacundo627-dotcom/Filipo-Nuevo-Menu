import React, { useState } from "react";
import { Plus, Image as ImageIcon } from "lucide-react";
import { MenuItem } from "../types/menu";
import { formatPrice } from "../utils/format";
import { resolveAssetUrl } from "../utils/asset";

interface DishCardProps {
  dish: MenuItem;
  onSelectDish: (dish: MenuItem) => void;
}

export const DishCard: React.FC<DishCardProps> = ({ dish, onSelectDish }) => {
  // Cargar la foto asignada o el fallback por ID estático ./platos/[id].jpg
  const candidateImage = resolveAssetUrl(
    dish.image || (!dish.id.startsWith("dish-") ? `./platos/${dish.id}.jpg` : undefined)
  );
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Si tiene imagen asignada explícitamente o candidato automático válido
  const hasImage = !imageError && Boolean(candidateImage);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelectDish(dish);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onSelectDish(dish)}
      onKeyDown={handleKeyDown}
      aria-label={`Ver detalle de ${dish.name}, precio ${formatPrice(dish.price)}`}
      className="group relative bg-[#25201A] hover:bg-[#2C241D] active:scale-[0.99] border border-[rgba(196,168,130,0.18)] hover:border-[#C05028]/50 rounded-[3px] p-3.5 transition-all duration-200 cursor-pointer shadow-md shadow-black/50 hover:shadow-lg hover:shadow-black/70 overflow-hidden flex flex-col justify-between gap-2.5 focus:outline-none focus:ring-1 focus:ring-[#C05028]"
    >
      <div className="flex items-start justify-between gap-3">
        {/* Información del plato */}
        <div className="flex-1 min-w-0">
          {/* Etiquetas / Badges */}
          {dish.tags && dish.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-1.5">
              {dish.tags.map((tag) => {
                const isOlive = tag === "Para compartir" || tag === "Vegetariano";
                const isPromo = tag === "Promo";
                const isGluten = tag === "Sin Gluten Agregado" || tag === "Sin TACC";

                return (
                  <span
                    key={tag}
                    className={`text-[9px] font-bold uppercase tracking-[0.14em] px-2 py-0.5 rounded-[2px] border ${
                      isOlive
                        ? "bg-[#6A8635] text-white border-[#6A8635]"
                        : isPromo
                        ? "bg-[#8B3318] text-white border-[#8B3318]"
                        : isGluten
                        ? "bg-[#3D2E1E] text-[#EACB91] border-[#C4A882]/40"
                        : "bg-[#C05028] text-[#EACB91] border-[#C05028]"
                    }`}
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
          )}

          {/* Nombre del plato */}
          <h4 className="font-serif text-[16px] sm:text-[17px] font-bold text-white group-hover:text-[#EACB91] transition-colors leading-snug">
            {dish.name}
          </h4>

          {/* Descripción / Ingredientes */}
          {dish.description && (
            <p className="mt-1 text-[12px] text-[#C4A882] leading-relaxed line-clamp-2 font-light italic">
              {dish.description}
            </p>
          )}
        </div>

        {/* Miniatura de la Foto (si existe) */}
        {hasImage && (
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-[3px] overflow-hidden bg-[#1A1510] border border-[rgba(196,168,130,0.22)] group-hover:border-[#C05028]/40 shrink-0 self-center shadow-inner aspect-square">
            {!imageLoaded && (
              <div className="absolute inset-0 bg-[#1A1510]/80 flex items-center justify-center animate-pulse" aria-hidden="true">
                <ImageIcon size={16} className="text-[#EACB91]/40" />
              </div>
            )}
            <img
              src={candidateImage}
              alt={dish.name}
              width={96}
              height={96}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              onLoad={() => setImageLoaded(true)}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.src.includes("lh3.googleusercontent.com/d/")) {
                  const id = target.src.split("/d/")[1]?.split("=")[0];
                  if (id && !target.src.includes("sz=")) {
                    target.src = `https://drive.google.com/thumbnail?id=${id}&sz=w800`;
                    return;
                  }
                }
                setImageError(true);
              }}
              className={`w-full h-full object-cover img-warm transition-transform duration-300 group-hover:scale-105 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        )}
      </div>

      {/* Barra inferior: Precio y Botón de ver más */}
      <div className="pt-2 border-t border-[rgba(196,168,130,0.18)] flex items-center justify-between">
        <div className="flex items-baseline gap-1.5">
          <span className="font-serif text-lg sm:text-xl font-bold text-[#C05028] tracking-tight">
            {formatPrice(dish.price)}
          </span>
          {dish.category === "Menu Ejecutivo" && (
            <span className="text-[10px] text-[#C4A882]/70 uppercase tracking-wider font-light">
              incluye postre + bebida
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelectDish(dish);
          }}
          aria-label={`Ver detalle de ${dish.name}`}
          className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#EACB91] group-hover:text-white bg-[#1A1510] hover:bg-[#C05028] hover:border-[#C05028] px-2.5 py-1 rounded-[2px] border border-[rgba(196,168,130,0.25)] transition-all"
        >
          <span>Detalle</span>
          <Plus size={11} />
        </button>
      </div>
    </div>
  );
};
