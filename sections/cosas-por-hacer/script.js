// Responsive stuff
const handleMenu = document.getElementById('showMenu');
const lateralMenu = document.getElementById('lateralNav');

// Texto dinámico
const depUsulutan = document.getElementById('dep1');
const depSanMiguel = document.getElementById('dep2');
const depMorazan = document.getElementById('dep3');
const depLaUnion = document.getElementById('dep4');
const depSanVicente = document.getElementById('dep5');
const depLaPaz = document.getElementById('dep6');
const depCuscatlan = document.getElementById('dep7');
const depCabañas = document.getElementById('dep8');
const depChalatenango = document.getElementById('dep9');
const depSanSalvador = document.getElementById('dep10');
const depLaLibertad = document.getElementById('dep11');
const depSonsonate = document.getElementById('dep12');
const depSantaAna = document.getElementById('dep13');
const depAhuachapan = document.getElementById('dep14');

let cosasDepTitle1 = document.getElementById('cosasdep__title1');
let cosasDepTitle2 = document.getElementById('cosasdep__title2');
let cosasDepTitle3 = document.getElementById('cosasdep__title3');
let cosasDepText1 = document.getElementById('cosasdep__info1');
let cosasDepText2 = document.getElementById('cosasdep__info2');
let cosasDepText3 = document.getElementById('cosasdep__info3');
let mainTitleCosas = document.getElementById('main_title_cosas')

let presionado = false;

handleMenu.addEventListener("click", () => {
    
    if(!presionado){
        lateralMenu.className = 'lateral__nav';
    } 
    else{
        lateralMenu.className = 'lateral__nav dissapear';
    }
    presionado = !presionado;

    console.log(lateralMenu.classList);
});



depUsulutan.addEventListener("mouseover", () => {

    mainTitleCosas.innerHTML = "Usulután";
    cosasDepTitle1.innerText = "Visitar Iglesias Históricas"
    cosasDepTitle2.innerText = "Reserva de Biosfera Jiquilisco"
    cosasDepTitle3.innerText = "Fiestas Locales"
    cosasDepText1.innerText = "Usulután tiene varias iglesias históricas con arquitectura interesante. La Iglesia de San Agustín en Usulután y la Iglesia de San Simón en Santa María son ejemplos notables."
    cosasDepText2.innerText = "Esta reserva es una zona protegida y rica en biodiversidad. Ofrece oportunidades para caminatas, observación de aves y paseos en kayak a través de los manglares."
    cosasDepText3.innerText = "Busca eventos y festivales locales que puedan estar teniendo lugar durante tu visita, como las fiestas patronales que a menudo presentan música en vivo, danzas y actividades culturales."
    console.log("hola");
})

depSanMiguel.addEventListener("mouseover", () => {

    mainTitleCosas.innerHTML = "San Miguel";
    cosasDepTitle1.innerText = "Observación de Aves"
    cosasDepTitle2.innerText = "Cerro El Tigre"
    cosasDepTitle3.innerText = "Parque Acuático Amapulapa"
    cosasDepText1.innerText = "San Miguel es un lugar ideal para la observación de aves, especialmente en áreas naturales como el Parque Nacional El Imposible y la Reserva Natural Montecristo."
    cosasDepText2.innerText = "Para los amantes del senderismo y la aventura, subir al Cerro El Tigre ofrece vistas panorámicas impresionantes de la región."
    cosasDepText3.innerText = "Si viajas con la familia, este parque acuático es un lugar divertido para disfrutar de toboganes, piscinas y diversión bajo el sol."
    console.log("hola");
})

depMorazan.addEventListener("mouseover", () => {

    mainTitleCosas.innerHTML = "Morazán";
    cosasDepTitle1.innerText = "Ruta de la Paz"
    cosasDepTitle2.innerText = "Cascada Los Tercios"
    cosasDepTitle3.innerText = "Cultura Lenca"
    cosasDepText1.innerText = "Morazán desempeñó un papel importante en el conflicto armado en El Salvador, y la Ruta de la Paz es un recorrido que te lleva a lugares históricos relacionados con la guerra civil, incluyendo museos, monumentos y sitios conmemorativos que recuerdan el proceso de paz."
    cosasDepText2.innerText = "Esta reserva es una zona protegida y rica en biodiversidad. Ofrece oportunidades para caminatas, observación de aves y paseos en kayak a través de los manglares.Una de las cascadas más impresionantes de El Salvador se encuentra en Morazán. La Cascada Los Tercios es un lugar pintoresco para hacer senderismo y disfrutar de la naturaleza."
    cosasDepText3.innerText = "Aprende sobre la cultura lenca, una de las comunidades indígenas en El Salvador, visitando pueblos como Cacaopera y Meanguera."
    console.log("hola");
})

