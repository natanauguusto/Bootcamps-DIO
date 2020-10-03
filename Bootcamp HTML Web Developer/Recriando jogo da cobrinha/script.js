let canvas=document.getElementById("snake");
let context=canvas.getContext("2d")
let box=32;
let snake=[];
let direction="";
snake[0]={
    x:8*box,
    y:8*box
}

let food={
    x:pointFood(),
    y:pointFood()
}

function criarBG(){
    context.fillStyle="lightgreen";
    context.fillRect(0,0,16*box,16*box);
}
function criarCobrinha(){
    for(i=0;i<snake.length;i++){
        context.fillStyle="green";
        context.fillRect(snake[i].x,snake[i].y,box,box);
    }
}
function update(event){
    if(event.keyCode==37 && direction !='right')    direction="left"; 
    if(event.keyCode==38 && direction !='down')  direction='up';
    if(event.keyCode==39 && direction !='left')  direction="right";
    if(event.keyCode==40 && direction !='up')    direction="down";    
}
function pointFood(){
    return Math.floor(Math.random()*15+1)*box;
}
function iniciarJogo(){
    if(snake[0].x > 15*box && direction =="right")snake[0].x=0;
    if(snake[0].x< 0 && direction=='left') snake[0].x=16*box;
    if(snake[0].y > 15*box && direction=="down")snake[0].y=0;
    if(snake[0].y< 0 && direction=="up") snake[0].y=16*box;
    criarBG();
    criarCobrinha();    
  
    let snakeX=snake[0].x;
    let snakeY=snake[0].y;
    console.log("x:"+snakeX+",y:"+snakeY);
    
    if(direction=="right")snakeX+=box;
    if(direction=="left")snakeX-=box;
    if(direction=="up")snakeY-=box;
    if(direction=="down")snakeY+=box;
    
    snake.pop();
    let newHead = {
        x:snakeX ,
        y:snakeY
    }
    snake.unshift(newHead);
}
function drawFood(){
    context.fillStyle='red';
    context.fillRect(food.x,food.y,box,box);

}


let jogo=setInterval(function(){
    document.addEventListener('keydown',update);
    iniciarJogo();
    drawFood();
},100);
// Parte 1,2,3,4 ja feito
