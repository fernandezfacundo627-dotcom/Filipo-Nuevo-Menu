import React, { useState, useEffect } from "react";
import { X, Sparkles, Share2, Check, MessageCircle } from "lucide-react";
import { MenuItem } from "../types/menu";
import { formatPrice, buildWhatsAppDishUrl } from "../utils/format";
import { resolveAssetUrl } from "../utils/asset";

interface DishDetailModalProps {
  dish: MenuItem | null;
  onClose: () => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({
  dish,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false);
    if (dish) {
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
    } else {
      document.body.style.overflow = "";
    }
  }, [dish, onClose]);

  if (!dish) return null;

  const candidateImage = resolveAssetUrl(
    dish.image || (!dish.id.startsWith("dish-") ? `./platos/${dish.id}.jpg` : undefined)
  );
  const hasImage = !imageError && Boolean(candidateImage);

  const handleShare = async () => {
    const text = `${dish.name} - ${formatPrice(dish.price)} en Filipo Café Resto Bar`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: dish.name,
          text: text,
          url: window.location.href,
        });
      } catch {
        navigator.clipboard.writeText(`${text}\n${window.location.href}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } else {
      navigator.clipboard.writeText(`${text}\n${window.location.href}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const whatsappUrl = buildWhatsAppDishUrl(dish.name, dish.price);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="dish-modal-name"
      className="fixed inset-0 z-50 flex flex-col justify-end sm:justify-center items-center bg-black/85 backdrop-blur-md p-0 sm:p-4 animate-fadeIn"
    >
      {/* Fondo clicable para cerrar */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Contenedor del modal en Grafito (#25201A) */}
      <div className="relative w-full max-w-lg bg-[#25201A] border border-[rgba(196,168,130,0.25)] rounded-t-2xl sm:rounded-2xl shadow-2xl shadow-black overflow-hidden flex flex-col max-h-[90vh] z-10 animate-slideUp">
        {/* Botón cerrar flotante */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#1A1510]/85 text-[#FAF3E8]/80 hover:text-[#EACB91] border border-[rgba(196,168,130,0.3)] hover:border-[#EACB91] backdrop-blur-md transition-colors shadow-md"
          aria-label="Cerrar detalle del plato"
        >
          <X size={18} />
        </button>

        {/* Imagen del plato en alta resolución (si existe) */}
        {hasImage ? (
          <div className="relative w-full h-60 sm:h-72 bg-[#1A1510] overflow-hidden shrink-0 border-b border-[rgba(196,168,130,0.2)]">
            <img
              src={candidateImage}
              alt={dish.name}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.src.includes("lh3.googleusercontent.com/d/")) {
                  const id = target.src.split("/d/")[1]?.split("=")[0];
                  if (id && !target.src.includes("sz=")) {
                    target.src = `https://drive.google.com/thumbnail?id=${id}&sz=w1200`;
                    return;
                  }
                }
                setImageError(true);
              }}
              className="w-full h-full object-cover img-warm"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#25201A] via-transparent to-black/40" />
            <div className="absolute bottom-3 left-4">
              <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#EACB91] bg-[#C05028] px-2.5 py-1 rounded-[2px] shadow-sm">
                {dish.category}
              </span>
            </div>
          </div>
        ) : (
          <div className="pt-6 px-6 pb-2 border-b border-[rgba(196,168,130,0.2)] bg-gradient-to-b from-[#1A1510] to-[#25201A]">
            <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#EACB91] px-2.5 py-1 rounded-[2px] bg-[#C05028]">
              {dish.category}
            </span>
          </div>
        )}

        {/* Contenido scrolleable */}
        <div className="p-6 overflow-y-auto space-y-4">
          {/* Etiquetas */}
          {dish.tags && dish.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {dish.tags.map((tag) => {
                const isOlive = tag === "Para compartir" || tag === "Vegetariano";
                const isGluten = tag === "Sin Gluten Agregado" || tag === "Sin TACC";
                const isPromo = tag === "Promo";

                return (
                  <span
                    key={tag}
                    className={`text-[10px] font-bold uppercase tracking-[0.15em] px-2.5 py-0.5 rounded-[2px] border flex items-center gap-1 ${
                      isOlive
                        ? "bg-[#6A8635] text-white border-[#6A8635]"
                        : isPromo
                        ? "bg-[#8B3318] text-white border-[#8B3318]"
                        : isGluten
                        ? "bg-[#3D2E1E] text-[#EACB91] border-[#C4A882]/40"
                        : "bg-[#C05028] text-[#EACB91] border-[#C05028]"
                    }`}
                  >
                    <Sparkles size={10} />
                    <span>{tag}</span>
                  </span>
                );
              })}
            </div>
          )}

          {/* Título */}
          <h2 id="dish-modal-name" className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
            {dish.name}
          </h2>

          {/* Precio en Terracota (#C05028) */}
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-3xl sm:text-4xl font-bold text-[#C05028]">
              {formatPrice(dish.price)}
            </span>
            <span className="text-xs text-[#C4A882] tracking-wider uppercase font-light">
              pesos argentinos
            </span>
          </div>

          <div className="hairline my-2" />

          {/* Descripción / Ingredientes estilo Catálogo */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.24em] text-[#C05028] font-bold mb-2">
              Detalle e Ingredientes
            </h4>
            {dish.description ? (
              <div className="space-y-2">
                <p className="text-sm text-[#FAF3E8]/90 leading-relaxed font-light italic">
                  {dish.description}
                </p>
                {/* Ingredientes destacados */}
                <div className="pt-2 space-y-1.5 border-t border-[rgba(196,168,130,0.18)]">
                  {dish.description
                    .split(/\. |\n/)
                    .filter((s) => s.trim().length > 10)
                    .slice(0, 3)
                    .map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 py-1 text-xs text-[#C4A882]">
                        <div className="w-3.5 h-3.5 rounded-full bg-[#C05028] flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={9} className="text-white" />
                        </div>
                        <span className="font-light italic leading-snug">{point.trim()}</span>
                      </div>
                    ))}
                </div>
              </div>
            ) : (
              <p className="text-sm text-[#C4A882] italic font-light">
                Elaboración artesanal fresca en nuestra cocina con ingredientes seleccionados de primera calidad.
              </p>
            )}
          </div>

          {/* Nota especial para Menú Ejecutivo o Tablas */}
          {dish.category === "Menu Ejecutivo" && (
            <div className="p-3 rounded-[3px] bg-[#1A1510] border border-[#C05028]/40 text-xs text-[#EACB91] leading-relaxed">
              ⭐ <strong>Menú Ejecutivo incluye:</strong> Plato principal a elección + bebida + postre artesanal o café.
            </div>
          )}

          {dish.category === "Tablas" && (
            <div className="p-3 rounded-[3px] bg-[#1A1510] border border-[#C05028]/40 text-xs text-[#EACB91] leading-relaxed">
              ⭐ <strong>Porción abundante:</strong> Comen 2 personas, pican 4. Ideal para compartir en la mesa.
            </div>
          )}
        </div>

        {/* Barra inferior de acciones en #1A1510 */}
        <div className="p-4 bg-[#1A1510] border-t border-[rgba(196,168,130,0.2)] flex items-center gap-2.5">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-3 px-4 rounded-[3px] bg-[#C05028] hover:bg-[#8B3318] text-white font-bold text-xs uppercase tracking-[0.14em] shadow-lg shadow-[#C05028]/25 active:scale-[0.98] transition-all text-center"
          >
            Volver a la carta
          </button>

          {/* Botón WhatsApp Consulta directa */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-[3px] bg-[#25201A] border border-[rgba(196,168,130,0.25)] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all flex items-center justify-center shadow-sm"
            title="Consultar por WhatsApp"
            aria-label="Consultar sobre este plato por WhatsApp"
          >
            <MessageCircle size={18} />
          </a>

          {/* Botón Compartir plato */}
          <button
            type="button"
            onClick={handleShare}
            className="p-3 rounded-[3px] bg-[#25201A] border border-[rgba(196,168,130,0.25)] text-[#EACB91] hover:bg-[#C05028] hover:text-white transition-all"
            title="Compartir plato"
            aria-label="Compartir este plato"
          >
            {copied ? <Check size={18} className="text-[#25D366]" /> : <Share2 size={18} />}
          </button>
        </div>
      </div>
    </div>
  );
};