depLaUnion.addEventListener("mouseover", () => {

    mainTitleCosas.innerHTML = "La Unión";
    cosasDepTitle1.innerText = "Paseos en Kayak"
    cosasDepTitle2.innerText = "Gastronomía de Mariscos"
    cosasDepTitle3.innerText = "Fiestas Locales"
    cosasDepText1.innerText = "Explora los manglares y estuarios en La Unión a través de paseos en kayak. Es una forma relajante de disfrutar de la belleza natural y observar la vida silvestre."
    cosasDepText2.innerText = "Prueba los deliciosos mariscos frescos en los restaurantes locales. La Unión es famosa por su comida de mar, así que no te pierdas platos como ceviche, camarones a la diabla y pescado a la plancha."
    cosasDepText3.innerText = "Busca eventos y festivales locales que puedan estar teniendo lugar durante tu visita, como las fiestas patronales que a menudo presentan música en vivo, danzas y actividades culturales."
    console.log("hola");
})

depSanVicente.addEventListener("mouseover", () => {

    mainTitleCosas.innerHTML = "San Vicente";
    cosasDepTitle1.innerText = "Mercados Locales"
    cosasDepTitle2.innerText = "Fiestas Patronales"
    cosasDepTitle3.innerText = "Río Lempa"
    cosasDepText1.innerText = "Visita los mercados locales en San Vicente para experimentar la vida cotidiana de la gente de la región. Puedes comprar productos locales, artesanías y disfrutar de la atmósfera vibrante."
    cosasDepText2.innerText = "Investiga si hay festivales o fiestas locales programadas durante tu visita. Las festividades suelen incluir música en vivo, danzas folklóricas y actividades culturales."
    cosasDepText3.innerText = "Busca eventos y festivales locales que puedan estar teniendo lugar durante tu visita, como las fiestas patronales que a menudo presentan música en vivo, danzas y actividades culturales."
    console.log("hola");
})

depLaPaz.addEventListener("mouseover", () => {

    mainTitleCosas.innerHTML = "La Paz";
    cosasDepTitle1.innerText = "Visita a Suchitoto"
    cosasDepTitle2.innerText = "Fiestas y Eventos Locales"
    cosasDepTitle3.innerText = "Lago de Suchitlán"
    cosasDepText1.innerText = "Suchitoto es una ciudad colonial encantadora que alberga arquitectura histórica, galerías de arte y tiendas de artesanía. Puedes pasear por sus calles empedradas y disfrutar de la atmósfera tranquila."
    cosasDepText2.innerText = "Investiga si hay festivales o eventos locales que puedan estar teniendo lugar durante tu visita. Las festividades a menudo incluyen música en vivo, danzas y actividades culturales."
    cosasDepText3.innerText = "Este lago artificial es un lugar ideal para la observación de aves y la navegación. Puedes tomar un paseo en bote por el lago y admirar la fauna y flora local."
    console.log("hola");
})

depCuscatlan.addEventListener("mouseover", () => {

    mainTitleCosas.innerHTML = "Cuscatlán";
    cosasDepTitle1.innerText = "Visita a Cojutepeque"
    cosasDepTitle2.innerText = "Caminata por el Parque Balboa"
    cosasDepTitle3.innerText = "Feria de Agosto en Cojutepeque"
    cosasDepText1.innerText = "Explora la ciudad de Cojutepeque, que es la cabecera del departamento de Cuscatlán. Puedes visitar la iglesia de San Esteban, que data del siglo XIX, y pasear por la plaza central."
    cosasDepText2.innerText = "El Parque Balboa en Cojutepeque es un lugar agradable para dar un paseo, hacer ejercicio o disfrutar de un picnic en un entorno tranquilo."
    cosasDepText3.innerText = "Si visitas en agosto, no te pierdas la Feria de Agosto de Cojutepeque, que incluye eventos culturales, conciertos y actividades de entretenimiento."
    console.log("hola");
})

depCabañas.addEventListener("mouseover", () => {

    mainTitleCosas.innerHTML = "Cabañas";
    cosasDepTitle1.innerText = "Cerro Miramundo"
    cosasDepTitle2.innerText = "Visita a Ilobasco"
    cosasDepTitle3.innerText = "Río Sumpul"
    cosasDepText1.innerText = "Otra opción de senderismo es el Cerro Miramundo, que ofrece vistas espectaculares de la región. Es especialmente popular para la observación de aves."
    cosasDepText2.innerText = "La ciudad de Ilobasco es conocida por su cerámica artesanal. Puedes visitar talleres y tiendas locales para adquirir piezas de cerámica hechas a mano."
    cosasDepText3.innerText = "Realiza un recorrido en bote por el Río Sumpul, que forma parte de la frontera entre El Salvador y Honduras. Este río es un lugar impresionante para la observación de aves y la belleza escénica."
    console.log("hola");
})

depChalatenango.addEventListener("mouseover", () => {

    mainTitleCosas.innerHTML = "Chalatenango";
    cosasDepTitle1.innerText = "Visita a La Palma"
    cosasDepTitle2.innerText = "Pintura de Ataco"
    cosasDepTitle3.innerText = "Cascadas de Agua Caliente"
    cosasDepText1.innerText = "Explora el pintoresco pueblo de La Palma, famoso por su artesanía en madera pintada a mano. Puedes visitar talleres locales y adquirir obras de arte únicas."
    cosasDepText2.innerText = " El pueblo de Ataco es conocido por sus murales y pinturas callejeras coloridas. Puedes explorar estas obras de arte mientras paseas por las calles."
    cosasDepText3.innerText = "Estas cascadas en Nueva Trinidad ofrecen una experiencia refrescante. Puedes nadar en las piscinas naturales y disfrutar del entorno natural."
    console.log("hola");
})

