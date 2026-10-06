/**
 * Resuelve y normaliza URLs de recursos (fotos de platos, portadas, logos)
 * para asegurar que se carguen de manera correcta tanto en entornos
 * de servidor web en internet (HTTP/HTTPS) como en local (file://).
 * 
 * Además detecta automáticamente cualquier formato de enlace de Google Drive
 * (compartido, vista previa, ID directo) y lo convierte al endpoint CDN
 * directo de Google para que la imagen cargue al 100% sin bloqueos.
 */
export function resolveAssetUrl(url: string | undefined | null): string | undefined {
  if (!url) return undefined;
  const trimmed = url.trim();
  if (!trimmed) return undefined;

  // Detección y conversión automática de enlaces de Google Drive
  // Extrae el ID de cualquier link (file/d/, open?id=, lh3.googleusercontent.com/d/, etc)
  const driveRegex = /(?:id=|id\/|d\/)([a-zA-Z0-9_-]{25,})/i;
  const driveMatch = trimmed.match(driveRegex);
  
  if (driveMatch && driveMatch[1] && trimmed.includes("google")) {
    const fileId = driveMatch[1];
    // Usamos directamente el endpoint de thumbnail que es mucho más estable
    // y no sufre de los bloqueos de CORS o cookies de lh3.googleusercontent.com
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
  }

  // URLs remotas estándar (Cloudinary, Imgur, servidores web) o Data URIs
  if (
    trimmed.startsWith("http://") ||
    trimmed.startsWith("https://") ||
    trimmed.startsWith("data:") ||
    trimmed.startsWith("blob:")
  ) {
    return trimmed;
  }

  // Si comienza con / (ej: /platos/tablas.jpg -> ./platos/tablas.jpg)
  if (trimmed.startsWith("/")) {
    return `.${trimmed}`;
  }

  // Si es un nombre de archivo local sin ./
  if (!trimmed.startsWith("./")) {
    return `./${trimmed}`;
  }

  return trimmed;
}
