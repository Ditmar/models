var Plot =this.Plot=function(points,canvas)
{
	this.points=points;
	this.raiz=document.getElementById(canvas)
	this.h=this.raiz.height;
	this.w=this.raiz.width;
	this.xw=this.w/this.points.length+1;
	
	//dibujo recuadro


	//this.ctx.clear();

	this.ctx=this.raiz.getContext("2d");
	this.ctx.beginPath();
	this.ctx.lineWidth=0.5;
	this.ctx.strokeStyle = '#ff0000';
	this.ctx.beginPath();
	this.ctx.moveTo(0,this.h);
	var max=0;
	for(var i=0;i<this.points.length;i++)
	{
		if(this.points[i][1]>max)
		{
			max=this.points[i][1];			
		}

	}
	var scale=100/((max/this.h)*100);
	for(var i=0;i<this.points.length;i++)
	{
		this.ctx.lineTo(this.xw*i+10,this.h-this.points[i][1]*scale);
		this.ctx.lineJoin="round";
	}
	
	console.log(this.ctx);

	this.ctx.fillStyle = '#8ED6FF';
	this.ctx.fill();
	this.ctx.clearRect(0, 0, this.w, this.h);
	this.ctx.stroke();
	this.ctx.beginPath();
	var xp=max;
	var yp=0;
	for (var i=10;i>=1;i--)
	{
		var div=(this.h/10);
		this.ctx.moveTo(0,this.h-(div)*i);
		this.ctx.lineTo(this.w,this.h-(div)*i);

		var p=(div/this.h)*max;
		this.ctx.font = '12px Calibri';
		this.ctx.fillStyle = '#000';
      	this.ctx.fillText((xp.toFixed(2)), 0,parseInt(this.h-(div)*i)+8);
      	xp-=p;

      	
	}
	for (var i=0;i<this.points.length;i++)
	{
		this.ctx.moveTo(yp,0);
      	this.ctx.lineTo(yp,this.h);
      	this.ctx.font = '12px Calibri';
		this.ctx.fillStyle = '#000';
      	this.ctx.fillText(i+1,yp,this.h-8);
      	yp+=this.xw;
	}
	this.ctx.lineWidth=0.5;
	this.ctx.strokeStyle = '#ccc';
	this.ctx.stroke();
}