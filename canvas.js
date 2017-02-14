var canvas = document.getElementById("slate");
var ctx = canvas.getContext("2d");

var clearbtn = document.getElementById("clear");




var clear_canvas = function(){
    ctx.clearRect(0,0,600,600);
}
    

clearbtn.addEventListener("click", clear_canvas);

var add_Rect = function(e){
    var x = e.clientX;
    var y = e.clientY;
    var x1 = x-100;
    var y1 = y-125; 
    ctx.fillRect(x1,y1,100,50);
}

var add_Circle = function(e){
    ctx.beginPath();
    
    var x = e.clientX;
    var y = e.clientY;

    x = 250;
    y = 250;
    ctx.lineTo(x,y);
    ctx.arc(x,y,25,0,2*Math.PI);
    ctx.stroke();
    


slate.addEventListener("click", add_Circle);


