var canvas = document.getElementById("slate");
var ctx = canvas.getContext("2d");

var clearbtn = document.getElementById("clear");




var clear_canvas = function(){
    ctx.clearRect(0,0,600,600);
    ctx.beginPath();
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
    
    
    var x = e.clientX;
    var y = e.clientY;
    var x1 = x;
    var y1 = y;

    //the lines aren't connecting the circles perfectly at the center
    //can this be fixed?
    ctx.arc(x1,y1,25,0,2*Math.PI);
    ctx.moveTo(x1,y1);
    
    ctx.fillStyle = '#ff00ff'
    ctx.fill();
    // the above fill function fills in the whole object with color weirdly
    // can we get ONLY the circles to fill with color?
    ctx.stroke();
    
    
}



slate.addEventListener("click", add_Circle);