depSanSalvador.addEventListener("mouseover", () => {

    mainTitleCosas.innerHTML = "San Salvador";
    cosasDepTitle1.innerText = "Catedral Metropolitana de San Salvador"
    cosasDepTitle2.innerText = "Museo de Arte de El Salvador (MARTE)"
    cosasDepTitle3.innerText = "Mercado Central"
    cosasDepText1.innerText = "Visita la Catedral Metropolitana, un icono arquitectónico de la ciudad. Puedes explorar su interior y disfrutar de su impresionante belleza."
    cosasDepText2.innerText = "Este museo alberga una extensa colección de arte salvadoreño e internacional. Es un lugar ideal para apreciar la cultura y la historia del país a través del arte."
    cosasDepText3.innerText = "Explora el Mercado Central de San Salvador, donde puedes encontrar productos locales, artesanías, recuerdos y disfrutar de la comida típica salvadoreña."
    console.log("hola");
})

depLaLibertad.addEventListener("mouseover", () => {

    mainTitleCosas.innerHTML = "La Libertad";
    cosasDepTitle1.innerText = "Surf"
    cosasDepTitle2.innerText = "Observación de Tortugas"
    cosasDepTitle3.innerText = "Parque Nacional Walter Thilo Deininger"
    cosasDepText1.innerText = "El Sunzal es uno de los mejores lugares de surf en América Central y atrae a surfistas de todo el mundo. Puedes tomar clases de surf o simplemente observar a los expertos en acción."
    cosasDepText2.innerText = "Durante la temporada adecuada, puedes unirte a tours de observación de tortugas en Playa San Blas y ver tortugas marinas anidando en la playa."
    cosasDepText3.innerText = "Este parque ofrece oportunidades para hacer senderismo en medio de una exuberante selva tropical y observar una gran variedad de vida silvestre, incluyendo monos, aves y mariposas."
    console.log("hola");
})

depSonsonate.addEventListener("mouseover", () => {

    mainTitleCosas.innerHTML = "Sonsonate";
    cosasDepTitle1.innerText = "Termas de Santa Teresa"
    cosasDepTitle2.innerText = "Feria Gastronómica de Juayúa"
    cosasDepTitle3.innerText = "Reserva Natural Los Cóbanos"
    cosasDepText1.innerText = "Estas aguas termales en Apaneca son conocidas por sus propiedades curativas. Es un lugar ideal para relajarse y disfrutar de un baño caliente en medio de la naturaleza."
    cosasDepText2.innerText = "Si visitas Sonsonate en fin de semana, no te pierdas la famosa Feria Gastronómica de Juayúa, donde puedes probar una variedad de platillos locales y artesanías."
    cosasDepText3.innerText = "Esta reserva natural es un paraíso para los amantes del buceo y el esnórquel. Puedes explorar los arrecifes de coral y admirar la vida marina en aguas cristalinas."
    console.log("hola");
})

depSantaAna.addEventListener("mouseover", () => {

    mainTitleCosas.innerHTML = "Santa Ana";
    cosasDepTitle1.innerText = "Grutas de Taulabe"
    cosasDepTitle2.innerText = "Lago de Coatepeque"
    cosasDepTitle3.innerText = "Festival de las Flores y Palmas"
    cosasDepText1.innerText = "Explora las Grutas de Taulabe en Chalchuapa, un complejo de cuevas y cavernas con estalactitas y estalagmitas impresionantes."
    cosasDepText2.innerText = "Este hermoso lago de cráter ofrece oportunidades para nadar, hacer kayak y disfrutar de actividades acuáticas. También puedes visitar restaurantes con vista al lago para una experiencia relajante."
    cosasDepText3.innerText = "Si visitas en agosto, no te pierdas el Festival de las Flores y Palmas en Panchimalco, un evento cultural con desfiles, danzas y música en vivo."
    console.log("hola");
})

depAhuachapan.addEventListener("mouseover", () => {

    mainTitleCosas.innerHTML = "Ahuachapán";
    cosasDepTitle1.innerText = "Ruta de las Flores"
    cosasDepTitle2.innerText = "Fiestas Patronales"
    cosasDepTitle3.innerText = "Museo de la Ciudad de Ahuachapán"
    cosasDepText1.innerText = "Puedes explorar pueblos pintorescos, admirar murales coloridos y disfrutar de la belleza escénica."
    cosasDepText2.innerText = "Investiga si hay festivales o eventos locales que coincidan con tu visita. Las festividades suelen incluir música en vivo, danzas folklóricas y actividades culturales."
    cosasDepText3.innerText = "Visita el Museo de la Ciudad de Ahuachapán para aprender sobre la historia y la cultura de la región a través de exhibiciones y artefactos históricos."

});
