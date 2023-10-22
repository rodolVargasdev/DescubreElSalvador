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

    mainTitleCosas.innerHTML = "Usulután";
    cosasDepTitle1.innerText = "Visitar Iglesias Históricas"
    cosasDepTitle2.innerText = "Reserva de Biosfera Jiquilisco"
    cosasDepTitle3.innerText = "Fiestas Locales"
    cosasDepText1.innerText = "Usulután tiene varias iglesias históricas con arquitectura interesante. La Iglesia de San Agustín en Usulután y la Iglesia de San Simón en Santa María son ejemplos notables."
    cosasDepText2.innerText = "Esta reserva es una zona protegida y rica en biodiversidad. Ofrece oportunidades para caminatas, observación de aves y paseos en kayak a través de los manglares."
    cosasDepText3.innerText = "Busca eventos y festivales locales que puedan estar teniendo lugar durante tu visita, como las fiestas patronales que a menudo presentan música en vivo, danzas y actividades culturales."
    console.log("hola");
})

depLaPaz.addEventListener("mouseover", () => {

    mainTitleCosas.innerHTML = "Usulután";
    cosasDepTitle1.innerText = "Visitar Iglesias Históricas"
    cosasDepTitle2.innerText = "Reserva de Biosfera Jiquilisco"
    cosasDepTitle3.innerText = "Fiestas Locales"
    cosasDepText1.innerText = "Usulután tiene varias iglesias históricas con arquitectura interesante. La Iglesia de San Agustín en Usulután y la Iglesia de San Simón en Santa María son ejemplos notables."
    cosasDepText2.innerText = "Esta reserva es una zona protegida y rica en biodiversidad. Ofrece oportunidades para caminatas, observación de aves y paseos en kayak a través de los manglares."
    cosasDepText3.innerText = "Busca eventos y festivales locales que puedan estar teniendo lugar durante tu visita, como las fiestas patronales que a menudo presentan música en vivo, danzas y actividades culturales."
    console.log("hola");
})

depCuscatlan.addEventListener("mouseover", () => {

    mainTitleCosas.innerHTML = "Usulután";
    cosasDepTitle1.innerText = "Visitar Iglesias Históricas"
    cosasDepTitle2.innerText = "Reserva de Biosfera Jiquilisco"
    cosasDepTitle3.innerText = "Fiestas Locales"
    cosasDepText1.innerText = "Usulután tiene varias iglesias históricas con arquitectura interesante. La Iglesia de San Agustín en Usulután y la Iglesia de San Simón en Santa María son ejemplos notables."
    cosasDepText2.innerText = "Esta reserva es una zona protegida y rica en biodiversidad. Ofrece oportunidades para caminatas, observación de aves y paseos en kayak a través de los manglares."
    cosasDepText3.innerText = "Busca eventos y festivales locales que puedan estar teniendo lugar durante tu visita, como las fiestas patronales que a menudo presentan música en vivo, danzas y actividades culturales."
    console.log("hola");
})

depCabañas.addEventListener("mouseover", () => {

    mainTitleCosas.innerHTML = "Usulután";
    cosasDepTitle1.innerText = "Visitar Iglesias Históricas"
    cosasDepTitle2.innerText = "Reserva de Biosfera Jiquilisco"
    cosasDepTitle3.innerText = "Fiestas Locales"
    cosasDepText1.innerText = "Usulután tiene varias iglesias históricas con arquitectura interesante. La Iglesia de San Agustín en Usulután y la Iglesia de San Simón en Santa María son ejemplos notables."
    cosasDepText2.innerText = "Esta reserva es una zona protegida y rica en biodiversidad. Ofrece oportunidades para caminatas, observación de aves y paseos en kayak a través de los manglares."
    cosasDepText3.innerText = "Busca eventos y festivales locales que puedan estar teniendo lugar durante tu visita, como las fiestas patronales que a menudo presentan música en vivo, danzas y actividades culturales."
    console.log("hola");
})

depChalatenango.addEventListener("mouseover", () => {

    mainTitleCosas.innerHTML = "Usulután";
    cosasDepTitle1.innerText = "Visitar Iglesias Históricas"
    cosasDepTitle2.innerText = "Reserva de Biosfera Jiquilisco"
    cosasDepTitle3.innerText = "Fiestas Locales"
    cosasDepText1.innerText = "Usulután tiene varias iglesias históricas con arquitectura interesante. La Iglesia de San Agustín en Usulután y la Iglesia de San Simón en Santa María son ejemplos notables."
    cosasDepText2.innerText = "Esta reserva es una zona protegida y rica en biodiversidad. Ofrece oportunidades para caminatas, observación de aves y paseos en kayak a través de los manglares."
    cosasDepText3.innerText = "Busca eventos y festivales locales que puedan estar teniendo lugar durante tu visita, como las fiestas patronales que a menudo presentan música en vivo, danzas y actividades culturales."
    console.log("hola");
})

