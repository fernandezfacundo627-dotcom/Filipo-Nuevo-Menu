export function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(price);
}

export function buildWhatsAppDishUrl(dishName: string, price: number, phoneClean: string = "5493874540704"): string {
  const formattedPrice = formatPrice(price);
  const text = encodeURIComponent(
    `Hola Filipo Café Resto Bar! 👋 Me gustaría consultar sobre:\n🍽️ *${dishName}* (${formattedPrice})\n¿Tienen disponibilidad?`
  );
  return `https://wa.me/${phoneClean}?text=${text}`;
}

