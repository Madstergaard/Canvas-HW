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
    var x2 = x-50;
    var y2 = y-75;
    ctx.fillRect(x1,y1,x2,y2);
}


slate.addEventListener("click", add_Rect);


