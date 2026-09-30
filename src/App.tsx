import React, { useState, useMemo, useRef, useEffect } from "react";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { CategoryNav } from "./components/CategoryNav";
import { CategorySheet } from "./components/CategorySheet";
import { DishCard } from "./components/DishCard";
import { DishDetailModal } from "./components/DishDetailModal";
import { Footer } from "./components/Footer";
import { MenuSkeleton } from "./components/MenuSkeleton";
import { FloatingCategoryButton } from "./components/FloatingCategoryButton";
import { useMenu } from "./hooks/useMenu";
import { MenuItem } from "./types/menu";
import { resolveAssetUrl } from "./utils/asset";
import { Search, Sparkles, ChevronLeft, ChevronRight, BookOpen, AlertCircle, RefreshCw } from "lucide-react";

export function App() {
  const { categories, allItems, isLoading, error, reload } = useMenu();

  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState<number>(0);
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [isCategorySheetOpen, setIsCategorySheetOpen] = useState(false);
  const [isReloading, setIsReloading] = useState(false);

  const handleReload = async () => {
    setIsReloading(true);
    try {
      await reload();
    } finally {
      setIsReloading(false);
    }
  };

  // Categoría actual (Página activa)
  const currentCategoryIndex = useMemo(() => {
    if (!categories || categories.length === 0) return 0;
    const idx = categories.findIndex((c) => c.id === activeCategoryId);
    return idx >= 0 ? idx : 0;
  }, [categories, activeCategoryId]);

  const currentCategory = categories[currentCategoryIndex] || null;
  const prevCategory = currentCategoryIndex > 0 ? categories[currentCategoryIndex - 1] : null;
  const nextCategory =
    currentCategoryIndex < categories.length - 1
      ? categories[currentCategoryIndex + 1]
      : null;

  // Cambiar de página y scrollear suavemente al inicio
  const handleSelectCategory = (categoryId: number) => {
    setActiveCategoryId(categoryId);
    setSearchQuery(""); // Limpiar búsqueda si se navega por categoría
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrevPage = () => {
    if (prevCategory) {
      handleSelectCategory(prevCategory.id);
    }
  };

  const handleNextPage = () => {
    if (nextCategory) {
      handleSelectCategory(nextCategory.id);
    }
  };

  // Resultados de la búsqueda global
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();
    return allItems.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        (item.description && item.description.toLowerCase().includes(q)) ||
        item.category.toLowerCase().includes(q)
    );
  }, [searchQuery, allItems]);

  // Soporte de gestos táctiles (Swipe) para pasar páginas en el celular
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    const diffY = touchStartY.current - e.changedTouches[0].clientY;

    // Solo si el deslizamiento fue principalmente horizontal y mayor a 60px
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 60) {
      if (diffX > 0 && nextCategory) {
        // Swipe hacia la izquierda -> Siguiente página
        handleNextPage();
      } else if (diffX < 0 && prevCategory) {
        // Swipe hacia la derecha -> Página anterior
        handlePrevPage();
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  // Atajos de teclado (flechas izquierda/derecha) para navegar páginas
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (searchQuery || isSearchOpen) return;
      if (e.key === "ArrowRight") handleNextPage();
      if (e.key === "ArrowLeft") handlePrevPage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [searchQuery, isSearchOpen, currentCategoryIndex, nextCategory, prevCategory]);

  return (
    <div
      className="min-h-screen bg-[#1A1510] text-[#FAF3E8] relative selection:bg-[#C05028] selection:text-white"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Grano cinematográfico sutil de fondo */}
      <div className="grain-overlay" />

      {/* Contenedor optimizado para dispositivos móviles */}
      <div className="max-w-md sm:max-w-lg md:max-w-xl mx-auto bg-[#1F1A14] min-h-screen relative shadow-2xl shadow-black border-x border-[rgba(196,168,130,0.18)] flex flex-col justify-between">
        <div>
          {/* 1. Cabecera Minimalista: Solo Logo, CARTA 2026 y Lupa */}
          <Header
            onToggleSearch={() => setIsSearchOpen((prev) => !prev)}
            isSearchOpen={isSearchOpen}
            totalItems={allItems.length}
          />

          {/* Buscador Desplegable */}
          <SearchBar
            query={searchQuery}
            onQueryChange={setSearchQuery}
            resultCount={searchResults.length}
            totalCount={allItems.length}
            isOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
          />

          {/* Cartel Informativo: Carta abierta todo el día */}
          <div className="bg-gradient-to-r from-[#1A1510] via-[#2A1E16] to-[#1A1510] border-b border-[rgba(196,168,130,0.2)] py-2 px-4 shadow-sm">
            <div className="max-w-md mx-auto flex items-center justify-center gap-2 text-center">
              <span className="w-2 h-2 rounded-full bg-[#6A8635] shadow-[0_0_8px_rgba(106,134,53,0.8)] shrink-0" />
              <p className="text-[11px] sm:text-xs font-serif tracking-wide text-[#FAF3E8]">
                <strong className="text-[#EACB91] uppercase tracking-wider font-bold">Carta abierta todo el día</strong>
                <span className="mx-1.5 text-[#C05028]">·</span>
                <span className="text-[#C4A882]/90">Cocina y cafetería continuas a cualquier hora</span>
              </p>
            </div>
          </div>

          {/* 2. Barra de Categorías única con Flechas Laterales */}
          {!searchQuery && !isLoading && categories.length > 0 && (
            <CategoryNav
              categories={categories}
              activeCategoryId={activeCategoryId}
              onSelectCategory={handleSelectCategory}
              onOpenIndex={() => setIsCategorySheetOpen(true)}
            />
          )}

          {/* Aviso opcional de error con reintento */}
          {error && (
            <div className="mx-3.5 mt-3 p-3 bg-[#3D2E1E]/80 border border-[#C05028]/50 rounded-[3px] flex items-center justify-between text-xs text-[#FAF3E8]">
              <div className="flex items-center gap-2">
                <AlertCircle size={16} className="text-[#C05028] shrink-0" />
                <span>Mostrando versión en caché. Hubo un error de conexión.</span>
              </div>
              <button
                type="button"
                onClick={handleReload}
                disabled={isReloading}
                aria-label="Reintentar conexión con la carta en vivo"
                className="flex items-center gap-1.5 text-[#EACB91] hover:text-white font-semibold shrink-0 ml-2 disabled:opacity-50 transition-opacity"
              >
                <RefreshCw size={12} className={isReloading ? "animate-spin" : ""} />
                <span>{isReloading ? "Actualizando..." : "Reintentar"}</span>
              </button>
            </div>
          )}

          {/* 3. Contenido Paginado del Menú */}
          <main className="px-3.5 py-4 space-y-4">
            {/* ESTADO DE CARGA (LOADING SKELETON) */}
            {isLoading ? (
              <MenuSkeleton />
            ) : searchQuery ? (
              /* MODO BÚSQUEDA */
              <div className="space-y-4 pt-2 animate-fadeIn">
                <div className="flex items-center justify-between px-1">
                  <h2 className="font-serif text-lg font-bold text-white">
                    Resultados de búsqueda
                  </h2>
                  <span className="text-xs text-[#EACB91] font-mono bg-[#25201A] border border-[rgba(196,168,130,0.2)] px-2.5 py-0.5 rounded-[2px]">
                    {searchResults.length} platos
                  </span>
                </div>

                {searchResults.length > 0 ? (
                  <div className="grid grid-cols-1 gap-2.5">
                    {searchResults.map((dish) => (
                      <DishCard
                        key={dish.id}
                        dish={dish}
                        onSelectDish={setSelectedDish}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 px-4 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-[#25201A] border border-[rgba(196,168,130,0.25)] flex items-center justify-center mx-auto text-[#EACB91]">
                      <Search size={22} />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-white">
                      No encontramos ningún plato con "{searchQuery}"
                    </h3>
                    <p className="text-xs text-[#C4A882] max-w-xs mx-auto font-light">
                      Probá buscando con otro término, por ejemplo "café", "lomo", "tabla" o "hamburguesa".
                    </p>
                    <button
                      onClick={() => setSearchQuery("")}
                      className="mt-2 px-4 py-2 rounded-[2px] bg-[#C05028] hover:bg-[#8B3318] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#C05028]/20 transition-all"
                    >
                      Volver a la carta
                    </button>
                  </div>
                )}
              </div>
            ) : currentCategory ? (
              /* PÁGINA DE LA CATEGORÍA SELECCIONADA */
              <div key={currentCategory.id} className="space-y-4 animate-fadeIn">
                {/* Botón Principal y Destacado: Ver Índice Completo de la Carta */}
                <button
                  type="button"
                  onClick={() => setIsCategorySheetOpen(true)}
                  className="w-full group relative overflow-hidden bg-gradient-to-r from-[#25201A] via-[#2E241B] to-[#25201A] hover:from-[#35291E] hover:to-[#35291E] active:scale-[0.99] border border-[rgba(234,203,145,0.35)] hover:border-[#C05028] p-3 sm:p-3.5 rounded-[4px] transition-all duration-300 shadow-lg shadow-black/50 flex items-center justify-between cursor-pointer"
                  aria-label="Abrir índice completo de la carta"
                >
                  {/* Resplandor cálido al hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C05028]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="flex items-center gap-3 relative z-10">
                    <div className="w-11 h-11 rounded-[3px] bg-[#C05028] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#C05028]/40 group-hover:scale-105 transition-transform">
                      <BookOpen size={20} className="text-[#EACB91]" />
                    </div>
                    <div className="text-left">
                      <div className="text-[10px] uppercase tracking-[0.24em] font-bold text-[#EACB91] flex items-center gap-1.5">
                        <span>EXPLORAR LA CARTA</span>
                        <span className="w-1 h-1 rounded-full bg-[#C05028]" />
                        <span className="text-[#C4A882] font-normal">{categories.length} Secciones</span>
                      </div>
                      <div className="font-serif text-[16px] sm:text-[18px] font-bold text-white group-hover:text-[#EACB91] transition-colors leading-snug">
                        Ver Índice Completo
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold text-[#EACB91] group-hover:text-white transition-colors relative z-10 pl-2">
                    <span className="hidden sm:inline text-[11px] uppercase tracking-wider text-[#C4A882]">Abrir índice</span>
                    <div className="w-8 h-8 rounded-full bg-[#1A1510] border border-[rgba(196,168,130,0.3)] group-hover:border-[#C05028] group-hover:bg-[#C05028] group-hover:text-white flex items-center justify-center transition-all shadow-inner">
                      <ChevronRight size={16} />
                    </div>
                  </div>
                </button>

                {/* Indicador de página superior estilo Catálogo */}
                <div className="flex items-center justify-between px-1 text-xs text-[#C4A882] border-b border-[rgba(196,168,130,0.18)] pb-2 pt-0.5">
                  <div className="flex items-center gap-1.5 font-medium">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#C4A882]/80">Sección</span>
                    <span className="text-[#EACB91] font-mono font-bold text-sm">
                      {String(currentCategoryIndex + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[#C4A882]/40">/</span>
                    <span className="font-mono text-[#C4A882]">{categories.length}</span>
                  </div>

                  <span className="text-xs text-[#EACB91] font-medium">
                    {currentCategory.itemsCount} opciones disponibles
                  </span>
                </div>

                {/* Portada de la Categoría (si tiene imagen) */}
                {currentCategory.coverImage ? (
                  <div className="relative rounded-[3px] overflow-hidden h-36 sm:h-44 bg-[#1A1510] border border-[rgba(196,168,130,0.22)] shadow-md shadow-black/60">
                    <img
                      src={resolveAssetUrl(currentCategory.coverImage)}
                      alt={`Portada de ${currentCategory.name}`}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover img-warm"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (target.src.includes("lh3.googleusercontent.com/d/")) {
                          const id = target.src.split("/d/")[1]?.split("=")[0];
                          if (id && !target.src.includes("sz=")) {
                            target.src = `https://drive.google.com/thumbnail?id=${id}&sz=w1600`;
                            return;
                          }
                        }
                        target.style.display = "none";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1F1A14] via-[#1F1A14]/70 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                      <div>
                        <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.24em] text-[#EACB91]">
                          <Sparkles size={10} className="text-[#C05028]" />
                          <span>Página {currentCategoryIndex + 1}</span>
                        </div>
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                          {currentCategory.name}
                        </h2>
                      </div>
                      <span className="text-xs font-mono font-bold text-[#EACB91] bg-[#C05028] px-2.5 py-0.5 rounded-[2px] shadow">
                        {currentCategory.itemsCount}
                      </span>
                    </div>
                  </div>
                ) : (
                  /* Encabezado sin foto de portada */
                  <div className="pt-2 pb-2 border-b border-[rgba(196,168,130,0.2)] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#EACB91]">
                        Página {currentCategoryIndex + 1} de {categories.length}
                      </span>
                      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide">
                        {currentCategory.name}
                      </h2>
                    </div>
                    <span className="text-xs font-mono text-[#EACB91] bg-[#25201A] border border-[rgba(196,168,130,0.2)] px-2.5 py-1 rounded-[2px]">
                      {currentCategory.itemsCount} platos
                    </span>
                  </div>
                )}

                {/* Descripción / Nota editorial de la categoría */}
                {currentCategory.description && (
                  <div className="px-1">
                    <p className="text-xs text-[#EACB91] italic font-serif leading-relaxed bg-[#25201A] p-3 rounded-[3px] border-l-2 border-[#C05028] shadow-inner">
                      "{currentCategory.description}"
                    </p>
                  </div>
                )}

                {/* Lista de Platos de esta Página */}
                <div className="grid grid-cols-1 gap-2.5 pt-1">
                  {currentCategory.items.map((dish) => (
                    <DishCard
                      key={dish.id}
                      dish={dish}
                      onSelectDish={setSelectedDish}
                    />
                  ))}
                </div>

                {/* Botón secundario para ver el índice al pie de la lista */}
                <div className="pt-3">
                  <button
                    type="button"
                    onClick={() => setIsCategorySheetOpen(true)}
                    className="w-full py-3 px-4 rounded-[3px] bg-[#25201A] hover:bg-[#C05028] text-[#EACB91] hover:text-white border border-[rgba(196,168,130,0.25)] hover:border-[#C05028] text-xs uppercase tracking-[0.14em] font-bold transition-all flex items-center justify-center gap-2 shadow-md group active:scale-[0.99]"
                  >
                    <BookOpen size={15} className="group-hover:scale-110 transition-transform" />
                    <span>Ver todas las {categories.length} categorías en el Índice</span>
                  </button>
                </div>

                {/* Controles de Paginación al Pie de la Página */}
                <div className="pt-6 pb-2 border-t border-[rgba(196,168,130,0.2)] mt-5 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    {/* Botón Página Anterior */}
                    <button
                      type="button"
                      onClick={handlePrevPage}
                      disabled={!prevCategory}
                      aria-label={prevCategory ? `Ir a categoría anterior: ${prevCategory.name}` : "Inicio de la carta"}
                      className={`flex-1 flex items-center justify-start gap-1.5 p-3 rounded-[3px] border text-xs font-medium transition-all ${
                        prevCategory
                          ? "bg-[#25201A] border-[rgba(196,168,130,0.2)] hover:border-[#C05028] text-white active:scale-[0.98]"
                          : "bg-[#1A1510]/60 border-transparent text-[#FAF3E8]/20 cursor-not-allowed"
                      }`}
                    >
                      <ChevronLeft size={16} className="shrink-0 text-[#C05028]" />
                      <div className="text-left truncate">
                        <div className="text-[9px] uppercase tracking-wider text-[#EACB91]">Anterior</div>
                        <div className="truncate font-semibold">{prevCategory?.name || "Inicio"}</div>
                      </div>
                    </button>

                    {/* Botón Página Siguiente */}
                    <button
                      type="button"
                      onClick={handleNextPage}
                      disabled={!nextCategory}
                      aria-label={nextCategory ? `Ir a siguiente categoría: ${nextCategory.name}` : "Fin de la carta"}
                      className={`flex-1 flex items-center justify-end gap-1.5 p-3 rounded-[3px] border text-xs font-medium transition-all ${
                        nextCategory
                          ? "bg-[#25201A] border-[rgba(196,168,130,0.2)] hover:border-[#C05028] text-white active:scale-[0.98]"
                          : "bg-[#1A1510]/60 border-transparent text-[#FAF3E8]/20 cursor-not-allowed"
                      }`}
                    >
                      <div className="text-right truncate">
                        <div className="text-[9px] uppercase tracking-wider text-[#EACB91]">Siguiente</div>
                        <div className="truncate font-semibold">{nextCategory?.name || "Fin"}</div>
                      </div>
                      <ChevronRight size={16} className="shrink-0 text-[#C05028]" />
                    </button>
                  </div>

                  {/* Indicador de deslizamiento táctil */}
                  <p className="text-[10px] text-center text-[#C4A882]/50 uppercase tracking-[0.18em] pt-1 font-light">
                    ← Deslizá con el dedo para pasar de página →
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center py-16 px-4">
                <p className="text-sm text-[#C4A882]">No hay platos disponibles en este momento.</p>
              </div>
            )}
          </main>
        </div>

        {/* Pie de Página */}
        <Footer />

        {/* Modal Índice de Categorías */}
        <CategorySheet
          isOpen={isCategorySheetOpen}
          onClose={() => setIsCategorySheetOpen(false)}
          categories={categories}
          activeCategoryId={activeCategoryId}
          onSelectCategory={handleSelectCategory}
        />

        {/* Modal de Detalle del Plato */}
        <DishDetailModal
          dish={selectedDish}
          onClose={() => setSelectedDish(null)}
        />

        {/* Botón flotante accesible al scrollear */}
        {!searchQuery && !isLoading && categories.length > 0 && (
          <FloatingCategoryButton
            onOpenCategories={() => setIsCategorySheetOpen(true)}
            categoriesCount={categories.length}
          />
        )}
      </div>
    </div>
  );
}

export default App;
