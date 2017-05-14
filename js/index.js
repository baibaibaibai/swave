window.onload=function(){
	var canvas = document.getElementById('canvas');
  	var ctx = canvas.getContext('2d');
  	canvas.width = 1300;
  	canvas.height = 500;

	 window.requestAnimFrame = (function(){
	   return window.requestAnimationFrame ||
	    window.webkitRequestAnimationFrame ||
	       window.mozRequestAnimationFrame ||
	       function( callback ){
	        window.setTimeout(callback, 1000 / 60);
	       };
	  })();



	  var step = 0;
	 var lines = ["#45D983", "rgba(0,222,255, 0.2)"];
	  function loop(){
	   ctx.clearRect(0,0,canvas.width,canvas.height);
	   step++;
	   //画3个不同颜色的矩形
	   for(var j = lines.length - 1; j >= 0; j--) {
	     ctx.fillStyle = lines[j];
	     //每个矩形的角度都不同，每个之间相差45度
	     var angle = (step+j*45)*Math.PI/180;
	     var deltaHeight = Math.sin(angle) * 40;
	     var deltaHeightRight = Math.cos(angle) * 40;
	     
	     ctx.beginPath();
	     ctx.moveTo(0, canvas.height/2+deltaHeight);
	     ctx.bezierCurveTo(canvas.width /8, canvas.height/2+deltaHeight-10, canvas.width / 8,canvas.height/2+deltaHeightRight-50, canvas.width/4, canvas.height/2+deltaHeightRight);
	     ctx.bezierCurveTo(canvas.width*3/8, canvas.height/2+deltaHeight-10, canvas.width*3/8,canvas.height/2+deltaHeightRight-50, canvas.width/2, canvas.height/2+deltaHeightRight); 
	     ctx.bezierCurveTo(canvas.width*5/8, canvas.height/2+deltaHeight-10, canvas.width *5/8,canvas.height/2+deltaHeightRight-50, canvas.width*3/4, canvas.height/2+deltaHeightRight);
	     ctx.bezierCurveTo(canvas.width*7/8, canvas.height/2+deltaHeight-10, canvas.width*7/8,canvas.height/2+deltaHeightRight-50, canvas.width, canvas.height/2+deltaHeightRight);
	     // ctx.bezierCurveTo(canvas.width/8, canvas.height/2+deltaHeight+50, canvas.width*3/8,canvas.height/2+deltaHeightRight-50, canvas.width/2, canvas.height/2+deltaHeightRight); 
	     // ctx.bezierCurveTo(canvas.width*5/8, canvas.height/2+deltaHeight+50, canvas.width*7/8,canvas.height/2+deltaHeightRight-50, canvas.width, canvas.height/2+deltaHeightRight); 

	     ctx.lineTo(canvas.width, canvas.height);
	     ctx.lineTo(0, canvas.height);
	     ctx.lineTo(0, canvas.height/2+deltaHeight);
	     ctx.closePath();
	     ctx.fill();
	     var cirimgsrc=["img/btn1.png","img/btn2.png","img/btn3.png","img/btn3.png"];
	     var cirimg=[];
	     if (j == 0) {
	     	for (var k = 0; k<=3; k++) {
	     		ctx.beginPath();
		     	cirimg[k]=new Image();
		     	cirimg[k].src=cirimgsrc[k];
		     	var pattern=ctx.createPattern(cirimg[k],"no-repeat");
		     	ctx.fillStyle=pattern;
				// var bg=new Image();
		  //    	bg.src="../img/btn2.png";
		  //    	var pattern=ctx.createPattern(bg,"repeat");
		  //    	ctx.fillStyle=pattern;
		     	ctx.arc(canvas.width/4+deltaHeight*0.5+k*130+canvas.width*0.14, canvas.height/2-30,30,0, Math.PI*2,true);
		     	//ctx.rect(0,0,60,60);
		     	ctx.closePath();
		     	ctx.fill();
	     	}
	     	
	     }
	  }
	   requestAnimFrame(loop);
	 }

	  loop();
}