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
    var x1 = x-50;
    var y1 = y-100; 
    ctx.fillRect(x1,y1,100,150);
}

var add_Circle = function(e){
    ctx.beginPath();
    
    var x = e.clientX;
    var y = e.clientY;

    ctx.lineTo(x,y);
    ctx.arc(x,y,25,0,2*Math.PI);
    ctx.stroke();
}
    


slate.addEventListener("click", add_Circle);


