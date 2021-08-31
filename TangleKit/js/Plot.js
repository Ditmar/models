var Plot =this.Plot=function(points,canvas)
{
	var colors=["#ff0000","#7C7CE8","#B507FA"]

	this.points=points;
	this.raiz=document.getElementById(canvas)
	this.h=this.raiz.height;
	this.w=this.raiz.width;
	this.xw=this.w/this.points[0].length;
	
	//dibujo recuadro


	//this.ctx.clear();

	this.ctx=this.raiz.getContext("2d");
	this.ctx.clearRect(0, 0, this.w, this.h);
	var max=0;
	for(var j=0;j<this.points.length;j++)
	{
		for(var i=0;i<this.points[j].length;i++)
		{
			if(this.points[j][i][1]>max)
			{
				max=this.points[j][i][1];			
			}

		}
	}
	var scale=100/((max/this.h)*100);
	console.log(scale)
	for(var j=0;j<this.points.length;j++){
		this.ctx.beginPath();
		
		this.ctx.moveTo(0,this.h);
		for(var i=0;i<this.points[j].length;i++)
		{
			this.ctx.lineTo(this.xw*i,this.h-this.points[j][i][1]*scale);
		}	
		this.ctx.lineWidth=2;
		this.ctx.strokeStyle = colors[j];
		this.ctx.stroke();
	}
	
	this.ctx.beginPath();
	this.ctx.lineWidth=1;
	this.ctx.strokeStyle = '#ccc';
	var xp=max;
	
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
	this.ctx.stroke();


	this.ctx.beginPath();
	this.ctx.lineWidth=1;
	var yp=0;
	for (var i=0;i<this.points[0].length;i++)
	{
		this.ctx.moveTo(yp,0);
      	this.ctx.lineTo(yp,this.h);
      	this.ctx.font = '12px Calibri';
      	this.ctx.fillText(i+1,yp,this.h-8);
      	yp+=this.xw;
	}
	this.ctx.strokeStyle = '#ccc';
	this.ctx.lineWidth=0.5;
	this.ctx.stroke();
}