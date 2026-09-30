import React from "react";
import { Phone, MapPin, Clock } from "lucide-react";
import { InstagramIcon, WhatsAppIcon, FacebookIcon, PedidosYaIcon } from "./icons";
import { SITE_INFO } from "../data/menu";
import logoImg from "../assets/logo.png";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1510] border-t border-[rgba(196,168,130,0.2)] pt-10 pb-20 px-4 text-center relative overflow-hidden">
      {/* Fondo con puntos dorados suaves */}
      <div className="absolute inset-0 pattern-dots opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-md mx-auto space-y-4">
        {/* Monograma / Logo */}
        <div className="w-14 h-14 rounded-full bg-[#25201A] border border-[rgba(234,203,145,0.35)] mx-auto p-2 flex items-center justify-center shadow-lg shadow-black/80">
          <img
            src={logoImg}
            alt="Filipo Café Resto Bar Logo"
            width={40}
            height={40}
            decoding="async"
            className="w-full h-full object-contain"
            onError={(e) => {
              (e.target as HTMLElement).style.display = "none";
            }}
          />
        </div>

        <div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-[0.14em] text-white">
            FILIPO CAFÉ RESTO BAR
          </h3>
          <p className="font-serif italic text-base text-[#EACB91] mt-0.5">
            El punto de encuentro de Salta
          </p>
          <span className="mt-1.5 inline-block text-[9px] font-bold uppercase tracking-[0.35em] text-[#C4A882]/70">
            Café · Resto · Bar · Tablas
          </span>
        </div>

        {/* Regla terracota estilo Catálogo */}
        <div className="w-12 h-[1px] bg-[#C05028] mx-auto my-2" />

        {/* Datos del local */}
        <div className="space-y-2 text-[11px] uppercase tracking-[0.12em] text-[#C4A882]/80 leading-relaxed font-light">
          <div className="flex items-center justify-center gap-2">
            <MapPin size={13} className="text-[#C05028] shrink-0" />
            <a
              href={SITE_INFO.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#EACB91] transition-colors"
            >
              {SITE_INFO.address}
            </a>
          </div>

          <div className="flex items-center justify-center gap-2">
            <Clock size={13} className="text-[#C05028] shrink-0" />
            <span>{SITE_INFO.schedule}</span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <Phone size={13} className="text-[#C05028] shrink-0" />
            <a
              href={`tel:${SITE_INFO.phoneClean}`}
              className="hover:text-[#EACB91] transition-colors underline"
            >
              {SITE_INFO.phone}
            </a>
          </div>
        </div>

        {/* Botoncitos oficiales al final de la landing page */}
        <div className="pt-2">
          <div className="flex items-center justify-center gap-3.5 sm:gap-4">
            {/* Instagram */}
            <a
              href={SITE_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-11 h-11 items-center justify-center rounded-full border border-white/10 bg-[#25201A] text-[#EACB91]/75 transition-all duration-300 hover:-translate-y-1 hover:border-[#EACB91] hover:text-[#EACB91] hover:shadow-[0_10px_25px_-8px_rgba(192,80,40,0.5)]"
              aria-label="Instagram oficial de Filipo"
              title="Instagram oficial de Filipo"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>

            {/* WhatsApp */}
            <a
              href={SITE_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-11 h-11 items-center justify-center rounded-full border border-white/10 bg-[#25201A] text-[#EACB91]/75 transition-all duration-300 hover:-translate-y-1 hover:border-[#25D366] hover:text-[#25D366] hover:shadow-[0_10px_25px_-8px_rgba(37,211,102,0.4)]"
              aria-label="WhatsApp oficial de Filipo"
              title="WhatsApp oficial de Filipo"
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>

            {/* Facebook */}
            <a
              href={SITE_INFO.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-11 h-11 items-center justify-center rounded-full border border-white/10 bg-[#25201A] text-[#EACB91]/75 transition-all duration-300 hover:-translate-y-1 hover:border-[#1877F2] hover:text-[#1877F2] hover:shadow-[0_10px_25px_-8px_rgba(24,119,242,0.4)]"
              aria-label="Facebook oficial de Filipo"
              title="Facebook oficial de Filipo"
            >
              <FacebookIcon className="w-5 h-5" />
            </a>

            {/* PedidosYa con logo oficial */}
            <a
              href={SITE_INFO.pedidosYaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-11 h-11 items-center justify-center rounded-full border border-white/10 bg-[#25201A] text-[#EACB91]/75 transition-all duration-300 hover:-translate-y-1 hover:border-[#FA0050] hover:text-[#FA0050] hover:shadow-[0_10px_25px_-8px_rgba(250,0,80,0.5)]"
              aria-label="Filipo en PedidosYa"
              title="Filipo en PedidosYa"
            >
              <PedidosYaIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="pt-3 text-[10px] uppercase tracking-[0.14em] text-[#C4A882]/40 leading-relaxed border-t border-[rgba(196,168,130,0.1)]">
          <p>Carta digital oficial para salón · Precios en Pesos Argentinos con IVA incluido.</p>
          <p className="mt-1">© {new Date().getFullYear()} Filipo Café Resto Bar · Salta, Argentina.</p>
        </div>
      </div>
    </footer>
  );
};
