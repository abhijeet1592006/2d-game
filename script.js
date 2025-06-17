let x=100;
let y=200;
let speed=2;
h=document.getElementById("hb")
character=document.getElementById("ch")



const keys={
    "ArrowUp":false,
    "ArrowDown":false,
    "ArrowLeft":false,
    "ArrowRight":false,
}

addEventListener("keydown",function(e){
    if(e.key in keys){
        keys[e.key]=true;
    }
})
addEventListener("keyup",function(e){
    if(e.key in keys){
        keys[e.key]=false;
    }
    character.style.backgroundImage="url('/assets/v-2/charcter/walking/1.gif')";

})


function update(){

    if(keys.ArrowUp){
        y-=speed;
        character.style.backgroundImage="url('/assets/v-2/charcter/walking/2.gif')";
    }
    if(keys.ArrowDown){
        character.style.backgroundImage="url('/assets/v-2/charcter/walking/1.gif')";

        y+=speed;
    }
    if(keys.ArrowLeft){
        x-=speed;
        character.style.backgroundImage="url('/assets/v-2/charcter/walking/4.gif')";

    }
    if(keys.ArrowRight){
        x+=speed;
        character.style.backgroundImage="url('/assets/v-2/charcter/walking/3.gif')";

    }

    if(y>226){
        h.style.zIndex=0;
    }
    if(y<226){
        h.style.zIndex=2;
    }
    character.style.top=y+"px";
    character.style.left=x+"px";
    requestAnimationFrame(update)
}

update()






// Lock Zooming on Desktop
window.addEventListener('wheel', function(e) {
    if (e.ctrlKey) {
        e.preventDefault();
    }
}, { passive: false });

window.addEventListener('keydown', function(e) {
    // Prevent zoom with Ctrl + (+ or - or = or 0)
    if (e.ctrlKey && (e.key === '+' || e.key === '-' || e.key === '=' || e.key === '0')) {
        e.preventDefault();
    }
});
