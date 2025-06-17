let x=0;
let y=0;
let speed=5;
character=document.getElementById("ch")



const keys={
    "ArrowUp":false,
    "ArrowDown":false,
    "ArrowLeft":false,
    "ArrowRight":false,
}

addEventListener("keydown",function(e){
    console.log(e.key)
    if(e.key in keys){
        keys[e.key]=true;
    }
})
addEventListener("keyup",function(e){
    if(e.key in keys){
        keys[e.key]=false;
    }
})


function update(){

    if(keys.ArrowUp){
        y-=speed;
    }
    if(keys.ArrowDown){
        y+=speed;
    }
    if(keys.ArrowLeft){
        x-=speed;
    }
    if(keys.ArrowRight){
        x+=speed;
    }

    character.style.top=y+"px";
    character.style.left=x+"px";
    requestAnimationFrame(update)
}

update()