const products = [
        {
            id: 1,
            name: "Raqueta de tenis Head Speed MP L",
            description: "Ligeramente más pesada que la anterior MP L, lo que mejora la potencia controlable, esta raqueta es aún más ligera que la MP y es ideal para jugadores que buscan más maniobrabilidad y un manejo más fácil.",
            stock: 10,
            price: 430000,
            image: "/image/headSpeedMPL-2.png",
            category:"raquetas"
        },
        {
            id: 2,
            name: "Raqueta Babolat Pure Drive Gen11 ",
            description: "La Pure Drive Gen11 te proporcionará el máximo nivel de potencia para encontrar zonas largas y lograr fácilmente golpes ganadores a la menor oportunidad. Patron de cuerdas 16/19. Peso 300G",
            stock: 15,
            price: 449000,
            image: "/image/babolatPureDriveGen11.png",
            category:"raquetas"
        },
         
        {
            id: 3,
            name: "Raqueta de Tenis Wilson Blade 98",
            description: "El Blade 98 (16x19) V9 tiene una respuesta más nítida y estable que produce una sensación de mayor conexión con la pelota. Con un nuevo acabado mate Emerald Night, el V9 tiene un marco trenzado de grafito + basalto con un mango de fibra de carbono DirectConnect para una mayor estabilidad torsional. También presenta un patrón de encordado abierto con una respuesta más indulgente, que ofrece tiros consistentes y con fácil efecto.",
            stock: 20,
            price: 507000,
            image: "/image/wilsonBlade98-1.png",
            category:"raquetas"

        },
    {
            id: 4,
            name: "Bolso de Tenis Super Tour Red Small Duffle",
            description: "Además del compartimento exclusivo para zapatos y el bolsillo lateral para artículos más pequeños, la bolsa de deporte tiene un nuevo compartimento separado diseñado para una raqueta de tenis. Las asas de transporte acolchadas la hacen cómoda y fácil de transportar.",
            stock: 18,
            price: 174000,
            image: "/image/BolsoW.png",
            category:"bolsos"
        },
    {
            id: 5,
            name: "BOLSO HEAD TOUR BAG XL",
            description: "Espacioso bolso de tenis TOUR RACQUET BAG XL, ahora actualizado, podrás llevar hasta 12 raquetas, además del resto de cosas que necesites. Este bolso, con una nueva forma, incorpora ahora un nuevo acolchado para ofrecer una estabilidad superior. Uno de los tres espaciosos compartimentos principales dispone de la tecnología CCT+ de control térmico, que protege tus raquetas de las temperaturas extremas.",
            stock: 18,
            price: 149000,
            image: "/image/requeteroHead.png",
            category:"bolsos"
        },
     {
            id: 6,
            name: "Raquetero Babolat",
            description: "Creado por y para Rafa, el RH12 Pure Aero Rafa representa todo lo mejor para los jugadores de competición que buscan la combinación definitiva de estilo y rendimiento. Es totalmente isotérmico, está separado en 3 grandes compartimentos, lo que te permitirá organizar y proteger hasta 12 raquetas y 2 pares de zapatillas en un compartimento específico.",
            stock: 18,
            price: 399000,
            image: "/image/raquetero-pure-aero-rafa.png",
            category:"bolsos"
        },
     {
            id: 7,
            name: "Muñequera Black",
            description: "Confeccionadas en un tejido suave, elástico y altamente absorbente, aseguran máxima comodidad sin restringir el movimiento. ¿Cómo puedes jugar sin ella?",
            stock: 18,
            price: 18000,
            image: "/image/munequera-black.png",
            category:"accesorios"
        },
     {
            id: 8,
            name: "Over grip",
            description: "Pro Overgrip Burn, el estándar de overgrips en el juego actual, ofrece una variedad de beneficios que lo distinguen de la competencia. Su filtro súper fino y muy elástico proporciona una sensación excelente durante un período de tiempo prolongado.",
            stock: 18,
            price: 17000,
            image: "/image/overgripWilson.png",
            category:"accesorios"
        },
     {
            id: 9,
            name: "Gorra Microfiber Blue",
            description: "Gracias a su tejido 100 % poliéster, la gorra con el logo clásico de Babolat es muy ligera y absorbe eficazmente la humedad.",
            stock: 18,
            price: 18000,
            image: "/image/cap_babolat_blue.png",
            category:"accesorios"
        },
        
    ]

const getProducts = () => {
    return new Promise((resolve) => {

        setTimeout(() => {
            resolve(products)

        }, 3000);
    })

}
export default getProducts;