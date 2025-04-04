const productosData = [
  {
    id: 1,
    name: "Selic-E",
    descripcion:
      "Sellador de silicona acética, versátil y de un solo componente de usogeneral, ideado para aplicaciones de pegado y sellado donde se requiereuna larga duración. Creará un sellado impermeable y duradero, a la vezque fl exible sobre muchos materiales de construcción en áreas húmedas. Adecuado tanto para uso interior como exterior.",
    image: "/imagenes/carwo_sellic-e.jpg",
    category: "Selladores de silicona",
  },
  {
    id: 2,
    name: "Selic-P",
    descripcion:
      "Sellador de silicona de un solo componente y de alto rendimiento. Además es 100% neutro y está diseñado para proporcionar una adhesión y duración superior en una amplia gama de aplicaciones encristaladas, sellado por erosión y aplicaciones comerciales. Tiene una gran resistencia a la erosión, radiación UV, vibración, humedad, ozono, temperaturas extremas, contaminantes que lleva el aire y a muchos detergentes y disolventes.",
    image: "/imagenes/carwo_sellic-p.jpg",
    category: "Selladores de silicona",
  },
  {
    id: 3,
    name: "Chemical Glove",
    descripcion:
      "Protector cutáneo que genera una película imperceptible separando la suciedad, grasa, tintas, de la superfi cie dérmica.",
    image: "/imagenes/carwo_chemical-glove-500ml.jpg",
    category: "Guantes",
  },
  {
    id: 4,
    name: "GUANTE-MAX",
    descripcion: "GUANTES DE NITRILO DESCARTABLES MÁXIMO CONTROL - TEXTURA DIAMANTE",
    image: "/imagenes/guante-max_cajas_x2.jpg",
    category: "Guantes",
  },
  {
    id: 5,
    name: "GUANTE-NIT",
    descripcion: "GUANTES DE NITRILO DESCARTABLES USO GENERAL - SUPERFICIE LISA",
    image: "/imagenes/carwo_guante-nit.jpg",
    category: "Guantes",
  },
  {
    id: 6,
    name: "Sogas Trenzadas de Polipropileno",
    descripcion: "",
    image: "/imagenes/carwo_soga-trenzada.jpg",
    category: "Sogas y Tensores",
  },
  {
    id: 7,
    name: "Sogas Trenzadas - Símil Yute",
    descripcion: "IDEALES PARA MANUALIDADES Y DECORACIÓN",
    image: "/imagenes/carwo_soga-simil-yute.jpg",
    category: "Sogas y Tensores",
  },
  {
    id: 8,
    name: "Sogas Elastizadas",
    descripcion: "",
    image: "/imagenes/carwo_soga-elastizada.jpg",
    category: "Sogas y Tensores",
  },
  {
    id: 9,
    name: "Sogas Motor Explosión",
    descripcion: "",
    image: "/imagenes/carwo_sellic-p.jpg",
    category: "Sogas y Tensores",
  },
  {
    id: 10,
    name: "Tensores Elásticos",
    descripcion: "",
    image: "/imagenes/carwo_tensor-elastico.jpg",
    category: "Sogas y Tensores",
  },
  {
    id: 11,
    name: "Papelim-DUO",
    descripcion:
      "BOBINAS DE PAPEL PARA LIMPIEZA Papel mecánico fabricado en doble capa, de gran resistencia y alta absorción y suavidad diseñado para la limpieza en una gran variedad de aplicaciones industriales. Resistente a la rotura en húmedo. Bordes sellados para evitar la separación de sus hojas. Indicado para todo tipo de superfi cies.",
    image: "/imagenes/carwo_papelim-duo.jpg",
    category: "Papel para limpieza",
  },
  {
    id: 12,
    name: "Limpel-PRO",
    descripcion:
      "BOBINAS DE PAPEL PREMIUM PARA LIMPIEZA PROFESIONAL Papel fabricado en doble hoja, de gran resistencia, alta absorción y máxima suavidad sin desprender pelusa o partículas. Ideal para todo tipo de superfi cies. Único con proceso WET STRENGHT (resistencia a la rotura en húmedo) y Ply Bonder (sellado de bordes para evitar la separación de sus hojas).",
    image: "/imagenes/carwo_limpel-pro.jpg",
    category: "Papel para limpieza",
  },
  {
    id: 13,
    name: "Rejilla-DOBLE",
    descripcion: "REJILLA DOBLE DE PURO ALGODÓN PARA AUTOMOTOR",
    image: "/imagenes/carwo_rejilla-doble-50x50.jpg",
    category: "Rejilla para lavado y limpieza",
  },
  {
    id: 14,
    name: "Rejilla-TRIPLE",
    descripcion: "REJILLA PESADA TRIPLE DE PURO ALGODÓN PARA AUTOMOTOR",
    image: "/imagenes/carwo_rejilla-triple-50x50.jpg",
    category: "Rejilla para lavado y limpieza",
  },
  {
    id: 15,
    name: "No Touch",
    descripcion:
      "ANTIESTÁTICO - DESESTATIZANTE - SIN FRICCIÓN. Para vehículos pesados (colectivos, camiones, maquinaria agrícola) limpia, desengrasa y remueve insectos. Quita la suciedad sin refregar. No daña la pintura, vidrios ni plásticos.",
    image: "/imagenes/carwo_notouch-5l.jpg",
    category: "Rejilla para lavado y limpieza",
  },
  {
    id: 16,
    name: "Wash-S",
    descripcion:
      "Detergente sintético para vehículos que disuelve y remueve hasta la suciedad más difícil, reviviendo el brillo original de la pintura. Este producto es apto para utilizar sobre todo tipo de pinturas.",
    image: "/imagenes/carwo_wash-s_500ml.jpg",
    category: "Lava Carrocería",
  },
  {
    id: 17,
    name: "Blackshine",
    descripcion:
      "Renovador de cauchos y gomas, que otorga un acabado semi-mate a todas las superfi cies y las protege evitando la adhesión del polvo. Indicado para neumáticos, alfombras, burletes y otras piezas de goma.",
    image: "/imagenes/carwo_blackshine_500ml.jpg",
    category: "Cosmética Automotor",
  },
  {
    id: 18,
    name: "Enginewash",
    descripcion:
      "Desengrasante desarrollado para la limpieza de motores y cadenas. Es capaz de disolver todo tipo de gra- situd, dejando las superfi cies limpias y relucientes. No contiene cloruros.",
    image: "/imagenes/carwo_enginewash_500ml.jpg",
    category: "Cosmética Automotor",
  },
  {
    id: 19,
    name: "Viflash y Viflash-LPU",
    descripcion:
      "Líquido lava parabrisas, ideal para eli- minar la suciedad y remover la grasitud de parabrisas, luneta trasera y vidrios en general. Se presenta en 2 versiones: Ultra concentrado, que rinde 6 litros, y la versión LPU x 5 litros.",
    image: "/imagenes/carwo_viflash-lpu-5-litros.jpg",
    category: "Cosmética Automotor",
  },
  {
    id: 20,
    name: "Emulsión-46 y LPU",
    descripcion:
      "Es una silicona líquida para utilizar en múltiples aplicaciones: en rubro automotor, industrial, lubricación y en industria textil, etc. Su versión concentrada posee un 60% de sólidos, mientras que la versión LPU contiene un 30%.",
    image: "/imagenes/carwo_emulsion-46-lpu-250ml.jpg",
    category: "Cosmética Automotor",
  },
  {
    id: 21,
    name: "Regri LPU - Rosa",
    descripcion:
      "Líquido refrigerante LISTO PARA USAR. ORGÁNICO, ANTICONGELANTE, ANTI-CORROSIVO Y LUBRICANTE. Tipo permanente. A base de glicoles.",
    image: "/imagenes/carwo_refri-lpu_organico_rojo.jpg",
    category: "Líquido refrigerante",
  },
  {
    id: 22,
    name: "Regri LPU - Amarillo",
    descripcion:
      "Líquido refrigerante LISTO PARA USAR. ORGÁNICO, ANTICONGELANTE, ANTI-CORROSIVO Y LUBRICANTE. Tipo permanente. A base de glicoles.",
    image: "/imagenes/carwo_refri-lpu_organico_amarillo.jpg",
    category: "Líquido refrigerante",
  },
  {
    id: 23,
    name: "Regri LPU - Verde",
    descripcion:
      "Líquido refrigerante LISTO PARA USAR. ORGÁNICO, ANTICONGELANTE, ANTI-CORROSIVO Y LUBRICANTE. Tipo permanente. A base de glicoles. Cumple con las exigencias técnicas de todas las automotrices.",
    image: "/imagenes/carwo_refri-lpu_inorganico_verde.jpg",
    category: "Líquido refrigerante",
  },
  {
    id: 24,
    name: "Convertidor",
    descripcion:
      "Compatible con todo tipo de refrigerantes. No altera las propiedades del refrigerante. No afecta a gomas ni bombas de agua. Evita picaduras en superfi cies metálicas. Previene pérdidas de materiales tratados.",
    image: "/imagenes/carwo_convertidor-oxido-500ml.jpg",
    category: "Convertidor de óxido",
  },
  {
    id: 25,
    name: "Flashlight-L9",
    descripcion: "Linterna de 9 Leds.",
    image: "/imagenes/carwo_linterna-l9.jpg",
    category: "Linternas LED",
  },
  {
    id: 26,
    name: "Flashlight-L14",
    descripcion: "Linterna de 14 Leds.",
    image: "/imagenes/carwo_linterna-l14.jpg",
    category: "Linternas LED",
  },
  {
    id: 27,
    name: "Flashlight-P8",
    descripcion: "Linterna Led Profesional.",
    image: "/imagenes/carwo_linterna-p8.jpg",
    category: "Linternas LED",
  },
  {
    id: 28,
    name: "Headlight-Z8C",
    descripcion: "Linterna Led Frontal W3COB.",
    image: "/imagenes/carwo_linterna-z8c.jpg",
    category: "Linternas LED",
  },
  {
    id: 29,
    name: "Precintos de Nylon 6.6",
    descripcion:
      "CARWO Precinto de Nylon se presenta en diferentes largos, anchos y colores neutros. Son ideales para precintado rápido y sencillo. Poseen una gran resistencia a la tracción y se requiere una tijera o alicate para retirarlos. Son fabricados en Nylon 66. Resistentes al calor, al fuego, al ácido y a la erosión. Soportan temperaturas de entre -35°C y 85°C.",
    image: "/imagenes/carwo_precintos.jpg",
    category: "Precintos de Nylon 6.6",
  },
  {
    id: 30,
    name: "Cintas de Embalar",
    descripcion:
      "Sellado seguro y confiable en cualquier situación. Disponibles en color marrón y transparente, nuestras cintas ofrecen resistencia al desgarro, adhesión fuerte y facilidad de aplicación. Para uso doméstico o industrial.",
    image: "/imagenes/carwo_cwct.jpg",
    category: "Cintas de Embalar",
  },
  {
    id: 31,
    name: "Manopla de Microfibra Azul",
    descripcion:
      "Suave y absorbente, durabilidad superior. Perfecto para el lavado del auto, recoge y retiene la suciedad sin rayar la pintura",
    image: "/imagenes/MicroFibra.jpeg",
    category: "Microfibra",
  },
  {
    id: 32,
    name: "Manopla de Microfibra Verde",
    descripcion:
      "Suave y absorbente, durabilidad superior. Perfecto para el lavado del auto, recoge y retiene la suciedad sin rayar la pintura",
    image: "/imagenes/MicroFibra_Verde.jpeg",
    category: "Microfibra",
  },
  {
    id: 33,
    name: "Manopla de Microfibra Naranja",
    descripcion:
      "Suave y absorbente, durabilidad superior. Perfecto para el lavado del auto, recoge y retiene la suciedad sin rayar la pintura",
    image: "/imagenes/MicroFibra_Naranja.jpeg",
    category: "Microfibra",
  },
  {
    id: 34,
    name: "Guante de Microfibra Naranja",
    descripcion:
      "Extremadamente suave. Ideal para la aplicación de ceras y productos de acabado por su contacto suave con la superficie. También es efectiva para hacer lavados rápidos y profundos",
    image: "/imagenes/Guante_MicroFibra_Naranja.jpeg",
    category: "Guante",
  },
  {
    id: 35,
    name: "Toalla lavado y secado",
    descripcion:
      "Incluye una toalla premium y una esponja. Lavado y secados efectivos especialmente para la carrocería del auto",
    image: "/imagenes/Toalla_lavado_secado.jpeg",
    category: "Toalla",
  },
  {
    id: 36,
    name: "Microfibra alta densidad",
    descripcion:
      "Super absorbente. Ideal para el secado de la carrocería. Su composición de alta densidad permite absorber rápidamente grandes cantidades de agua.",
    image: "/imagenes/MicroFibra_Alta_densidad.jpeg",
    category: "Microfibra",
  },
  {
    id: 37,
    name: "Kit lavado",
    descripcion:
      "Incluye una toalla premium, una esponja y una gamuza para vidrios. Ideal para la limpieza detallada de su vehículo.",
    image: "/imagenes/Kit_toa_espo_micro.jpeg",
    category: "Kit Lavado",
  },
  {
    id: 38,
    name: "Micro fibra extreme",
    descripcion:
      "Micro fibra Premium. Extrema densidad y ultra absorbente. Diseñada para un secado ultra rápido y un acabado minucioso de detalles. Formulada especialmente para todo tipo de superficies delicadas.",
    image: "/imagenes/MicroFibra_extreme.jpeg",
    category: "Microfibra",
  },
  {
    id: 39,
    name: "Esponja Azul",
    descripcion: "Esponja de alta calidad. Muy resistente y duradera",
    image: "/imagenes/Esponja_azul.jpeg",
    category: "Esponja",
  },
  {
    id: 40,
    name: "Esponja Verde",
    descripcion: "Esponja de alta calidad. Muy resistente y duradera",
    image: "/imagenes/Esponja_verde.jpeg",
    category: "Esponja",
  },
  {
    id: 41,
    name: "Esponja Naranja",
    descripcion: "Esponja de alta calidad. Muy resistente y duradera",
    image: "/imagenes/Esponja_naranja.jpeg",
    category: "Esponja",
  },
  {
    id: 42,
    name: "Paño Gamusa",
    descripcion:
      "Ligero y suave al tacto. Diseñado exclusivamente para limpieza de vidrios y espejos, asi como para la aplicación de productos líquidos sin dejar rayas ni vetas.",
    image: "/imagenes/Pano_gamuza.jpeg",
    category: "Paño",
  },
  {
    id: 43,
    name: "Paño Microfibra",
    descripcion:
      "Facilita la recolección de partículas de suciedad. Ideal para la limpieza general y detallada del interior del vehículo.",
    image: "/imagenes/Pano_microfibra.jpeg",
    category: "Paño",
  },
  {
    id: 44,
    name: "Paño Microfibra Naranja",
    descripcion:
      "Paño de microfibra multiuso. Duradera y absorbente. Perfecta para la limpieza general y detallada del vehículo. También sirve para uso doméstico.",
    image: "/imagenes/Pano_microfibra_naranja.jpeg",
    category: "Paño",
  },
  {
    id: 45,
    name: "Carwo",
    descripcion: "Carwo",
    image: "/imagenes/Producto_carwo.jpeg",
    category: "Llave",
  },
  {
    id: 46,
    name: "Carwo Pinza Saca Filtros",
    descripcion: "Pinza para filtros de combustible. Para remover clip de filtros de combustible diesel e inyección.",
    image: "/imagenes/Pinza_saca_filtros.jpeg",
    category: "Pinza",
  },
  {
    id: 47,
    name: "Saca filtros",
    descripcion: "Pinza saca filtros para unidad sellada. Para filtros de aceite de 9'",
    image: "/imagenes/Sacafiltros.jpeg",
    category: "Pinza",
  },
]

export default productosData