depSanSalvador.addEventListener("mouseover", () => {

    mainTitleCosas.innerHTML = "Usulután";
    cosasDepTitle1.innerText = "Visitar Iglesias Históricas"
    cosasDepTitle2.innerText = "Reserva de Biosfera Jiquilisco"
    cosasDepTitle3.innerText = "Fiestas Locales"
    cosasDepText1.innerText = "Usulután tiene varias iglesias históricas con arquitectura interesante. La Iglesia de San Agustín en Usulután y la Iglesia de San Simón en Santa María son ejemplos notables."
    cosasDepText2.innerText = "Esta reserva es una zona protegida y rica en biodiversidad. Ofrece oportunidades para caminatas, observación de aves y paseos en kayak a través de los manglares."
    cosasDepText3.innerText = "Busca eventos y festivales locales que puedan estar teniendo lugar durante tu visita, como las fiestas patronales que a menudo presentan música en vivo, danzas y actividades culturales."
    console.log("hola");
})

depLaLibertad.addEventListener("mouseover", () => {

    mainTitleCosas.innerHTML = "Usulután";
    cosasDepTitle1.innerText = "Visitar Iglesias Históricas"
    cosasDepTitle2.innerText = "Reserva de Biosfera Jiquilisco"
    cosasDepTitle3.innerText = "Fiestas Locales"
    cosasDepText1.innerText = "Usulután tiene varias iglesias históricas con arquitectura interesante. La Iglesia de San Agustín en Usulután y la Iglesia de San Simón en Santa María son ejemplos notables."
    cosasDepText2.innerText = "Esta reserva es una zona protegida y rica en biodiversidad. Ofrece oportunidades para caminatas, observación de aves y paseos en kayak a través de los manglares."
    cosasDepText3.innerText = "Busca eventos y festivales locales que puedan estar teniendo lugar durante tu visita, como las fiestas patronales que a menudo presentan música en vivo, danzas y actividades culturales."
    console.log("hola");
})

depSonsonate.addEventListener("mouseover", () => {

    mainTitleCosas.innerHTML = "Usulután";
    cosasDepTitle1.innerText = "Visitar Iglesias Históricas"
    cosasDepTitle2.innerText = "Reserva de Biosfera Jiquilisco"
    cosasDepTitle3.innerText = "Fiestas Locales"
    cosasDepText1.innerText = "Usulután tiene varias iglesias históricas con arquitectura interesante. La Iglesia de San Agustín en Usulután y la Iglesia de San Simón en Santa María son ejemplos notables."
    cosasDepText2.innerText = "Esta reserva es una zona protegida y rica en biodiversidad. Ofrece oportunidades para caminatas, observación de aves y paseos en kayak a través de los manglares."
    cosasDepText3.innerText = "Busca eventos y festivales locales que puedan estar teniendo lugar durante tu visita, como las fiestas patronales que a menudo presentan música en vivo, danzas y actividades culturales."
    console.log("hola");
})

depSantaAna.addEventListener("mouseover", () => {

    mainTitleCosas.innerHTML = "Usulután";
    cosasDepTitle1.innerText = "Visitar Iglesias Históricas"
    cosasDepTitle2.innerText = "Reserva de Biosfera Jiquilisco"
    cosasDepTitle3.innerText = "Fiestas Locales"
    cosasDepText1.innerText = "Usulután tiene varias iglesias históricas con arquitectura interesante. La Iglesia de San Agustín en Usulután y la Iglesia de San Simón en Santa María son ejemplos notables."
    cosasDepText2.innerText = "Esta reserva es una zona protegida y rica en biodiversidad. Ofrece oportunidades para caminatas, observación de aves y paseos en kayak a través de los manglares."
    cosasDepText3.innerText = "Busca eventos y festivales locales que puedan estar teniendo lugar durante tu visita, como las fiestas patronales que a menudo presentan música en vivo, danzas y actividades culturales."
    console.log("hola");
})

depAhuachapan.addEventListener("mouseover", () => {

    mainTitleCosas.innerHTML = "Usulután";
    cosasDepTitle1.innerText = "Visitar Iglesias Históricas"
    cosasDepTitle2.innerText = "Reserva de Biosfera Jiquilisco"
    cosasDepTitle3.innerText = "Fiestas Locales"
    cosasDepText1.innerText = "Usulután tiene varias iglesias históricas con arquitectura interesante. La Iglesia de San Agustín en Usulután y la Iglesia de San Simón en Santa María son ejemplos notables."
    cosasDepText2.innerText = "Esta reserva es una zona protegida y rica en biodiversidad. Ofrece oportunidades para caminatas, observación de aves y paseos en kayak a través de los manglares."
    cosasDepText3.innerText = "Busca eventos y festivales locales que puedan estar teniendo lugar durante tu visita, como las fiestas patronales que a menudo presentan música en vivo, danzas y actividades culturales."

});
