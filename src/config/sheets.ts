// Configuración de la conexión con Google Sheets
// Reemplazá este enlace por la URL pública CSV de tu planilla de Google Sheets.
// También podés definirla en un archivo .env como VITE_GOOGLE_SHEET_URL

export const GOOGLE_SHEET_CSV_URL: string =
  import.meta.env.VITE_GOOGLE_SHEET_URL ||
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRiYsAztsXSCjuv72b9JAdXwfuFhS_134W5befLRs8dLH0vLZWyS5jHPhjTFHefgOEZzNNLdt0Ud5ja/pub?output=csv";

