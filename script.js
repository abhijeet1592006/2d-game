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

function collison(playerId,objectId){

    obj1=document.getElementById(playerId).getBoundingClientRect();
    obj2=document.getElementById(objectId).getBoundingClientRect();


    if(obj1.right>obj2.left&&
        obj2.right>obj1.left+20&&
        obj1.top+70<obj2.bottom&&
        obj2.top<obj1.bottom
    ){
        return true
    }

}
function update(){
    prevx=x;
    prevy=y;
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




    if (collison("ch","ha")){
        x=prevx;
        y=prevy;
        character.style.top=y+"px";
        character.style.left=x+"px";
    }



    z("ha","ch")
 
    requestAnimationFrame(update)
}

update()




//this will change the zindex of object near player to give a 3d look
function z(targetid,playerid){
    let obj=document.getElementById(targetid).getBoundingClientRect()
    let ob=document.getElementById(targetid)

    let player=document.getElementById(playerid).getBoundingClientRect()

    if(player.bottom<obj.bottom){
        ob.style.zIndex=2
        
    }
    else{
        ob.style.zIndex=0


    }


    
}


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
