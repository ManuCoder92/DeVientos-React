export const products = [
  {
    id: 1,
    title: "Saxo Alto Parquer",
    price: 3300000,
    stock: 5,
    category: "Saxos",
    description:
      "Linea avanzada de Saxos Parquer. Ideal para  nivel intermedio o superior. Sonido equilibrado y brillante",
    brad: "Parker",
    model: "Mystic",
    img: "https://res.cloudinary.com/dko5szmcb/image/upload/v1682091517/saxo_alto_parker_xkqmem.webp",
  },
  {
    id: 2,
    title: "Saxo Tenor Parquer",
    price: 3500000,
    stock: 4,
    category: "Saxos",
    description: "Saxo de estudio, recomendado para iniciales",
    brad: "Parker",
    model: "PSTD",
    img: "https://res.cloudinary.com/dko5szmcb/image/upload/v1682091559/saxo_tenor_parker_u3luuy.webp",
  },
  {
    id: 3,
    title: "Saxo Tenor Yamaha Yts-480s",
    price: 1500000,
    stock: 3,
    category: "Saxos",
    description:
      "Intrumento profesional. Afinación superlativa, Sonido cálido, Mecánica ultra ágil y precisa.",
    brad: "Yamaha",
    model: "YTS480",
    img: "https://res.cloudinary.com/dko5szmcb/image/upload/v1682091673/yamaha_tenor_nvw7e0.webp",
  },
  {
    id: 4,
    title: "Saxo Alto Yamaha Yas-62 Gold",
    price: 1800000,
    stock: 3,
    category: "Saxos",
    description:
      "clásico moderno de Yamaha, timbre oscuro y de rapida respuesta",
    brad: "Yamaha",
    model: "YAS62",
    img: "https://res.cloudinary.com/dko5szmcb/image/upload/v1682091606/yamaha_alto_oaohzd.webp",
  },
  {
    id: 5,
    title: "Trompeta Knight Jbtr-300",
    price: 90000,
    stock: 6,
    category: "Trompetas",
    description: "Trompeta funcional para principiantes e intermedios",
    brad: "Knight",
    model: "JBTR-300",
    img: "https://res.cloudinary.com/dko5szmcb/image/upload/v1682091784/trompeta_knight_trmhml.webp",
  },
  {
    id: 6,
    title: "Trompeta Gala TR1100",
    price: 130000,
    stock: 3,
    category: "Trompetas",
    description: "Agudos intensos y buena calidad de sonido",
    brad: "Gala",
    model: "TR11000",
    img: "https://res.cloudinary.com/dko5szmcb/image/upload/v1682091745/trompeta_gala_zpysgb.webp",
  },
  {
    id: 7,
    title: "Trompeta Yamaha Ytr3335 (bomba Invertida) + Accesorios",
    price: 650000,
    stock: 5,
    category: "Trompetas",
    description: "Timbre más cálido con una paleta de armónicos más completa.",
    brad: "Yamaha",
    model: "Ytr3335",
    img: "https://res.cloudinary.com/dko5szmcb/image/upload/v1682091888/trompeta_yamaha_dvhicl.webp",
  },
  {
    id: 9,
    title: "Clarinete Estudio Parquer",
    price: 85000,
    stock: 10,
    category: "Clarinetes",
    description:
      "Pensado para quieneces iniciar y deben familiarizarce con el instrumento",
    brad: "Parker",
    model: "STAR",
    img: "https://res.cloudinary.com/dko5szmcb/image/upload/v1682091351/clarinete_parker_odw3vs.webp",
  },
  {
    id: 9,
    title: "Clarinete Yamaha Custom",
    price: 1400000,
    stock: 2,
    category: "Clarinetes",
    description:
      "Tope de gama.prestigio indudable.timbre rico y con gran profundidad.",
    brad: "Yamaha",
    model: "Custom YCL-CSGA III Hamilton",
    img: "https://res.cloudinary.com/dko5szmcb/image/upload/v1682091452/clarinete_yamaha_qalmq4.webp",
  },
  {
    id: 10,
    title: "Clarinete Knight Jbcl-510",
    price: 87000,
    stock: 7,
    category: "Clarinetes",
    description:
      "excelente calidad sonora, ideal para quienes se inician en el estudio",
    brad: "Knight",
    model: "Jbcl-510",
    img: "https://res.cloudinary.com/dko5szmcb/image/upload/v1682091278/clarinete_knight_kblqhw.webp",
  },
];

export const getProductsByCategory = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products.category));
  }, 500);
};

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products));
  }, 500);
};

export const getProductsById = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products.id));
  }, 500);
};
