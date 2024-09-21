const title = "Creaciones May";
const email = "romeromaritza972@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy muy interesado en tus productos de " + title + " y me gustaría recibir más información sobre ellos. Espero poder hablar pronto contigo para aclarar algunas dudas. ¡Gracias!"
);
const numeroWhatsApp = "+573226603264";

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "Creaciones May ofrece una amplia gama de productos de lencería de hogar, bisutería y lencería. Nos destacamos por nuestra calidad y atención al detalle, garantizando productos únicos y personalizados para cada cliente.",
        description2: "Nuestra misión es brindar productos que no solo cumplan con tus expectativas, sino que las superen. En Creaciones May, nos dedicamos a ofrecer lencería de hogar y bisutería con el toque especial que solo nosotros sabemos dar."
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan: {
            p1: "No seas la copia de nadie.",
            p2: "Mejor sé la inspiración de muchos."
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/profile.php?id=100009135271755&mibextid=ZbWKwL",
        instagram: "https://www.instagram.com/",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};

export default textos;
