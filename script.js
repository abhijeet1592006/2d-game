let x=100;
let y=200;
let speed=2;
h=document.getElementById("hb")
character=document.getElementById("ch")



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
// async function mess() {
//     await sleep(500)
//     document.getElementById("message").style.display="block";  



//     document.getElementById("message").innerText="HELLO!!";

//     await sleep(2000)
//     document.getElementById("message").style.display="none";  
// } 
function start(){
    document.getElementById("tb").style.display="none";
    // mess()

}


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
    character.style.backgroundImage="url('assets/v-2/charcter/walking/1.gif')";

})

function collison(playerId,objectId){

    obj1=document.getElementById(playerId).getBoundingClientRect();
    obj2=document.getElementById(objectId).getBoundingClientRect();

   
    if(obj1.right-20>obj2.left&&
        obj2.right>obj1.left+20&&
        obj1.top+70<obj2.bottom&&
        obj2.top<obj1.bottom-70
    ){
        return true
    }

}
worldObjects=["ha","hb","hc","tree-1","tree-2","light","b-1","b-2"]//id of objects in world
function update(){
    prevx=x;
    prevy=y;
    if(keys.ArrowUp){
        y-=speed;
        character.style.backgroundImage="url('assets/v-2/charcter/walking/2.gif')";
    }
    if(keys.ArrowDown){
        character.style.backgroundImage="url('assets/v-2/charcter/walking/1.gif')";

        y+=speed;
    }
    if(keys.ArrowLeft){
        x-=speed;
        character.style.backgroundImage="url('assets/v-2/charcter/walking/4.gif')";

    }
    if(keys.ArrowRight){
        x+=speed;
        character.style.backgroundImage="url('assets/v-2/charcter/walking/3.gif')";

    }

    // if(y>226){
    //     h.style.zIndex=0;
    // }
    // if(y<226){
    //     h.style.zIndex=2;
    // }
    character.style.top=y+"px";
    character.style.left=x+"px";



    //for checking collison here "ch" is id of player

    for (i of worldObjects){
        if (collison("ch",i)){

            x=prevx;
            y=prevy;
            character.style.top=y+"px";
            character.style.left=x+"px";
        }
        z(i,"ch")
    

    }
    
    //for bounding area
    if (y<0 || x<0 || y>window.innerHeight-80 || x>window.innerWidth-50){
        x=prevx;
        y=prevy;
        character.style.top=y+"px";
        character.style.left=x+"px";

    }

    
 
    requestAnimationFrame(update)
}

update()




//this will change the zindex of object near player to give a 3d look
function z(targetid,playerid){
    let obj=document.getElementById(targetid).getBoundingClientRect()
    let ob=document.getElementById(targetid)

    let player=document.getElementById(playerid).getBoundingClientRect()

    if(player.bottom>obj.bottom){
        ob.style.zIndex=0
        
    }
    else{
        ob.style.zIndex=2


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
