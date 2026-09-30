// Menú digital oficial de Filipo Café Resto Bar
// Basado fielmente en la Carta Oficial Imprimible 2026 de Filipo
// Total: 24 categorías en el orden exacto de la carta física.

import { MenuCategory, MenuItem } from "../types/menu";

export const SITE_INFO = {
  name: "Filipo Café Resto Bar",
  tagline: "El punto de encuentro de Salta",
  subtitle: "Café · Resto · Bar · Tablas",
  address: "Av. del Bicentenario de la Batalla de Salta 1401, Salta",
  phone: "+54 9 387 454-0704",
  phoneClean: "5493874540704",
  instagram: "https://www.instagram.com/filipocaferesto",
  facebook: "https://www.facebook.com/filipocaferesto",
  whatsapp: "https://wa.me/5493874540704?text=Hola!%20Quiero%20hacer%20una%20consulta%20sobre%20Filipo",
  pedidosYaUrl: "https://www.pedidosya.com.ar/restaurantes/salta/filipo-bar-de-tablas-6e94f3ff-329e-40aa-b7c2-b227c1545d93-menu",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=Filipo%20Bar%20de%20Tablas%20Salta",
  schedule: "Carta abierta todo el día · Cocina y cafetería continuas",
};

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    "name": "Tablas",
    "slug": "tablas",
    "description": "Nuestras Tablas están pensadas para compartir de a dos, de a tres e incluso de a cuatro!",
    "icon": "Flame",
    "coverImage": "./platos/tablas.jpg",
    "items": [
      {
        "name": "Tabla El Martillo de Thor",
        "description": "Osobuco de novillo entero de cocción ultra lenta (4 horas), laqueado en reducción de vino, su propio fondo oscuro y verduras seleccionadas. Presentado con el hueso central expuesto para untar el caracú sobre tostadas de masa madre. Se acompaña con puré rústico, vegetales de estación asados y una ensalada de hojas amargas con vinagreta cítrica para equilibrar el paladar.",
        "price": 45500,
        "tags": [
          "Novedad",
          "Para compartir"
        ],
        "image": "./platos/tablas.jpg",
        "id": "dish-0-1",
        "category": "Tablas",
        "categoryId": 0
      },
      {
        "name": "Tabla de Pinchos",
        "description": "Cuatro pechuguitas de pollo crujientes, dos pinchos de tierno lomo envuelto en panceta ahumada y champiñones, y dos pinchos de verduras a la plancha. Se acompaña con papas fritas y tres dips: vinagreta de mostaza y limón, barbacoa de la casa y salsa de queso cheddar fundido.",
        "price": 43900,
        "tags": [
          "Para compartir"
        ],
        "image": "./platos/tablas.jpg",
        "id": "dish-0-2",
        "category": "Tablas",
        "categoryId": 0
      },
      {
        "name": "Súper Tabla Filipo",
        "description": "Nuestro plato insignia. Selección de tres carnes cortadas en tiras y salteadas al hierro: lomo, pechuga de pollo y bondiola de cerdo, servidas en ollitas de hierro calientes individuales para preservar su temperatura y jugosidad. Se acompaña con pinchos de vegetales de estación a la plancha, huevos revueltos, papas fritas crujientes y un mix de hojas verdes frescas. Incluye una sartén miniatura de hierro con quesos fundidos, salsa barbacoa artesanal y mini baguettes artesanales saborizadas para combinar a gusto.",
        "price": 43900,
        "tags": [
          "TOP 1",
          "Más vendida",
          "Para compartir"
        ],
        "image": "./platos/tablas.jpg",
        "id": "dish-0-3",
        "category": "Tablas",
        "categoryId": 0
      },
      {
        "name": "Tabla Locos por el Queso",
        "description": "Pan de campo artesanal de masa madre horneado, ahuecado y relleno con una untuosa fondue de quesos seleccionados. Se presenta escoltado por tiras de lomo y pechuga de pollo salteadas al hierro, pinchos de vegetales de estación asados y papas fritas rústicas crocantes, ideales para sumergir en el queso fundido.",
        "price": 43900,
        "tags": [
          "Para compartir"
        ],
        "image": "./platos/tablas.jpg",
        "id": "dish-0-4",
        "category": "Tablas",
        "categoryId": 0
      },
      {
        "name": "Tabla de Matambrito",
        "description": "Cuatro cortes de matambre tiernizado en cocción prolongada, presentados en una secuencia de sabores de mayor a menor intensidad: al chimichurri tradicional, al ajillo confitado con vino blanco, a la pizza con muzzarella gratinada, y terminando con una pomada intensa de queso azul. Se acompaña con papas fritas crocantes servidas aparte y un dip de salsa criolla fresca.",
        "price": 48900,
        "tags": [
          "Para compartir"
        ],
        "image": "./platos/tablas.jpg",
        "id": "dish-0-5",
        "category": "Tablas",
        "categoryId": 0
      },
      {
        "name": "Tabla de Tacos \"Cielito Lindo\" (armalos a tu gusto)",
        "description": "Salteado al hierro de lomo y pechuga de pollo con cebollas y pimientos morrones. Se acompaña con ocho tortillas artesanales mixtas de maíz y trigo, nachos de maíz crocantes, crema de queso cheddar, auténtico guacamole fresco, pasta de frijoles negros refritos y salsa picante de la casa.",
        "price": 45900,
        "tags": [
          "Para compartir"
        ],
        "image": "./platos/tablas.jpg",
        "id": "dish-0-6",
        "category": "Tablas",
        "categoryId": 0
      },
      {
        "name": "Tabla de Bistequitos",
        "description": "Seis medallones \"baby\" de tierno lomo a la plancha, acompañados de pimientos rojos confitados al hierro. Se presenta con dos dips independientes: una untuosa salsa de hongos y una reducción de Malbec. Servido con brócoli salteado al limón y papas rústicas perfectamente gratinadas.",
        "price": 49500,
        "tags": [
          "Para compartir"
        ],
        "image": "./platos/tablas.jpg",
        "id": "dish-0-7",
        "category": "Tablas",
        "categoryId": 0
      },
      {
        "name": "Tabla de Milanesa a la Canasta",
        "description": "Versión más gourmet y deconstruida de la clásica tabla de milanesas: canastitos individuales de milanesas de pollo · ternera · cerdo · muzzarella. Acompañados de mix de verdes, papas fritas bastón y mitades de tomate con muzzarella gratinada y orégano.",
        "price": 42900,
        "tags": [
          "Muy Recomendable",
          "Para compartir"
        ],
        "image": "./platos/tablas.jpg",
        "id": "dish-0-8",
        "category": "Tablas",
        "categoryId": 0
      },
      {
        "name": "Tabla Desmechada",
        "description": "Carne de ternera braseada a fuego lento durante seis horas, servida en su propio jugo. Con ocho pancitos árabes artesanales recién horneados y selección de guarniciones para armarlos a tu gusto: champiñones salteados, tomates confitados, lonjas de panceta ahumada crujiente y mix de verdes. Incluye salsa barbacoa, vinagreta de mostaza y limón, y mayonesa de apio.",
        "price": 40900,
        "tags": [
          "Para compartir"
        ],
        "image": "./platos/tablas.jpg",
        "id": "dish-0-9",
        "category": "Tablas",
        "categoryId": 0
      },
      {
        "name": "Tabla de Sanguchitos con Onda",
        "description": "Selección de ocho sándwiches de copetín en pan árabe recién horneado: Pechuga de pollo salteada con palta y cheddar - Jamón crudo, tomates confitados y rúcula - Queso criollo, tomate y orégano - Huevo revuelto y panceta ahumada crujiente. Acompañado con papas fritas crocantes bañadas en salsa de queso cheddar caliente.",
        "price": 36900,
        "tags": [
          "Para compartir"
        ],
        "image": "./platos/tablas.jpg",
        "id": "dish-0-10",
        "category": "Tablas",
        "categoryId": 0
      },
      {
        "name": "Tabla de Pizzas",
        "description": "Ocho mini pizzas de masa madre de fermentación lenta y corteza crocante. Degustación de sabores clásicos: Balcarce tradicional, Fugazzeta, Jamón crudo y rúcula, Especial, Napolitana, Queso azul con nuez, Cantimpalo y Cuatro quesos.",
        "price": 30900,
        "tags": [
          "Para compartir"
        ],
        "image": "./platos/tablas.jpg",
        "id": "dish-0-11",
        "category": "Tablas",
        "categoryId": 0
      },
      {
        "name": "Tabla de Milanesas XXL Napolitana",
        "description": "Dos milanesas grandes de ternera, cubiertas con salsa de tomate de la casa, jamón cocido y abundante muzzarella gratinada. Se acompaña con papas fritas bastón y ensalada mixta o puré. Diseñado para disfrutar en familia.",
        "price": 46500,
        "tags": [
          "Para compartir",
          "Familiar"
        ],
        "image": "./platos/tablas.jpg",
        "id": "dish-0-12",
        "category": "Tablas",
        "categoryId": 0
      },
      {
        "name": "Tabla de Suprema XXL Napolitana",
        "description": "Dos milanesas grandes de pechuga de pollo, cubiertas con salsa de tomate de la casa, jamón cocido y abundante muzzarella gratinada. Se acompaña con papas fritas bastón y ensalada mixta o puré.",
        "price": 43500,
        "tags": [
          "Para compartir",
          "Familiar"
        ],
        "image": "./platos/tablas.jpg",
        "id": "dish-0-13",
        "category": "Tablas",
        "categoryId": 0
      },
      {
        "name": "Tabla de Postres",
        "description": "Cheesecake de frutos rojos · lemon pie en copa · tibio brownie de chocolate con nuez y helado · mousse de chocolate o crema de naranja.",
        "price": 30500,
        "tags": [
          "Dulce",
          "Para compartir"
        ],
        "image": "./platos/tablas.jpg",
        "id": "dish-0-14",
        "category": "Tablas",
        "categoryId": 0
      },
      {
        "name": "Tabla de Mini Cakes",
        "description": "Cuatro minicakes a elección: Delicia de limón · Chocotorta · Nutella · Cheesecake de frutos rojos · Rogel · Delicia de chocolate · Brownie Tentación.",
        "price": 29500,
        "tags": [
          "Dulce",
          "Para compartir"
        ],
        "image": "./platos/tablas.jpg",
        "id": "dish-0-15",
        "category": "Tablas",
        "categoryId": 0
      },
      {
        "name": "Tabla de Helados",
        "description": "Tres bochas a elección, ensalada de frutas, rocklets y cubitos de brownie.",
        "price": 19900,
        "tags": [
          "Dulce",
          "Para compartir"
        ],
        "image": "./platos/tablas.jpg",
        "id": "dish-0-16",
        "category": "Tablas",
        "categoryId": 0
      },
      {
        "name": "Tabla Final Felíz (formato degustación)",
        "description": "Cuatro delicados postres: crema de limón, mousse de frutilla, crema de naranja y mousse de chocolate.",
        "price": 15500,
        "tags": [
          "Dulce",
          "Degustación"
        ],
        "image": "./platos/tablas.jpg",
        "id": "dish-0-17",
        "category": "Tablas",
        "categoryId": 0
      },
      {
        "name": "Tabla Bla Bla Bla 210 ml",
        "description": "Cuatro daiquiris o cuatro caipiroskas combinadas con tus frutas favoritas.",
        "price": 21900,
        "tags": [
          "Tragos",
          "Para compartir"
        ],
        "image": "./platos/cocteleria.jpg",
        "id": "dish-0-18",
        "category": "Tablas",
        "categoryId": 0
      },
      {
        "name": "Tabla Terapia de Grupo 210 ml",
        "description": "Un Mojito, una Caipiriña, una Lágrima de Cocodrilo, un Campari Orange.",
        "price": 25000,
        "tags": [
          "Tragos",
          "Para compartir"
        ],
        "image": "./platos/cocteleria.jpg",
        "id": "dish-0-19",
        "category": "Tablas",
        "categoryId": 0
      }
    ],
    "id": 0,
    "itemsCount": 19
  },
  {
    "name": "Menu Ejecutivo",
    "slug": "menu-ejecutivo",
    "description": "PLATO PRINCIPAL + BEBIDA + POSTRE. ¡Disponible todo el día!",
    "icon": "UtensilsCrossed",
    "coverImage": "./platos/menu-ejecutivo.jpg",
    "items": [
      {
        "name": "Bife de Ternera/pollo/bondiola con guarnición",
        "description": "Acompañado con guarnición a elección.",
        "price": 19900,
        "tags": [
          "Menú Completo"
        ],
        "image": "./platos/menu-ejecutivo.jpg",
        "id": "dish-1-1",
        "category": "Menu Ejecutivo",
        "categoryId": 1
      },
      {
        "name": "Wrap de Pollo Menú",
        "description": "Pechuga de pollo salteada, cebolla caramelizada, hojas verdes y tomates confitados, envueltos en tortilla casera, acompañado con papas.",
        "price": 20900,
        "tags": [
          "Menú Completo"
        ],
        "image": "./platos/menu-ejecutivo.jpg",
        "id": "dish-1-2",
        "category": "Menu Ejecutivo",
        "categoryId": 1
      },
      {
        "name": "Moussaka Griega Tradicional",
        "description": "Láminas de berenjenas asadas, ragú de carne con salsa bechamel artesanal y gratinada al horno.",
        "price": 20900,
        "tags": [
          "Menú Completo"
        ],
        "image": "./platos/menu-ejecutivo.jpg",
        "id": "dish-1-3",
        "category": "Menu Ejecutivo",
        "categoryId": 1
      },
      {
        "name": "Pechuguitas de Pollo Crujientes con salsa barbacoa y papas fritas",
        "price": 19900,
        "tags": [
          "Menú Completo"
        ],
        "image": "./platos/menu-ejecutivo.jpg",
        "id": "dish-1-4",
        "category": "Menu Ejecutivo",
        "categoryId": 1
      },
      {
        "name": "Lomo Strogonoff Menú",
        "description": "Cubos de lomo salteadas en salsa cremosa de champiñones y hongos de pino acompañado con risotto.",
        "price": 24900,
        "tags": [
          "Menú Completo"
        ],
        "image": "./platos/menu-ejecutivo.jpg",
        "id": "dish-1-5",
        "category": "Menu Ejecutivo",
        "categoryId": 1
      },
      {
        "name": "Ensalada Tibia de Pollo Menú",
        "description": "Mix de verdes, tiras de pollo, tomate fresco, parmesano, semillas de sésamo y reducción de aceto balsámico.",
        "price": 20900,
        "tags": [
          "Menú Completo"
        ],
        "image": "./platos/menu-ejecutivo.jpg",
        "id": "dish-1-6",
        "category": "Menu Ejecutivo",
        "categoryId": 1
      },
      {
        "name": "Fetuccini al Huevo",
        "description": "Con salsa boloñesa, salsa de espinacas o filetto.",
        "price": 20900,
        "tags": [
          "Menú Completo"
        ],
        "image": "./platos/menu-ejecutivo.jpg",
        "id": "dish-1-7",
        "category": "Menu Ejecutivo",
        "categoryId": 1
      },
      {
        "name": "Wrap de Vegetales Menú",
        "description": "Vegetales salteados al hierro con quinua y hojas de espinaca, acompañado con papas.",
        "price": 20900,
        "tags": [
          "Menú Completo",
          "Vegetariano"
        ],
        "image": "./platos/menu-ejecutivo.jpg",
        "id": "dish-1-8",
        "category": "Menu Ejecutivo",
        "categoryId": 1
      },
      {
        "name": "Wrap de Ternera Menú",
        "description": "Ternera en cocción lenta, desmenuzada, acompañada con hojas verdes, pimientos rojos confitados al hierro, envueltos en tortilla casera.",
        "price": 20900,
        "tags": [
          "Menú Completo"
        ],
        "image": "./platos/menu-ejecutivo.jpg",
        "id": "dish-1-9",
        "category": "Menu Ejecutivo",
        "categoryId": 1
      },
      {
        "name": "Pollo al Curry Menú",
        "description": "En salsa de curry, con un toque de leche de coco, con arroz.",
        "price": 22900,
        "tags": [
          "Menú Completo"
        ],
        "image": "./platos/menu-ejecutivo.jpg",
        "id": "dish-1-10",
        "category": "Menu Ejecutivo",
        "categoryId": 1
      },
      {
        "name": "Milanesa de Ternera o pollo con guarnición",
        "price": 20900,
        "tags": [
          "Menú Completo"
        ],
        "image": "./platos/menu-ejecutivo.jpg",
        "id": "dish-1-11",
        "category": "Menu Ejecutivo",
        "categoryId": 1
      },
      {
        "name": "Hamburguesa Clásica o BBQ medallón SIMPLE",
        "price": 20900,
        "tags": [
          "Menú Completo"
        ],
        "image": "./platos/menu-ejecutivo.jpg",
        "id": "dish-1-12",
        "category": "Menu Ejecutivo",
        "categoryId": 1
      },
      {
        "name": "Ensalada César Menú",
        "description": "Mix de verdes, tiras de pollo, croutons, parmesano y salsa César.",
        "price": 20900,
        "tags": [
          "Menú Completo"
        ],
        "image": "./platos/menu-ejecutivo.jpg",
        "id": "dish-1-13",
        "category": "Menu Ejecutivo",
        "categoryId": 1
      },
      {
        "name": "Menú Kids (la porción es mas pequeña)",
        "description": "Pechuguitas de pollo crujiente · Bifecito de pollo o ternera con puré · Dos pizzetitas a elección · Fetuccini al huevo · Hamburguesa simple con cheddar y papas fritas.",
        "price": 17200,
        "tags": [
          "Menú Completo",
          "Kids"
        ],
        "image": "./platos/menu-ejecutivo.jpg",
        "id": "dish-1-14",
        "category": "Menu Ejecutivo",
        "categoryId": 1
      },
      {
        "name": "Guarniciones Menú Ejecutivo",
        "description": "Arroz · puré mixto · puré de papa · puré de calabaza · papas fritas · ensalada mixta.",
        "price": 0,
        "image": "./platos/menu-ejecutivo.jpg",
        "id": "dish-1-15",
        "category": "Menu Ejecutivo",
        "categoryId": 1
      },
      {
        "name": "Opciones de Postre Menú Ejecutivo",
        "description": "Crema de naranja · Crema de limón · Ensalada de Frutas · Bocha de Helado · Flan casero · Mousse de frutilla · Café.",
        "price": 0,
        "image": "./platos/menu-ejecutivo.jpg",
        "id": "dish-1-16",
        "category": "Menu Ejecutivo",
        "categoryId": 1
      }
    ],
    "id": 1,
    "itemsCount": 16
  },
  {
    "name": "Promos",
    "slug": "promos",
    "description": "Promociones especiales en cafetería, desayunos, meriendas y cervezas artesanales para compartir.",
    "icon": "Sparkles",
    "coverImage": "./platos/tablas.jpg",
    "items": [
      {
        "name": "Keto",
        "description": "Infusión, omelette con pechuga de pollo, queso parmesano y manteca, coronado con tomate fresco, palta y lluvia de panceta crocante.",
        "price": 15500,
        "tags": [
          "Promo",
          "Fitness"
        ],
        "id": "dish-2-1",
        "category": "Promos",
        "categoryId": 2
      },
      {
        "name": "Fitness Proteico",
        "description": "Infusión, tortilla de quinua y avena con mix de frutos secos y miel de abeja, huevos revueltos con jamón y queso, ensalada de fruta.",
        "price": 14500,
        "tags": [
          "Promo",
          "Fitness"
        ],
        "id": "dish-2-2",
        "category": "Promos",
        "categoryId": 2
      },
      {
        "name": "Saludable",
        "description": "Infusión, jugo de cortesía, tres tostadas, palta con semillas, tomate rallado y huevos revueltos con jamón y queso.",
        "price": 13900,
        "tags": [
          "Promo",
          "Fitness"
        ],
        "id": "dish-2-3",
        "category": "Promos",
        "categoryId": 2
      },
      {
        "name": "Filipo Power",
        "description": "Infusión, jugo de cortesía, yogurt griego, mix de cereales, frutas, huevos revueltos con jamón y queso, dos tostadas, queso crema y mermelada.",
        "price": 12900,
        "tags": [
          "Promo",
          "Fitness"
        ],
        "id": "dish-2-4",
        "category": "Promos",
        "categoryId": 2
      },
      {
        "name": "Avocado Toast",
        "description": "Infusión, dos tostadas de pan de masa madre con palta y huevos pochados.",
        "price": 15400,
        "tags": [
          "Promo",
          "Fitness"
        ],
        "id": "dish-2-5",
        "category": "Promos",
        "categoryId": 2
      },
      {
        "name": "Tentación",
        "description": "Infusión y una minicake a elección.",
        "price": 10000,
        "tags": [
          "Promo",
          "Premium"
        ],
        "id": "dish-2-6",
        "category": "Promos",
        "categoryId": 2
      },
      {
        "name": "Completo",
        "description": "Infusión, jugo de cortesía, huevos revueltos con jamón y queso, tres tostadas, queso crema, mermelada y variedad de frutas.",
        "price": 13200,
        "tags": [
          "Promo",
          "Premium"
        ],
        "id": "dish-2-7",
        "category": "Promos",
        "categoryId": 2
      },
      {
        "name": "Waffle Salado",
        "description": "Infusión, jugo de cortesía, waffle salado con huevos revueltos con jamón y queso.",
        "price": 11900,
        "tags": [
          "Promo",
          "Premium"
        ],
        "id": "dish-2-8",
        "category": "Promos",
        "categoryId": 2
      },
      {
        "name": "Campestre",
        "description": "Dos infusiones, dos jugos de cortesía, pan de campo de masa madre, queso criollo, tomate rallado, aceite de oliva, queso crema y mermelada.",
        "price": 19500,
        "tags": [
          "Promo",
          "Premium"
        ],
        "id": "dish-2-9",
        "category": "Promos",
        "categoryId": 2
      },
      {
        "name": "Croissant Manía",
        "description": "Infusión, Croissant con palta, huevo y bacon crujiente, jugo de cortesía.",
        "price": 16900,
        "tags": [
          "Promo",
          "Premium"
        ],
        "id": "dish-2-10",
        "category": "Promos",
        "categoryId": 2
      },
      {
        "name": "Waffle con Helado",
        "description": "Vaso de licuado de banana, waffle con dos bochas de helado y frutas de estación o coulis de frutos rojos.",
        "price": 15500,
        "tags": [
          "Promo",
          "Premium"
        ],
        "id": "dish-2-11",
        "category": "Promos",
        "categoryId": 2
      },
      {
        "name": "Limonada Plus",
        "description": "Jarra de limonada, dos sanguchitos de jamón crudo, rúcula y tomate confitado y dos sanguchitos con queso criollo, tomate confitado y orégano.",
        "price": 17500,
        "tags": [
          "Promo",
          "Premium"
        ],
        "id": "dish-2-12",
        "category": "Promos",
        "categoryId": 2
      },
      {
        "name": "Salado",
        "description": "Infusión, jugo de cortesía, dos pancitos chips, dos fetas de jamón y queso, dos tostadas, queso crema y mermelada.",
        "price": 9900,
        "tags": [
          "Promo",
          "Simple"
        ],
        "id": "dish-2-13",
        "category": "Promos",
        "categoryId": 2
      },
      {
        "name": "Goloso",
        "description": "Infusión, jugo de cortesía y dos medialunas de jamón y queso.",
        "price": 10300,
        "tags": [
          "Promo",
          "Simple"
        ],
        "id": "dish-2-14",
        "category": "Promos",
        "categoryId": 2
      },
      {
        "name": "Waffle Dulce",
        "description": "Infusión, jugo de cortesía y waffle con dulce de leche.",
        "price": 9900,
        "tags": [
          "Promo",
          "Simple"
        ],
        "id": "dish-2-15",
        "category": "Promos",
        "categoryId": 2
      },
      {
        "name": "Como en Casa",
        "description": "Infusión, jugo de cortesía, tres tostadas de pan de masa madre, queso crema y mermelada.",
        "price": 7900,
        "tags": [
          "Promo",
          "Simple"
        ],
        "id": "dish-2-16",
        "category": "Promos",
        "categoryId": 2
      },
      {
        "name": "Clásico",
        "description": "Infusión, jugo de cortesía y dos medialunas/tortillas o un roll de canela o un croissant.",
        "price": 8900,
        "tags": [
          "Promo",
          "Simple"
        ],
        "id": "dish-2-17",
        "category": "Promos",
        "categoryId": 2
      },
      {
        "name": "Mixto",
        "description": "Vaso de licuado de banana con leche y medio tostado de jamón y queso (pan de miga o árabe).",
        "price": 13500,
        "tags": [
          "Promo",
          "Simple"
        ],
        "id": "dish-2-18",
        "category": "Promos",
        "categoryId": 2
      },
      {
        "name": "Arabito",
        "description": "Un litro de licuado de banana con leche y ocho tostaditos de jamón y queso en pan árabe.",
        "price": 18900,
        "tags": [
          "Promo",
          "Simple"
        ],
        "id": "dish-2-19",
        "category": "Promos",
        "categoryId": 2
      },
      {
        "name": "Promo 1",
        "description": "Papas fritas con cheddar y bacon crispy + 1 lt de cerveza Imperial o jarra de limonada 1 litro.",
        "price": 20500,
        "tags": [
          "Promo"
        ],
        "id": "dish-2-20",
        "category": "Promos",
        "categoryId": 2
      },
      {
        "name": "Promo 2",
        "description": "Tabla Sanguchitos con Onda + 1 lt de cerveza Imperial o jarra de limonada 1 litro.",
        "price": 39900,
        "tags": [
          "Promo"
        ],
        "id": "dish-2-21",
        "category": "Promos",
        "categoryId": 2
      },
      {
        "name": "Promo 3",
        "description": "Pechuguitas de pollo crujientes + fritas + 1 lt de cerveza Imperial o 1 litro de limonada.",
        "price": 26900,
        "tags": [
          "Promo"
        ],
        "id": "dish-2-22",
        "category": "Promos",
        "categoryId": 2
      },
      {
        "name": "Promo 4",
        "description": "Dos Hamburguesas BBQ medallón SIMPLE + 1 lt de cerveza Imperial o 1 litro de limonada.",
        "price": 39000,
        "tags": [
          "Promo"
        ],
        "id": "dish-2-23",
        "category": "Promos",
        "categoryId": 2
      }
    ],
    "id": 2,
    "itemsCount": 23
  },
  {
    "name": "Platos Principales",
    "slug": "platos-principales",
    "description": "Elaborados al momento con ingredientes nobles y cocciones cuidadas.",
    "icon": "UtensilsCrossed",
    "items": [
      {
        "name": "Lomo Strogonoff",
        "description": "Cubos de lomo salteadas en salsa cremosa de champiñones y hongos de pino acompañado con arroz.",
        "price": 26500,
        "image": "./platos/menu-ejecutivo.jpg",
        "id": "dish-3-1",
        "category": "Platos Principales",
        "categoryId": 3
      },
      {
        "name": "Medallón de Lomo en Reducción de Malbec",
        "description": "Medallón envuelto en panceta ahumada, sobre colchón de cebolla caramelizada al Malbec. Con guarnición a elección.",
        "price": 26500,
        "id": "dish-3-2",
        "category": "Platos Principales",
        "categoryId": 3
      },
      {
        "name": "Matambre Tiernizado",
        "description": "A la pizza · al ajillo confitado con vino blanco · al chimichurri · o al roquefort. Cocción lenta para lograr una textura incomparable. Con guarnición a elección.",
        "price": 23900,
        "id": "dish-3-3",
        "category": "Platos Principales",
        "categoryId": 3
      },
      {
        "name": "Risotto de Hongos con Pollo (opción vegetariana con almendras)",
        "description": "Arroz arbóreo cremoso cocinado lentamente con mix de hongos aromáticos y pechuga de pollo.",
        "price": 23900,
        "id": "dish-3-4",
        "category": "Platos Principales",
        "categoryId": 3
      },
      {
        "name": "Bondiola Braseada en Salsa Barbacoa",
        "description": "Cocción lenta de 4 horas en salsa barbacoa artesanal hasta lograr una textura que se desarma. Con guarnición a elección. Sugerencia: puré de papa o calabaza.",
        "price": 23500,
        "id": "dish-3-5",
        "category": "Platos Principales",
        "categoryId": 3
      },
      {
        "name": "Moussaka Griega Tradicional (nuevo)",
        "description": "Láminas de berenjenas asadas, intercaladas con un sabroso ragú de carne premium braseada a fuego lento, perfumado con hierbas mediterráneas. Coronada con una cremosa salsa bechamel artesanal y gratinada al horno con abundante queso muzzarella.",
        "price": 23500,
        "tags": [
          "Novedad"
        ],
        "id": "dish-3-6",
        "category": "Platos Principales",
        "categoryId": 3
      },
      {
        "name": "Milanesa de Ternera a Caballo",
        "description": "Milanesa clásica y crujiente coronada con dos huevos fritos en su punto. Con guarnición a elección.",
        "price": 21500,
        "id": "dish-3-7",
        "category": "Platos Principales",
        "categoryId": 3
      },
      {
        "name": "Milanesa de Ternera Napolitana",
        "description": "Milanesa crocante con salsa de tomate de la casa, jamón y queso muzzarella gratinado. Con guarnición a elección.",
        "price": 23500,
        "id": "dish-3-8",
        "category": "Platos Principales",
        "categoryId": 3
      },
      {
        "name": "Pechuga de Pollo al Curry",
        "description": "Tiras de pollo en salsa de curry de la India, con un toque de leche de coco. Con guarnición a elección. Sugerencia, arroz.",
        "price": 23800,
        "id": "dish-3-9",
        "category": "Platos Principales",
        "categoryId": 3
      },
      {
        "name": "Pechuga de Pollo con Salsa Teriyaki",
        "description": "Pechuga a la plancha bañada en salsa teriyaki agridulce japonesa con semillas de sésamo. Con guarnición a elección. Sugerencia arroz o puré de papa.",
        "price": 23800,
        "id": "dish-3-10",
        "category": "Platos Principales",
        "categoryId": 3
      },
      {
        "name": "Pechuguitas de Pollo Crujientes",
        "description": "Rebozadas en crocantes copos de maíz, acompañadas con salsa barbacoa y papas fritas bastón.",
        "price": 18500,
        "id": "dish-3-11",
        "category": "Platos Principales",
        "categoryId": 3
      }
    ],
    "id": 3,
    "itemsCount": 11
  },
  {
    "name": "Pastas",
    "slug": "pastas",
    "description": "Pastas artesanales elaboradas en casa.",
    "icon": "UtensilsCrossed",
    "items": [
      {
        "name": "Pansottis de Calabaza",
        "description": "Pasta rellena artesanal.",
        "price": 16500,
        "id": "dish-4-1",
        "category": "Pastas",
        "categoryId": 4
      },
      {
        "name": "Sorrentinos Capresse",
        "description": "Pasta rellena artesanal.",
        "price": 16500,
        "id": "dish-4-2",
        "category": "Pastas",
        "categoryId": 4
      },
      {
        "name": "Spaghetti al Huevo",
        "description": "Pasta larga artesanal.",
        "price": 13200,
        "id": "dish-4-3",
        "category": "Pastas",
        "categoryId": 4
      },
      {
        "name": "Salsa 4 Quesos",
        "description": "Salsa para acompañar tus pastas.",
        "price": 7500,
        "id": "dish-4-4",
        "category": "Pastas",
        "categoryId": 4
      },
      {
        "name": "Salsa Hongos",
        "description": "Salsa para acompañar tus pastas.",
        "price": 7500,
        "id": "dish-4-5",
        "category": "Pastas",
        "categoryId": 4
      },
      {
        "name": "Salsa Boloñesa",
        "description": "Salsa para acompañar tus pastas.",
        "price": 8900,
        "id": "dish-4-6",
        "category": "Pastas",
        "categoryId": 4
      },
      {
        "name": "Salsa Rosa",
        "description": "Salsa para acompañar tus pastas.",
        "price": 6500,
        "id": "dish-4-7",
        "category": "Pastas",
        "categoryId": 4
      },
      {
        "name": "Salsa de Espinacas a la Crema",
        "description": "Salsa para acompañar tus pastas.",
        "price": 8000,
        "id": "dish-4-8",
        "category": "Pastas",
        "categoryId": 4
      }
    ],
    "id": 4,
    "itemsCount": 8
  },
  {
    "name": "Ensaladas",
    "slug": "ensaladas",
    "description": "Frescas, livianas y nutritivas con ingredientes de estación.",
    "icon": "Salad",
    "items": [
      {
        "name": "Ensalada Jamón Crudo",
        "description": "Peras asadas · almendras fileteadas · rúcula · jamón crudo · palta · tomate · queso · vinagreta de mostaza.",
        "price": 23900,
        "id": "dish-5-1",
        "category": "Ensaladas",
        "categoryId": 5
      },
      {
        "name": "Ensalada César",
        "description": "Mix de verdes, tiras de pollo a la plancha, croutons crujientes, escamas de parmesano y salsa César, la original a base de anchoas.",
        "price": 19900,
        "id": "dish-5-2",
        "category": "Ensaladas",
        "categoryId": 5
      },
      {
        "name": "Ensalada de Quinoa",
        "description": "Quinua cocida, tiras de pollo, chaucha, zanahoria, brócoli, coliflor y almendras tostadas. Nutritiva y saciante.",
        "price": 21900,
        "id": "dish-5-3",
        "category": "Ensaladas",
        "categoryId": 5
      },
      {
        "name": "Ensalada Tibia de Pollo",
        "description": "Mix de verdes, tiras de pollo a la plancha, tomate fresco, escamas de parmesano, semillas de sésamo y reducción de aceto balsámico.",
        "price": 19900,
        "id": "dish-5-4",
        "category": "Ensaladas",
        "categoryId": 5
      }
    ],
    "id": 5,
    "itemsCount": 4
  },
  {
    "name": "Hamburguesas Caseras",
    "slug": "hamburguesas-caseras",
    "description": "Elaboradas con carne de la más alta calidad y cortes seleccionados. En pan de Brioche artesanal. Con papas fritas naturales.",
    "icon": "Beef",
    "coverImage": "./platos/hamburguesas.jpg",
    "items": [
      {
        "name": "Hamburguesa Doble Cheddar",
        "description": "Dos medallones de carne, doble capa de queso cheddar fundido y panceta ahumada crujiente.",
        "price": 19900,
        "image": "./platos/hamburguesas.jpg",
        "id": "dish-6-1",
        "category": "Hamburguesas Caseras",
        "categoryId": 6
      },
      {
        "name": "Hamburguesa BBQ (barbacoa)",
        "description": "Dos medallones de carne, cebolla caramelizada, queso cheddar, bacon y salsa de barbacoa.",
        "price": 19900,
        "image": "./platos/hamburguesas.jpg",
        "id": "dish-6-2",
        "category": "Hamburguesas Caseras",
        "categoryId": 6
      },
      {
        "name": "Hamburguesa Clásica",
        "description": "Dos medallones de carne, lechuga, tomate, huevo, jamón y queso.",
        "price": 19900,
        "image": "./platos/hamburguesas.jpg",
        "id": "dish-6-3",
        "category": "Hamburguesas Caseras",
        "categoryId": 6
      },
      {
        "name": "Hamburguesa Clásica/Cheddar/ BBQ SIMPLE (un medallón de carne)",
        "description": "Un medallón de carne a elección: clásica, cheddar o BBQ. Con papas fritas naturales.",
        "price": 16900,
        "image": "./platos/hamburguesas.jpg",
        "id": "dish-6-4",
        "category": "Hamburguesas Caseras",
        "categoryId": 6
      }
    ],
    "id": 6,
    "itemsCount": 4
  },
  {
    "name": "Sandwiches",
    "slug": "sandwiches",
    "description": "Todos salen con papas fritas naturales. Consultanos por el pan anti-inflamatorio a base de harina de arroz, sin costo adicional.",
    "icon": "Sandwich",
    "items": [
      {
        "name": "Sándwich de Milanesa",
        "description": "Milanesa de ternera o pollo, lechuga, tomate, huevo y queso. El clásico irresistible.",
        "price": 21500,
        "id": "dish-7-1",
        "category": "Sandwiches",
        "categoryId": 7
      },
      {
        "name": "Sándwich Clásico",
        "description": "Lomo o pechuga de pollo a la plancha, lechuga, tomate, huevo, jamón y queso.",
        "price": 22500,
        "id": "dish-7-2",
        "category": "Sandwiches",
        "categoryId": 7
      },
      {
        "name": "Sándwich Lomo en Tiras",
        "description": "Lomo en tiras, vegetales asados y panceta ahumada. (Versión vegetariana sin carne ni panceta disponible).",
        "price": 22500,
        "id": "dish-7-3",
        "category": "Sandwiches",
        "categoryId": 7
      },
      {
        "name": "Sándwich Jamón Crudo",
        "description": "Jamón crudo, queso dambo, aceite de oliva, tomates asados y rúcula.",
        "price": 20500,
        "id": "dish-7-4",
        "category": "Sandwiches",
        "categoryId": 7
      },
      {
        "name": "Sándwich Pechuga de Pollo",
        "description": "Pechuga de pollo a la plancha, mix de verdes, palta fresca y queso dambo.",
        "price": 19800,
        "id": "dish-7-5",
        "category": "Sandwiches",
        "categoryId": 7
      },
      {
        "name": "Wrap de Pollo",
        "description": "Pechuga de pollo salteada, cebolla caramelizada, hojas verdes y tomates confitados, envueltos en tortilla casera.",
        "price": 20500,
        "id": "dish-7-6",
        "category": "Sandwiches",
        "categoryId": 7
      },
      {
        "name": "Wrap de Ternera",
        "description": "Ternera en cocción lenta, desmenuzada, acompañada con hojas verdes, pimientos rojos confitados al hierro, envueltos en tortilla casera.",
        "price": 20500,
        "id": "dish-7-7",
        "category": "Sandwiches",
        "categoryId": 7
      },
      {
        "name": "Wrap de Vegetales",
        "description": "Vegetales salteados al hierro con quinua y hojas de espinaca.",
        "price": 20500,
        "tags": [
          "Vegetariano"
        ],
        "id": "dish-7-8",
        "category": "Sandwiches",
        "categoryId": 7
      }
    ],
    "id": 7,
    "itemsCount": 8
  },
  {
    "name": "Bruschettas",
    "slug": "bruschettas",
    "description": "Dos rebanadas de pan tostado y especiado por porción. Perfectas para picar a cualquier hora.",
    "icon": "Utensils",
    "items": [
      {
        "name": "Bruschetta de Jamón Crudo",
        "description": "Jamón crudo, tomates confitados y rúcula fresca.",
        "price": 7900,
        "id": "dish-8-1",
        "category": "Bruschettas",
        "categoryId": 8
      },
      {
        "name": "Bruschetta de Guacamole",
        "description": "Palta, pimiento morrón, cebollita y jugo de limón.",
        "price": 6900,
        "id": "dish-8-2",
        "category": "Bruschettas",
        "categoryId": 8
      },
      {
        "name": "Bruschetta Capresse",
        "description": "Queso criollo, tomates asados y albahaca.",
        "price": 6500,
        "id": "dish-8-3",
        "category": "Bruschettas",
        "categoryId": 8
      }
    ],
    "id": 8,
    "itemsCount": 3
  },
  {
    "name": "Guarniciones",
    "slug": "guarniciones",
    "description": "Guarniciones y adicionales para acompañar tus platos o picar.",
    "icon": "Sparkles",
    "items": [
      {
        "name": "Papas Fritas con Cheddar y Bacon",
        "price": 13200,
        "id": "dish-9-1",
        "category": "Guarniciones",
        "categoryId": 9
      },
      {
        "name": "Papas Rústicas Gratinada",
        "price": 12900,
        "id": "dish-9-2",
        "category": "Guarniciones",
        "categoryId": 9
      },
      {
        "name": "Papas Fritas Bastón",
        "price": 9900,
        "id": "dish-9-3",
        "category": "Guarniciones",
        "categoryId": 9
      },
      {
        "name": "Papas a la Crema",
        "price": 12900,
        "id": "dish-9-4",
        "category": "Guarniciones",
        "categoryId": 9
      },
      {
        "name": "Huevos a la sartén, poché o revueltos (2 unidades)",
        "price": 7000,
        "id": "dish-9-5",
        "category": "Guarniciones",
        "categoryId": 9
      },
      {
        "name": "Huevos revueltos con jamón y queso",
        "price": 9000,
        "id": "dish-9-6",
        "category": "Guarniciones",
        "categoryId": 9
      },
      {
        "name": "Ollita de Fondue de Queso",
        "price": 14500,
        "id": "dish-9-7",
        "category": "Guarniciones",
        "categoryId": 9
      },
      {
        "name": "Pinchos de Verdura (3 unidades)",
        "price": 9500,
        "id": "dish-9-8",
        "category": "Guarniciones",
        "categoryId": 9
      },
      {
        "name": "Sartén de Queso Derretido",
        "price": 9900,
        "id": "dish-9-9",
        "category": "Guarniciones",
        "categoryId": 9
      },
      {
        "name": "Espinacas Salteadas",
        "price": 8900,
        "id": "dish-9-10",
        "category": "Guarniciones",
        "categoryId": 9
      },
      {
        "name": "Arroz Salteado con Vegetales",
        "price": 8900,
        "id": "dish-9-11",
        "category": "Guarniciones",
        "categoryId": 9
      },
      {
        "name": "Mix de Brócoli y Coliflor Salteados con quinua y almendras",
        "price": 13900,
        "id": "dish-9-12",
        "category": "Guarniciones",
        "categoryId": 9
      },
      {
        "name": "Verduras Salteadas al hierro: pimiento morrón, cebolla, zanahoria, zuccini",
        "price": 9900,
        "id": "dish-9-13",
        "category": "Guarniciones",
        "categoryId": 9
      },
      {
        "name": "Tomates napolitanos: 4 mitades de tomate con muzzarella gratinada y orégano",
        "price": 9500,
        "id": "dish-9-14",
        "category": "Guarniciones",
        "categoryId": 9
      },
      {
        "name": "Salteadito de Quinoa y almendras fileteadas",
        "price": 9900,
        "id": "dish-9-15",
        "category": "Guarniciones",
        "categoryId": 9
      },
      {
        "name": "Ensalada Mixta",
        "price": 9000,
        "id": "dish-9-16",
        "category": "Guarniciones",
        "categoryId": 9
      },
      {
        "name": "Puré de Papa, Calabaza o Mixto",
        "price": 9500,
        "id": "dish-9-17",
        "category": "Guarniciones",
        "categoryId": 9
      },
      {
        "name": "Extra de Queso Cheddar",
        "price": 3700,
        "id": "dish-9-18",
        "category": "Guarniciones",
        "categoryId": 9
      }
    ],
    "id": 9,
    "itemsCount": 18
  },
  {
    "name": "Postres",
    "slug": "postres",
    "description": "Para compartir, individuales y copas heladas.",
    "icon": "IceCream",
    "items": [
      {
        "name": "Tabla de Postres",
        "description": "Cheesecake de frutos rojos · lemon pie en copa · brownie tibio de chocolate con nuez y helado · mousse de chocolate.",
        "price": 30500,
        "tags": [
          "Para compartir"
        ],
        "image": "./platos/tablas.jpg",
        "id": "dish-10-1",
        "category": "Postres",
        "categoryId": 10
      },
      {
        "name": "Tabla de Mini Cakes",
        "description": "Cuatro minicakes a elección: Delicia de limón · Chocotorta · Nutella · Cheesecake de frutos rojos · Rogel · Delicia de chocolate · Brownie Tentación.",
        "price": 29500,
        "tags": [
          "Para compartir"
        ],
        "image": "./platos/tablas.jpg",
        "id": "dish-10-2",
        "category": "Postres",
        "categoryId": 10
      },
      {
        "name": "Tabla de Helados",
        "description": "Tres sabores a elección, frutas de estación o coulis de frutos rojos, cuadraditos de brownie y salsa de pistacho o dulce de leche.",
        "price": 19900,
        "tags": [
          "Para compartir"
        ],
        "image": "./platos/tablas.jpg",
        "id": "dish-10-3",
        "category": "Postres",
        "categoryId": 10
      },
      {
        "name": "Tabla Final Feliz (formato degustación)",
        "description": "Cuatro delicados postres: crema de limón, mousse de frutilla, crema de naranja y mousse de chocolate.",
        "price": 15500,
        "tags": [
          "Degustación"
        ],
        "image": "./platos/tablas.jpg",
        "id": "dish-10-4",
        "category": "Postres",
        "categoryId": 10
      },
      {
        "name": "Brownie tibio de Chocolate con Nueces y Helado",
        "price": 10800,
        "id": "dish-10-5",
        "category": "Postres",
        "categoryId": 10
      },
      {
        "name": "Banana Temptation",
        "description": "Banana, crema chantilly, nueces, 2 bochas de helado, salsa de chocolate y Baileys.",
        "price": 9900,
        "id": "dish-10-6",
        "category": "Postres",
        "categoryId": 10
      },
      {
        "name": "Ensalada de Fruta con Helado",
        "description": "Frutas de estación con 1 bocha de helado.",
        "price": 9500,
        "id": "dish-10-7",
        "category": "Postres",
        "categoryId": 10
      },
      {
        "name": "Ensalada de Fruta Natural",
        "price": 7200,
        "id": "dish-10-8",
        "category": "Postres",
        "categoryId": 10
      },
      {
        "name": "Suspiro Limeño",
        "description": "Suave crema a base de leche condensada con un toque de cítrico y esponjoso merengue.",
        "price": 9100,
        "id": "dish-10-9",
        "category": "Postres",
        "categoryId": 10
      },
      {
        "name": "Mousse de Chocolate",
        "description": "Cremoso, suave y de intenso sabor a chocolate, simplemente irresistible.",
        "price": 9100,
        "id": "dish-10-10",
        "category": "Postres",
        "categoryId": 10
      },
      {
        "name": "Lemon Pie en Copa",
        "description": "Suave crema de limón sobre base de crujientes galletas trituradas y esponjoso merengue.",
        "price": 8900,
        "id": "dish-10-11",
        "category": "Postres",
        "categoryId": 10
      },
      {
        "name": "Flan Casero",
        "price": 7100,
        "id": "dish-10-12",
        "category": "Postres",
        "categoryId": 10
      },
      {
        "name": "Crema de Naranja/crema de limón/mousse de frutilla",
        "price": 5500,
        "id": "dish-10-13",
        "category": "Postres",
        "categoryId": 10
      },
      {
        "name": "Copa Helada Oreo",
        "description": "2 sabores de helado, mini rocklets, galletitas Oreo, crema chantilly y chocolate fundido.",
        "price": 9900,
        "id": "dish-10-14",
        "category": "Postres",
        "categoryId": 10
      },
      {
        "name": "Copa Helada Filipo",
        "description": "2 sabores de helado, manzanas al rhum y crema chantilly.",
        "price": 9900,
        "id": "dish-10-15",
        "category": "Postres",
        "categoryId": 10
      },
      {
        "name": "Copa Helada Crujiente",
        "description": "2 sabores de helado, crocante de maní, chocolate fundido y toque de licor.",
        "price": 9900,
        "id": "dish-10-16",
        "category": "Postres",
        "categoryId": 10
      },
      {
        "name": "Copa Helada 2 Bochas",
        "price": 8000,
        "id": "dish-10-17",
        "category": "Postres",
        "categoryId": 10
      },
      {
        "name": "Copa Helada 1 Bocha",
        "description": "Frutilla · chocolate · dulce de leche · americana · vainilla · limón · banana split · tramontana.",
        "price": 5900,
        "id": "dish-10-18",
        "category": "Postres",
        "categoryId": 10
      }
    ],
    "id": 10,
    "itemsCount": 18
  },
  {
    "name": "Pasteleria y cosas ricas",
    "slug": "pasteleria-y-cosas-ricas",
    "description": "Minicakes artesanales, croissants dulces y salados, waffles y tostadas.",
    "icon": "Cake",
    "items": [
      {
        "name": "Delicia de Limón",
        "description": "Base de brownie de limón, suave crema de limón y un copo de merengue italiano.",
        "price": 8500,
        "id": "dish-11-1",
        "category": "Pasteleria y cosas ricas",
        "categoryId": 11
      },
      {
        "name": "Nutella",
        "description": "Base crocante de galletas de cacao, crema de Nutella y mousse de chocolate blanco.",
        "price": 9200,
        "id": "dish-11-2",
        "category": "Pasteleria y cosas ricas",
        "categoryId": 11
      },
      {
        "name": "Rogel",
        "description": "Finas capas de masa crocante, abundante dulce de leche, merengue italiano y nueces.",
        "price": 8500,
        "id": "dish-11-3",
        "category": "Pasteleria y cosas ricas",
        "categoryId": 11
      },
      {
        "name": "Chocotorta",
        "description": "Chocolinas, dulce de leche y queso crema en una combinación irresistible.",
        "price": 9200,
        "id": "dish-11-4",
        "category": "Pasteleria y cosas ricas",
        "categoryId": 11
      },
      {
        "name": "Cheesecake de Frutos Rojos",
        "description": "Base de galletas con manteca, suave cheesecake y generosa cobertura de frutos rojos.",
        "price": 9200,
        "id": "dish-11-5",
        "category": "Pasteleria y cosas ricas",
        "categoryId": 11
      },
      {
        "name": "Delicia de Chocolate",
        "description": "Tres capas de bizcochuelo de chocolate a la crema unidas por intensa ganache de chocolate, picos de mousse de chocolate blanco y chocolatín.",
        "price": 9200,
        "id": "dish-11-6",
        "category": "Pasteleria y cosas ricas",
        "categoryId": 11
      },
      {
        "name": "Brownie Tentación",
        "description": "Brownie de chocolate con nueces, coronado con abundante dulce de leche y merengue.",
        "price": 8500,
        "id": "dish-11-7",
        "category": "Pasteleria y cosas ricas",
        "categoryId": 11
      },
      {
        "name": "Croissant con corazón de Nutella",
        "description": "Con nutella y crocante de maní. Irresistible.",
        "price": 10500,
        "id": "dish-11-8",
        "category": "Pasteleria y cosas ricas",
        "categoryId": 11
      },
      {
        "name": "Croissant con Helado",
        "description": "Con helado, salsa de chocolate y crocante de maní o mini rocklets.",
        "price": 10900,
        "id": "dish-11-9",
        "category": "Pasteleria y cosas ricas",
        "categoryId": 11
      },
      {
        "name": "Croissant Clásico Casero",
        "price": 5900,
        "id": "dish-11-10",
        "category": "Pasteleria y cosas ricas",
        "categoryId": 11
      },
      {
        "name": "Croissant de Huevo y Panceta",
        "description": "Queso crema, palta, huevo revuelto y panceta ahumada.",
        "price": 14500,
        "id": "dish-11-11",
        "category": "Pasteleria y cosas ricas",
        "categoryId": 11
      },
      {
        "name": "Croissant de Jamón Crudo y Rúcula",
        "description": "Tomates confitados, queso dambo, jamón crudo y aceite de oliva.",
        "price": 15500,
        "id": "dish-11-12",
        "category": "Pasteleria y cosas ricas",
        "categoryId": 11
      },
      {
        "name": "Croissant de Jamón y Queso",
        "description": "Jamón cocido, queso tybo y rodajas de tomate frescos.",
        "price": 14300,
        "id": "dish-11-13",
        "category": "Pasteleria y cosas ricas",
        "categoryId": 11
      },
      {
        "name": "Waffle con Helado y Frutas de Estación",
        "price": 9900,
        "id": "dish-11-14",
        "category": "Pasteleria y cosas ricas",
        "categoryId": 11
      },
      {
        "name": "Waffle Salado",
        "description": "Con jamón, queso y huevo revuelto.",
        "price": 9900,
        "id": "dish-11-15",
        "category": "Pasteleria y cosas ricas",
        "categoryId": 11
      },
      {
        "name": "Waffle con Dulce de Leche",
        "price": 6500,
        "id": "dish-11-16",
        "category": "Pasteleria y cosas ricas",
        "categoryId": 11
      },
      {
        "name": "Avocado individual",
        "description": "Una tostada de pan de masa madre con palta pisada y un huevo pochado.",
        "price": 8000,
        "id": "dish-11-17",
        "category": "Pasteleria y cosas ricas",
        "categoryId": 11
      },
      {
        "name": "Tostado de Jamón y Queso en Pan Árabe o Miga",
        "price": 10500,
        "id": "dish-11-18",
        "category": "Pasteleria y cosas ricas",
        "categoryId": 11
      },
      {
        "name": "Medialuna de Jamón y Queso",
        "price": 5300,
        "id": "dish-11-19",
        "category": "Pasteleria y cosas ricas",
        "categoryId": 11
      },
      {
        "name": "Roll de Canela / Croissant",
        "price": 4500,
        "id": "dish-11-20",
        "category": "Pasteleria y cosas ricas",
        "categoryId": 11
      },
      {
        "name": "Tostadas de Pan Blanco o Negro (2 unidades)",
        "price": 3200,
        "id": "dish-11-21",
        "category": "Pasteleria y cosas ricas",
        "categoryId": 11
      },
      {
        "name": "Medialuna / Tortilla de grasa",
        "price": 2900,
        "id": "dish-11-22",
        "category": "Pasteleria y cosas ricas",
        "categoryId": 11
      }
    ],
    "id": 11,
    "itemsCount": 22
  },
  {
    "name": "Sin Gluten Agregado",
    "slug": "sin-gluten-agregado",
    "icon": "WheatOff",
    "items": [
      {
        "name": "Desayuno Avocado Toast (Sin gluten añadido)",
        "description": "Dos tostadas con palta pisada y 2 huevos pochados.",
        "price": 17400,
        "tags": [
          "Sin Gluten"
        ],
        "id": "dish-12-1",
        "category": "Sin Gluten Agregado",
        "categoryId": 12
      },
      {
        "name": "Desayuno Saludable (Sin gluten añadido)",
        "description": "Infusión + jugo de naranja exprimido + 3 tostadas + palta con semilla + tomate triturado + huevo revuelto.",
        "price": 16000,
        "tags": [
          "Sin Gluten"
        ],
        "id": "dish-12-2",
        "category": "Sin Gluten Agregado",
        "categoryId": 12
      },
      {
        "name": "Desayuno Completo (Sin gluten añadido)",
        "description": "Infusión + jugo + variedad de frutas + huevo revuelto + 3 tostadas + queso crema + mermelada.",
        "price": 16000,
        "tags": [
          "Sin Gluten"
        ],
        "id": "dish-12-3",
        "category": "Sin Gluten Agregado",
        "categoryId": 12
      },
      {
        "name": "Desayuno Goloso (Sin gluten añadido)",
        "description": "Infusión + jugo + 2 medialunas con jamón y queso.",
        "price": 16500,
        "tags": [
          "Sin Gluten"
        ],
        "id": "dish-12-4",
        "category": "Sin Gluten Agregado",
        "categoryId": 12
      },
      {
        "name": "Promo Licuado + 2 Medialunas (Sin gluten añadido)",
        "price": 13900,
        "tags": [
          "Sin Gluten"
        ],
        "id": "dish-12-5",
        "category": "Sin Gluten Agregado",
        "categoryId": 12
      },
      {
        "name": "Desayuno Clásico (Sin gluten añadido)",
        "description": "Infusión + jugo + 2 medialunas de manteca.",
        "price": 13500,
        "tags": [
          "Sin Gluten"
        ],
        "id": "dish-12-6",
        "category": "Sin Gluten Agregado",
        "categoryId": 12
      },
      {
        "name": "Desayuno Como en Casa (Sin gluten añadido)",
        "description": "Infusión + jugo + 3 tostadas de pan casero + queso blanco + mermelada.",
        "price": 11900,
        "tags": [
          "Sin Gluten"
        ],
        "id": "dish-12-7",
        "category": "Sin Gluten Agregado",
        "categoryId": 12
      },
      {
        "name": "Lomo al Strogonoff (Sin gluten añadido)",
        "description": "Cubos de lomo salteadas en salsa cremosa de champiñones y hongos de pino acompañado con risotto.",
        "price": 26500,
        "tags": [
          "Sin Gluten"
        ],
        "id": "dish-12-8",
        "category": "Sin Gluten Agregado",
        "categoryId": 12
      },
      {
        "name": "Medallón de Lomo (Sin gluten añadido)",
        "description": "Medallón envuelto en panceta ahumada, sobre colchón de cebolla caramelizada al Malbec. Con guarnición a elección.",
        "price": 26500,
        "tags": [
          "Sin Gluten"
        ],
        "id": "dish-12-9",
        "category": "Sin Gluten Agregado",
        "categoryId": 12
      },
      {
        "name": "Pechuga de Pollo al Curry (Sin gluten añadido)",
        "description": "Tiras de pollo en salsa de curry de la India, con un toque de leche de coco. Con guarnición de arroz.",
        "price": 23900,
        "tags": [
          "Sin Gluten"
        ],
        "id": "dish-12-10",
        "category": "Sin Gluten Agregado",
        "categoryId": 12
      },
      {
        "name": "Ensalada Tibia de Pollo (Sin gluten añadido)",
        "description": "Mix de verdes, tiras de pollo a la plancha, tomate fresco, escamas de parmesano, semillas de sésamo y reducción de aceto balsámico.",
        "price": 19900,
        "tags": [
          "Sin Gluten"
        ],
        "id": "dish-12-11",
        "category": "Sin Gluten Agregado",
        "categoryId": 12
      },
      {
        "name": "Sándwich (Sin gluten Añadido)",
        "description": "Clásico · lomo en tiras · pechuga de pollo · jamón crudo · vegetariano.",
        "price": 23900,
        "tags": [
          "Sin Gluten"
        ],
        "id": "dish-12-12",
        "category": "Sin Gluten Agregado",
        "categoryId": 12
      },
      {
        "name": "Hamburguesa (Sin gluten Añadido)",
        "description": "Clásica · doble cheddar · BBQ.",
        "price": 21900,
        "tags": [
          "Sin Gluten"
        ],
        "id": "dish-12-13",
        "category": "Sin Gluten Agregado",
        "categoryId": 12
      }
    ],
    "id": 12,
    "itemsCount": 13
  },
  {
    "name": "Tragos",
    "slug": "tragos",
    "description": "Tragos Premium, Clásicos y Promos para compartir.",
    "icon": "Martini",
    "coverImage": "./platos/cocteleria.jpg",
    "items": [
      {
        "name": "Aperol Spritz",
        "description": "Aperol, Chandon 187, hielo y cáscara de naranja. El favorito de la vereda.",
        "price": 12900,
        "tags": [
          "Premium"
        ],
        "image": "./platos/cocteleria.jpg",
        "id": "dish-13-1",
        "category": "Tragos",
        "categoryId": 13
      },
      {
        "name": "Gin Tonic con Bombay",
        "description": "Gin Bombay, limón, agua tónica y hielo.",
        "price": 14500,
        "tags": [
          "Premium"
        ],
        "image": "./platos/cocteleria.jpg",
        "id": "dish-13-2",
        "category": "Tragos",
        "categoryId": 13
      },
      {
        "name": "Mimosa",
        "description": "Elegancia y frescura en cada copa, espumante Chandon 187, jugo de naranja y licor Triple Sec.",
        "price": 12900,
        "tags": [
          "Premium"
        ],
        "image": "./platos/cocteleria.jpg",
        "id": "dish-13-3",
        "category": "Tragos",
        "categoryId": 13
      },
      {
        "name": "Red Varsovia",
        "description": "Una mezcla vibrante de vodka, espumante Chandon 187, jugo de naranja y frutos rojos. Dulce, frutal y sofisticado.",
        "price": 12900,
        "tags": [
          "Premium"
        ],
        "image": "./platos/cocteleria.jpg",
        "id": "dish-13-4",
        "category": "Tragos",
        "categoryId": 13
      },
      {
        "name": "Gin Tonic Beefeater",
        "description": "Gin Beefeater, limón, agua tónica y hielo.",
        "price": 12000,
        "tags": [
          "Premium"
        ],
        "image": "./platos/cocteleria.jpg",
        "id": "dish-13-5",
        "category": "Tragos",
        "categoryId": 13
      },
      {
        "name": "Mojito clásico/ Maracuyá/ Malibú",
        "description": "El clásico cubano. Refrescante combinación de ron, lima, hierbabuena fresca y un toque de soda.",
        "price": 9900,
        "image": "./platos/cocteleria.jpg",
        "id": "dish-13-6",
        "category": "Tragos",
        "categoryId": 13
      },
      {
        "name": "Daiquiri",
        "description": "Un clásico tropical preparado con ron, limón y la fruta de tu elección. Refrescante y lleno de sabor.",
        "price": 9900,
        "image": "./platos/cocteleria.jpg",
        "id": "dish-13-7",
        "category": "Tragos",
        "categoryId": 13
      },
      {
        "name": "Cuba Libre",
        "description": "Ron, cola y un toque de limón que aporta frescura y el equilibrio perfecto en cada sorbo.",
        "price": 9900,
        "image": "./platos/cocteleria.jpg",
        "id": "dish-13-8",
        "category": "Tragos",
        "categoryId": 13
      },
      {
        "name": "Caipiriña clásica/ Maracuyá",
        "description": "El sabor más auténtico de Brasil. Cachaça, limón fresco y azúcar en perfecta armonía.",
        "price": 9900,
        "image": "./platos/cocteleria.jpg",
        "id": "dish-13-9",
        "category": "Tragos",
        "categoryId": 13
      },
      {
        "name": "Caipiroska clásica/ Maracuyá",
        "description": "Una versión más suave de la caipiriña, preparada con vodka, limón y azúcar.",
        "price": 9900,
        "image": "./platos/cocteleria.jpg",
        "id": "dish-13-10",
        "category": "Tragos",
        "categoryId": 13
      },
      {
        "name": "Campari Orange",
        "description": "El equilibrio ideal entre el amargor del Campari y la frescura del jugo de naranja natural.",
        "price": 9900,
        "image": "./platos/cocteleria.jpg",
        "id": "dish-13-11",
        "category": "Tragos",
        "categoryId": 13
      },
      {
        "name": "Cosmopolitan",
        "description": "Vodka, licor de naranja, jugo de arándanos y un toque de lima.",
        "price": 9900,
        "image": "./platos/cocteleria.jpg",
        "id": "dish-13-12",
        "category": "Tragos",
        "categoryId": 13
      },
      {
        "name": "Frozen Margarita",
        "description": "La versión más refrescante de un clásico. Tequila, triple sec y jugo de limón, licuados con hielo hasta lograr una textura suave y helada.",
        "price": 9900,
        "image": "./platos/cocteleria.jpg",
        "id": "dish-13-13",
        "category": "Tragos",
        "categoryId": 13
      },
      {
        "name": "Pisco Sour",
        "description": "Pisco, jugo de limón, almíbar y clara de huevo, logrando una textura y un equilibrio perfecto entre dulzor y acidez.",
        "price": 9900,
        "image": "./platos/cocteleria.jpg",
        "id": "dish-13-14",
        "category": "Tragos",
        "categoryId": 13
      },
      {
        "name": "Gancia Batido",
        "description": "Gancia, jugo de limón y un toque de azúcar, batidos con hielo, liviano y refrescante.",
        "price": 9900,
        "image": "./platos/cocteleria.jpg",
        "id": "dish-13-15",
        "category": "Tragos",
        "categoryId": 13
      },
      {
        "name": "Fernet Branca",
        "description": "El trago más argentino de todos, amargo, refrescante, simplemente Fernet con Coca.",
        "price": 9900,
        "image": "./platos/cocteleria.jpg",
        "id": "dish-13-16",
        "category": "Tragos",
        "categoryId": 13
      },
      {
        "name": "Fernet Julep",
        "description": "Propuesta diferente que combina Fernet Branca, coca cola, menta, pomelo y soda para un sabor fresco y equilibrado.",
        "price": 9900,
        "image": "./platos/cocteleria.jpg",
        "id": "dish-13-17",
        "category": "Tragos",
        "categoryId": 13
      },
      {
        "name": "Vodka + Speed",
        "price": 9900,
        "image": "./platos/cocteleria.jpg",
        "id": "dish-13-18",
        "category": "Tragos",
        "categoryId": 13
      },
      {
        "name": "Lagrima de Cocodrilo",
        "description": "Cóctel tropical con vodka, piña colada, licor de melón y limón. Dulce, fresco e irresistible.",
        "price": 9900,
        "image": "./platos/cocteleria.jpg",
        "id": "dish-13-19",
        "category": "Tragos",
        "categoryId": 13
      },
      {
        "name": "Gin Tonic",
        "description": "El clásico de los clásicos. Gin, agua tónica y un toque de cítricos que realzan su frescura y equilibrio.",
        "price": 9900,
        "image": "./platos/cocteleria.jpg",
        "id": "dish-13-20",
        "category": "Tragos",
        "categoryId": 13
      },
      {
        "name": "Trago Filipo",
        "description": "El cóctel que lleva nuestro nombre. Vodka, sake, sirope de jengibre, jugo de pomelo rosado y delicado toque de azúcar.",
        "price": 9900,
        "tags": [
          "De la Casa"
        ],
        "image": "./platos/cocteleria.jpg",
        "id": "dish-13-21",
        "category": "Tragos",
        "categoryId": 13
      },
      {
        "name": "Promo Aperol Spritz",
        "description": "2 Aperol Spritz.",
        "price": 14000,
        "tags": [
          "Promo"
        ],
        "image": "./platos/cocteleria.jpg",
        "id": "dish-13-22",
        "category": "Tragos",
        "categoryId": 13
      },
      {
        "name": "Promo Gin Tonic",
        "description": "2 Gin Tonic.",
        "price": 14000,
        "tags": [
          "Promo"
        ],
        "image": "./platos/cocteleria.jpg",
        "id": "dish-13-23",
        "category": "Tragos",
        "categoryId": 13
      },
      {
        "name": "Tabla Terapia de Grupo 210 ml",
        "description": "Un Mojito, una Caipiriña, una Lágrima de Cocodrilo, un Campari Orange.",
        "price": 25000,
        "tags": [
          "Para compartir"
        ],
        "image": "./platos/tablas.jpg",
        "id": "dish-13-24",
        "category": "Tragos",
        "categoryId": 13
      },
      {
        "name": "Tabla Bla Bla Bla 210 ml",
        "description": "Cuatro daiquiris o cuatro caipiroskas a elección con la fruta de tu preferencia.",
        "price": 21900,
        "tags": [
          "Para compartir"
        ],
        "image": "./platos/tablas.jpg",
        "id": "dish-13-25",
        "category": "Tragos",
        "categoryId": 13
      }
    ],
    "id": 13,
    "itemsCount": 25
  },
  {
    "name": "Tragos con helado",
    "slug": "tragos-con-helado",
    "description": "Exquisitas combinaciones de coctelería y heladería artesanal.",
    "icon": "Sparkles",
    "items": [
      {
        "name": "Lemonchamp",
        "description": "Chandon 187 con helado de limón. Fresco y elegante.",
        "price": 12900,
        "id": "dish-14-1",
        "category": "Tragos con helado",
        "categoryId": 14
      },
      {
        "name": "Frozen Baileys",
        "description": "Batido de licor Baileys con helado de dulce de leche y hielo.",
        "price": 12500,
        "id": "dish-14-2",
        "category": "Tragos con helado",
        "categoryId": 14
      },
      {
        "name": "Oreo Delight",
        "description": "Licor Baileys, vodka, galletita Oreo, leche y helado de vainilla.",
        "price": 11900,
        "id": "dish-14-3",
        "category": "Tragos con helado",
        "categoryId": 14
      },
      {
        "name": "Screaming Orgasm",
        "description": "Licor de Baileys, vodka, licor de café, helado de crema americana y hielo.",
        "price": 11900,
        "id": "dish-14-4",
        "category": "Tragos con helado",
        "categoryId": 14
      },
      {
        "name": "Frozen Gancia",
        "description": "Batido de Gancia con helado de limón y hielo.",
        "price": 11500,
        "id": "dish-14-5",
        "category": "Tragos con helado",
        "categoryId": 14
      }
    ],
    "id": 14,
    "itemsCount": 5
  },
  {
    "name": "Vinos Tintos",
    "slug": "vinos-tintos",
    "description": "Selección de bodegas salteñas y mendocinas. Priorizamos vinos de la región.",
    "icon": "Wine",
    "items": [
      {
        "name": "Las Perdices Malbec 750 cc — Bodega Las Perdices (Mendoza)",
        "price": 23000,
        "id": "dish-15-1",
        "category": "Vinos Tintos",
        "categoryId": 15
      },
      {
        "name": "Finca Humanao Malbec 750 cc — Bodega Humanao (Salta)",
        "price": 23000,
        "id": "dish-15-2",
        "category": "Vinos Tintos",
        "categoryId": 15
      },
      {
        "name": "Nanni Tannat 750 cc",
        "price": 22000,
        "id": "dish-15-3",
        "category": "Vinos Tintos",
        "categoryId": 15
      },
      {
        "name": "Amalaya Malbec 750 cc — Bodega Colomé (Salta)",
        "price": 22000,
        "id": "dish-15-4",
        "category": "Vinos Tintos",
        "categoryId": 15
      },
      {
        "name": "Don David Malbec 750 cc — Bodega El Esteco (Salta)",
        "price": 22000,
        "id": "dish-15-5",
        "category": "Vinos Tintos",
        "categoryId": 15
      },
      {
        "name": "Callia Alta Shiraz 750 cc",
        "price": 20500,
        "id": "dish-15-6",
        "category": "Vinos Tintos",
        "categoryId": 15
      },
      {
        "name": "Latitud 33 Malbec 750 cc — Bodega Chandon (Mendoza)",
        "price": 16500,
        "id": "dish-15-7",
        "category": "Vinos Tintos",
        "categoryId": 15
      },
      {
        "name": "Cafayate Cabernet Sauvignon 750 cc — Bodega Etchart (Salta)",
        "price": 15500,
        "id": "dish-15-8",
        "category": "Vinos Tintos",
        "categoryId": 15
      },
      {
        "name": "Elementos Malbec 750 cc — Bodega El Esteco (Salta)",
        "price": 15500,
        "id": "dish-15-9",
        "category": "Vinos Tintos",
        "categoryId": 15
      },
      {
        "name": "Amalaya Malbec 375 cc — Bodega Colomé (Salta)",
        "price": 15000,
        "id": "dish-15-10",
        "category": "Vinos Tintos",
        "categoryId": 15
      },
      {
        "name": "Benjamin Malbec 750 cc — Bodega Nieto Senetiner (Mendoza)",
        "price": 12500,
        "id": "dish-15-11",
        "category": "Vinos Tintos",
        "categoryId": 15
      },
      {
        "name": "Finca Humanao Malbec 500 cc",
        "price": 9100,
        "id": "dish-15-12",
        "category": "Vinos Tintos",
        "categoryId": 15
      },
      {
        "name": "Elementos Malbec 375 cc — Bodega El Esteco (Salta)",
        "price": 8300,
        "id": "dish-15-13",
        "category": "Vinos Tintos",
        "categoryId": 15
      },
      {
        "name": "Copa de Vino de la Casa",
        "price": 5500,
        "id": "dish-15-14",
        "category": "Vinos Tintos",
        "categoryId": 15
      }
    ],
    "id": 15,
    "itemsCount": 14
  },
  {
    "name": "Vinos Blancos",
    "slug": "vinos-blancos",
    "description": "Espumantes y vinos blancos de bodegas destacadas.",
    "icon": "Wine",
    "items": [
      {
        "name": "Chandon Brut Nature 750 cc",
        "price": 37000,
        "tags": [
          "Espumante"
        ],
        "id": "dish-16-1",
        "category": "Vinos Blancos",
        "categoryId": 16
      },
      {
        "name": "Chandon Rosé 750 cc",
        "price": 29000,
        "tags": [
          "Espumante"
        ],
        "id": "dish-16-2",
        "category": "Vinos Blancos",
        "categoryId": 16
      },
      {
        "name": "Chandon Extra Brut 750 cc",
        "price": 29000,
        "tags": [
          "Espumante"
        ],
        "id": "dish-16-3",
        "category": "Vinos Blancos",
        "categoryId": 16
      },
      {
        "name": "Chandon Delicé 750 cc",
        "price": 29000,
        "tags": [
          "Espumante"
        ],
        "id": "dish-16-4",
        "category": "Vinos Blancos",
        "categoryId": 16
      },
      {
        "name": "Nieto Senetiner Extra Brut 750 cc",
        "price": 27000,
        "tags": [
          "Espumante"
        ],
        "id": "dish-16-5",
        "category": "Vinos Blancos",
        "categoryId": 16
      },
      {
        "name": "Chandon Rosé 187 cc",
        "price": 10500,
        "tags": [
          "Espumante"
        ],
        "id": "dish-16-6",
        "category": "Vinos Blancos",
        "categoryId": 16
      },
      {
        "name": "Chandon Extra Brut 187 cc",
        "price": 10500,
        "tags": [
          "Espumante"
        ],
        "id": "dish-16-7",
        "category": "Vinos Blancos",
        "categoryId": 16
      },
      {
        "name": "Nanni Tardío 750 cc — Bodega Nanni, Orgánico (Salta)",
        "price": 22000,
        "tags": [
          "Blanco"
        ],
        "id": "dish-16-8",
        "category": "Vinos Blancos",
        "categoryId": 16
      },
      {
        "name": "Amalaya Torrontés 750 cc — Bodega Colomé (Salta)",
        "price": 22000,
        "tags": [
          "Blanco"
        ],
        "id": "dish-16-9",
        "category": "Vinos Blancos",
        "categoryId": 16
      },
      {
        "name": "Amalaya Dulce Natural 750 cc — Bodega Colomé (Salta)",
        "price": 19000,
        "tags": [
          "Blanco"
        ],
        "id": "dish-16-10",
        "category": "Vinos Blancos",
        "categoryId": 16
      },
      {
        "name": "Santa Julia Chenin 750 cc — Bodega Santa Julia (Mendoza)",
        "price": 17900,
        "tags": [
          "Blanco"
        ],
        "id": "dish-16-11",
        "category": "Vinos Blancos",
        "categoryId": 16
      },
      {
        "name": "Cafayate Cosecha Tardía 750 cc — Bodega Etchart (Salta)",
        "price": 15500,
        "tags": [
          "Blanco"
        ],
        "id": "dish-16-12",
        "category": "Vinos Blancos",
        "categoryId": 16
      },
      {
        "name": "New Age 750 cc — Bodega Bianchi (Mendoza)",
        "price": 14000,
        "tags": [
          "Blanco"
        ],
        "id": "dish-16-13",
        "category": "Vinos Blancos",
        "categoryId": 16
      },
      {
        "name": "Cafayate Torrontés 750 cc — Bodega Etchart (Salta)",
        "price": 11800,
        "tags": [
          "Blanco"
        ],
        "id": "dish-16-14",
        "category": "Vinos Blancos",
        "categoryId": 16
      },
      {
        "name": "Vino Sta. Julia Chenin Lata 355 cc",
        "price": 9300,
        "tags": [
          "Blanco"
        ],
        "id": "dish-16-15",
        "category": "Vinos Blancos",
        "categoryId": 16
      },
      {
        "name": "Elementos Torrontés 375 cc — Bodega El Esteco (Salta)",
        "price": 8300,
        "tags": [
          "Blanco"
        ],
        "id": "dish-16-16",
        "category": "Vinos Blancos",
        "categoryId": 16
      }
    ],
    "id": 16,
    "itemsCount": 16
  },
  {
    "name": "Bebidas Destiladas y Licores",
    "slug": "bebidas-destiladas-y-licores",
    "description": "Gins, vodkas, rones y licores importados.",
    "icon": "Martini",
    "items": [
      {
        "name": "Gin Bombay",
        "price": 13900,
        "id": "dish-17-1",
        "category": "Bebidas Destiladas y Licores",
        "categoryId": 17
      },
      {
        "name": "Gin Tanqueray",
        "price": 13900,
        "id": "dish-17-2",
        "category": "Bebidas Destiladas y Licores",
        "categoryId": 17
      },
      {
        "name": "Ron Havana 7 Años",
        "price": 12900,
        "id": "dish-17-3",
        "category": "Bebidas Destiladas y Licores",
        "categoryId": 17
      },
      {
        "name": "Vodka Absolut",
        "price": 9900,
        "id": "dish-17-4",
        "category": "Bebidas Destiladas y Licores",
        "categoryId": 17
      },
      {
        "name": "Vodka Smirnoff",
        "price": 9900,
        "id": "dish-17-5",
        "category": "Bebidas Destiladas y Licores",
        "categoryId": 17
      },
      {
        "name": "Ron Bacardi",
        "price": 9900,
        "id": "dish-17-6",
        "category": "Bebidas Destiladas y Licores",
        "categoryId": 17
      },
      {
        "name": "Gin Beefeater",
        "price": 8500,
        "id": "dish-17-7",
        "category": "Bebidas Destiladas y Licores",
        "categoryId": 17
      },
      {
        "name": "Baileys",
        "price": 9500,
        "image": "./platos/cafeteria.jpg",
        "id": "dish-17-8",
        "category": "Bebidas Destiladas y Licores",
        "categoryId": 17
      },
      {
        "name": "Malibú",
        "price": 8500,
        "id": "dish-17-9",
        "category": "Bebidas Destiladas y Licores",
        "categoryId": 17
      },
      {
        "name": "Tía Maria Cream",
        "price": 7800,
        "id": "dish-17-10",
        "category": "Bebidas Destiladas y Licores",
        "categoryId": 17
      },
      {
        "name": "Tía Maria",
        "price": 6900,
        "id": "dish-17-11",
        "category": "Bebidas Destiladas y Licores",
        "categoryId": 17
      }
    ],
    "id": 17,
    "itemsCount": 11
  },
  {
    "name": "Whiskys",
    "slug": "whiskys",
    "description": "Selección de whiskys escoceses y bourbons.",
    "icon": "GlassWater",
    "items": [
      {
        "name": "Johnnie Walker Black",
        "price": 16800,
        "id": "dish-18-1",
        "category": "Whiskys",
        "categoryId": 18
      },
      {
        "name": "Jack Daniels",
        "price": 14200,
        "id": "dish-18-2",
        "category": "Whiskys",
        "categoryId": 18
      },
      {
        "name": "Ballantines",
        "price": 12500,
        "id": "dish-18-3",
        "category": "Whiskys",
        "categoryId": 18
      },
      {
        "name": "J&B",
        "price": 12500,
        "id": "dish-18-4",
        "category": "Whiskys",
        "categoryId": 18
      },
      {
        "name": "Johnnie Walker Red",
        "price": 12500,
        "id": "dish-18-5",
        "category": "Whiskys",
        "categoryId": 18
      },
      {
        "name": "Blenders",
        "price": 8500,
        "id": "dish-18-6",
        "category": "Whiskys",
        "categoryId": 18
      },
      {
        "name": "Old Smugglers",
        "price": 8500,
        "id": "dish-18-7",
        "category": "Whiskys",
        "categoryId": 18
      }
    ],
    "id": 18,
    "itemsCount": 7
  },
  {
    "name": "Cervezas",
    "slug": "cervezas",
    "description": "Cervezas en botella de litro y latas de 470 cc.",
    "icon": "Beer",
    "items": [
      {
        "name": "Heineken 970 cc",
        "price": 12900,
        "tags": [
          "Litro"
        ],
        "id": "dish-19-1",
        "category": "Cervezas",
        "categoryId": 19
      },
      {
        "name": "Miller 970 cc",
        "price": 11900,
        "tags": [
          "Litro"
        ],
        "id": "dish-19-2",
        "category": "Cervezas",
        "categoryId": 19
      },
      {
        "name": "Imperial Lager 970 cc",
        "price": 11500,
        "tags": [
          "Litro"
        ],
        "id": "dish-19-3",
        "category": "Cervezas",
        "categoryId": 19
      },
      {
        "name": "Imperial IPA 970 cc",
        "price": 11500,
        "tags": [
          "Litro"
        ],
        "id": "dish-19-4",
        "category": "Cervezas",
        "categoryId": 19
      },
      {
        "name": "Imperial Golden 970 cc",
        "price": 11500,
        "tags": [
          "Litro"
        ],
        "id": "dish-19-5",
        "category": "Cervezas",
        "categoryId": 19
      },
      {
        "name": "Imperial Cream Stout 970 cc",
        "price": 11500,
        "tags": [
          "Litro"
        ],
        "id": "dish-19-6",
        "category": "Cervezas",
        "categoryId": 19
      },
      {
        "name": "Imperial APA 970 cc",
        "price": 11500,
        "tags": [
          "Litro"
        ],
        "id": "dish-19-7",
        "category": "Cervezas",
        "categoryId": 19
      },
      {
        "name": "Imperial Amber Lager 970 cc",
        "price": 11500,
        "tags": [
          "Litro"
        ],
        "id": "dish-19-8",
        "category": "Cervezas",
        "categoryId": 19
      },
      {
        "name": "Salta Roja 970 cc",
        "price": 10700,
        "tags": [
          "Litro"
        ],
        "id": "dish-19-9",
        "category": "Cervezas",
        "categoryId": 19
      },
      {
        "name": "Salta Negra 970 cc",
        "price": 10700,
        "tags": [
          "Litro"
        ],
        "id": "dish-19-10",
        "category": "Cervezas",
        "categoryId": 19
      },
      {
        "name": "Heineken Lata 470 cc",
        "price": 7900,
        "tags": [
          "Lata"
        ],
        "id": "dish-19-11",
        "category": "Cervezas",
        "categoryId": 19
      },
      {
        "name": "Imperial Lager Lata 470 cc",
        "price": 7000,
        "tags": [
          "Lata"
        ],
        "id": "dish-19-12",
        "category": "Cervezas",
        "categoryId": 19
      },
      {
        "name": "Imperial IPA Lata 470 cc",
        "price": 7000,
        "tags": [
          "Lata"
        ],
        "id": "dish-19-13",
        "category": "Cervezas",
        "categoryId": 19
      },
      {
        "name": "Imperial Golden 470 cc",
        "price": 7000,
        "tags": [
          "Lata"
        ],
        "id": "dish-19-14",
        "category": "Cervezas",
        "categoryId": 19
      },
      {
        "name": "Imperial Cream Stout Lata 470 cc",
        "price": 7000,
        "tags": [
          "Lata"
        ],
        "id": "dish-19-15",
        "category": "Cervezas",
        "categoryId": 19
      },
      {
        "name": "Imperial APA Lata 470 cc",
        "price": 7000,
        "tags": [
          "Lata"
        ],
        "id": "dish-19-16",
        "category": "Cervezas",
        "categoryId": 19
      },
      {
        "name": "Imperial Amber Lager Lata 470 cc",
        "price": 7000,
        "tags": [
          "Lata"
        ],
        "id": "dish-19-17",
        "category": "Cervezas",
        "categoryId": 19
      },
      {
        "name": "Salta Roja Lata 470 cc",
        "price": 6500,
        "tags": [
          "Lata"
        ],
        "id": "dish-19-18",
        "category": "Cervezas",
        "categoryId": 19
      },
      {
        "name": "Salta Negra Lata 470 cc",
        "price": 6500,
        "tags": [
          "Lata"
        ],
        "id": "dish-19-19",
        "category": "Cervezas",
        "categoryId": 19
      }
    ],
    "id": 19,
    "itemsCount": 19
  },
  {
    "name": "Jugos y Licuados",
    "slug": "jugos-y-licuados",
    "description": "Batidos, milkshakes con helado y licuados frescos.",
    "icon": "CupSoda",
    "items": [
      {
        "name": "Milkshake con Helado y Licor",
        "description": "Batido de leche, hielo, helado y licor a elección.",
        "price": 9500,
        "id": "dish-20-1",
        "category": "Jugos y Licuados",
        "categoryId": 20
      },
      {
        "name": "Milkshake con Helado y Café",
        "description": "Batido de leche, hielo, helado y café.",
        "price": 8500,
        "id": "dish-20-2",
        "category": "Jugos y Licuados",
        "categoryId": 20
      },
      {
        "name": "Licuado de Durazno y Naranja",
        "price": 7800,
        "id": "dish-20-3",
        "category": "Jugos y Licuados",
        "categoryId": 20
      },
      {
        "name": "Milkshake con Helado",
        "description": "Batido de leche, hielo y helado a elección.",
        "price": 7900,
        "id": "dish-20-4",
        "category": "Jugos y Licuados",
        "categoryId": 20
      },
      {
        "name": "Licuado Mixtos o frutas fuera de estación",
        "price": 7200,
        "id": "dish-20-5",
        "category": "Jugos y Licuados",
        "categoryId": 20
      },
      {
        "name": "Jugo de Naranja Natural",
        "price": 6000,
        "id": "dish-20-6",
        "category": "Jugos y Licuados",
        "categoryId": 20
      },
      {
        "name": "Licuado de Banana",
        "price": 6000,
        "id": "dish-20-7",
        "category": "Jugos y Licuados",
        "categoryId": 20
      }
    ],
    "id": 20,
    "itemsCount": 7
  },
  {
    "name": "Bebidas sin alcohol",
    "slug": "bebidas-sin-alcohol",
    "description": "Limonadas naturales en jarra y vaso, gaseosas y aguas.",
    "icon": "CupSoda",
    "items": [
      {
        "name": "Limonada Clásica — Jarra 1 lt",
        "price": 10900,
        "id": "dish-21-1",
        "category": "Bebidas sin alcohol",
        "categoryId": 21
      },
      {
        "name": "Zanahoria, Maracuyá y Naranja — Jarra 1 lt",
        "price": 12500,
        "id": "dish-21-2",
        "category": "Bebidas sin alcohol",
        "categoryId": 21
      },
      {
        "name": "Zanahoria, Jengibre y Naranja — Jarra 1 lt",
        "price": 12500,
        "id": "dish-21-3",
        "category": "Bebidas sin alcohol",
        "categoryId": 21
      },
      {
        "name": "Limonada de Maracuyá o Menta y jengibre o Frutos Rojos — Jarra 1 lt",
        "price": 10500,
        "id": "dish-21-4",
        "category": "Bebidas sin alcohol",
        "categoryId": 21
      },
      {
        "name": "Zanahoria, Maracuyá y Naranja — Vaso ½ lt",
        "price": 7500,
        "id": "dish-21-5",
        "category": "Bebidas sin alcohol",
        "categoryId": 21
      },
      {
        "name": "Zanahoria, Jengibre y Naranja — Vaso ½ lt",
        "price": 7300,
        "id": "dish-21-6",
        "category": "Bebidas sin alcohol",
        "categoryId": 21
      },
      {
        "name": "Limonada de Maracuyá o Menta y jengibre o Frutos Rojos — Vaso ½ lt",
        "price": 7500,
        "id": "dish-21-7",
        "category": "Bebidas sin alcohol",
        "categoryId": 21
      },
      {
        "name": "Limonada Clásica — Vaso ½ lt",
        "price": 4900,
        "id": "dish-21-8",
        "category": "Bebidas sin alcohol",
        "categoryId": 21
      },
      {
        "name": "Coca Cola/Coca Zero/Sprite/ Sprite Zero 1,5 lt",
        "price": 11900,
        "id": "dish-21-9",
        "category": "Bebidas sin alcohol",
        "categoryId": 21
      },
      {
        "name": "Coca Cola/Coca Zero/Sprite 1 lt",
        "price": 9900,
        "id": "dish-21-10",
        "category": "Bebidas sin alcohol",
        "categoryId": 21
      },
      {
        "name": "Schweppes Tónica",
        "price": 4900,
        "id": "dish-21-11",
        "category": "Bebidas sin alcohol",
        "categoryId": 21
      },
      {
        "name": "Coca Cola 350 cc",
        "price": 4700,
        "id": "dish-21-12",
        "category": "Bebidas sin alcohol",
        "categoryId": 21
      },
      {
        "name": "Coca Zero 350 cc",
        "price": 4700,
        "id": "dish-21-13",
        "category": "Bebidas sin alcohol",
        "categoryId": 21
      },
      {
        "name": "Sprite 350 cc",
        "price": 4700,
        "id": "dish-21-14",
        "category": "Bebidas sin alcohol",
        "categoryId": 21
      },
      {
        "name": "Fanta 350 cc",
        "price": 4700,
        "id": "dish-21-15",
        "category": "Bebidas sin alcohol",
        "categoryId": 21
      },
      {
        "name": "Agua sin Gas 500 cc",
        "price": 4700,
        "id": "dish-21-16",
        "category": "Bebidas sin alcohol",
        "categoryId": 21
      },
      {
        "name": "Agua con Gas 500 cc",
        "price": 4700,
        "id": "dish-21-17",
        "category": "Bebidas sin alcohol",
        "categoryId": 21
      },
      {
        "name": "Aquarius 500 cc",
        "price": 4700,
        "id": "dish-21-18",
        "category": "Bebidas sin alcohol",
        "categoryId": 21
      }
    ],
    "id": 21,
    "itemsCount": 18
  },
  {
    "name": "Cafeteria",
    "slug": "cafeteria",
    "description": "Cafés especiales, fríos y clásicos de barista.",
    "icon": "Coffee",
    "coverImage": "./platos/cafeteria.jpg",
    "items": [
      {
        "name": "Café Filipo",
        "description": "Café, licor Tía María Cream, licor de chocolate, crema y chocolate rayado.",
        "price": 8900,
        "image": "./platos/cafeteria.jpg",
        "id": "dish-22-1",
        "category": "Cafeteria",
        "categoryId": 22
      },
      {
        "name": "Café Surprise",
        "description": "Café, crema, licor Tía María Cream, licor de dulce de leche y chocolate rayado.",
        "price": 8900,
        "image": "./platos/cafeteria.jpg",
        "id": "dish-22-2",
        "category": "Cafeteria",
        "categoryId": 22
      },
      {
        "name": "Café Irlandés",
        "description": "Café, whisky, crema, chocolate rayado y canela.",
        "price": 8900,
        "image": "./platos/cafeteria.jpg",
        "id": "dish-22-3",
        "category": "Cafeteria",
        "categoryId": 22
      },
      {
        "name": "Café con Baileys",
        "price": 8900,
        "image": "./platos/cafeteria.jpg",
        "id": "dish-22-4",
        "category": "Cafeteria",
        "categoryId": 22
      },
      {
        "name": "Affogato",
        "description": "Pocillo de café con helado.",
        "price": 8900,
        "image": "./platos/cafeteria.jpg",
        "id": "dish-22-5",
        "category": "Cafeteria",
        "categoryId": 22
      },
      {
        "name": "Frozen Baileys Coffee",
        "description": "Batido de hielo triturado, Baileys, helado y café.",
        "price": 12500,
        "image": "./platos/cafeteria.jpg",
        "id": "dish-22-6",
        "category": "Cafeteria",
        "categoryId": 22
      },
      {
        "name": "Sweetest Ice Coffee",
        "description": "Hielo triturado, café, leche helada y helado de dulce de leche.",
        "price": 10900,
        "image": "./platos/cafeteria.jpg",
        "id": "dish-22-7",
        "category": "Cafeteria",
        "categoryId": 22
      },
      {
        "name": "Vanilla Ice Coffee",
        "description": "Hielo triturado, café, leche helada y vainilla.",
        "price": 10900,
        "image": "./platos/cafeteria.jpg",
        "id": "dish-22-8",
        "category": "Cafeteria",
        "categoryId": 22
      },
      {
        "name": "Café o cortado en Pocillo",
        "price": 4500,
        "image": "./platos/cafeteria.jpg",
        "id": "dish-22-9",
        "category": "Cafeteria",
        "categoryId": 22
      },
      {
        "name": "Café en pocillo o Jarrito con Leche Condensada",
        "price": 5300,
        "image": "./platos/cafeteria.jpg",
        "id": "dish-22-10",
        "category": "Cafeteria",
        "categoryId": 22
      },
      {
        "name": "Café en Jarrito/ café doble/ café con leche",
        "price": 4900,
        "image": "./platos/cafeteria.jpg",
        "id": "dish-22-11",
        "category": "Cafeteria",
        "categoryId": 22
      },
      {
        "name": "Té / Té Saborizado",
        "price": 4900,
        "image": "./platos/cafeteria.jpg",
        "id": "dish-22-12",
        "category": "Cafeteria",
        "categoryId": 22
      },
      {
        "name": "Capuchino",
        "price": 5900,
        "image": "./platos/cafeteria.jpg",
        "id": "dish-22-13",
        "category": "Cafeteria",
        "categoryId": 22
      },
      {
        "name": "Submarino",
        "price": 5900,
        "image": "./platos/cafeteria.jpg",
        "id": "dish-22-14",
        "category": "Cafeteria",
        "categoryId": 22
      },
      {
        "name": "Leche con Chocolate",
        "price": 5000,
        "image": "./platos/cafeteria.jpg",
        "id": "dish-22-15",
        "category": "Cafeteria",
        "categoryId": 22
      },
      {
        "name": "Café en Jarrito",
        "price": 4900,
        "image": "./platos/cafeteria.jpg",
        "id": "dish-22-16",
        "category": "Cafeteria",
        "categoryId": 22
      },
      {
        "name": "Café en Pocillo con Crema",
        "price": 4900,
        "image": "./platos/cafeteria.jpg",
        "id": "dish-22-17",
        "category": "Cafeteria",
        "categoryId": 22
      }
    ],
    "id": 22,
    "itemsCount": 17
  }
];

export const ALL_MENU_ITEMS: MenuItem[] = MENU_CATEGORIES.flatMap((c) => c.items);
