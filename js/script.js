const handleMenu = document.getElementById('showMenu');
const lateralMenu = document.getElementById('lateralNav')
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
