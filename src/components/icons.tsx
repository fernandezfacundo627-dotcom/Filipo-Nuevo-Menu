import React from "react";
import instagramImg from "../assets/icons/instagram.png";
import pedidosyaImg from "../assets/icons/pedidosya.png";
import whatsappImg from "../assets/icons/whatsapp.png";
import facebookImg from "../assets/icons/facebook.png";

export type IconComponent = React.ComponentType<{ className?: string; size?: number }>;

interface IconProps {
  size?: number;
  className?: string;
}

/** Componente genérico para renderizar los logos de apps con máscara y herencia de color (currentColor) */
function AppIcon({ src, size, className = "" }: { src: string; size?: number; className?: string }) {
  const hasExplicitSize = size !== undefined || /\b(size-|w-|h-)/.test(className);
  const sizeClass = hasExplicitSize ? "" : "w-5 h-5";

  return (
    <span
      className={`inline-block shrink-0 ${sizeClass} ${className}`}
      style={{
        maskImage: `url(${src})`,
        WebkitMaskImage: `url(${src})`,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskPosition: "center",
        WebkitMaskPosition: "center",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        backgroundColor: "currentColor",
        ...(size ? { width: `${size}px`, height: `${size}px` } : {}),
      }}
      aria-hidden="true"
    />
  );
}

/** Instagram — Logo oficial */
export function InstagramIcon({ size, className = "" }: IconProps) {
  return <AppIcon src={instagramImg} size={size} className={className} />;
}

/** PedidosYa — Logo oficial ('P' distintiva) */
export function PedidosYaIcon({ size, className = "" }: IconProps) {
  return <AppIcon src={pedidosyaImg} size={size} className={className} />;
}

/** WhatsApp — Logo oficial */
export function WhatsAppIcon({ size, className = "" }: IconProps) {
  return <AppIcon src={whatsappImg} size={size} className={className} />;
}

/** Facebook — Logo oficial */
export function FacebookIcon({ size, className = "" }: IconProps) {
  return <AppIcon src={facebookImg} size={size} className={className} />;
}

export const APP_LOGOS = {
  instagram: instagramImg,
  pedidosya: pedidosyaImg,
  whatsapp: whatsappImg,
  facebook: facebookImg,
};
