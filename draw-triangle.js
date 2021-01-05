function drawTriangle()
{
	var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(490, 490);
    ctx.lineTo(200, 490);
    ctx.lineTo(490, 200);
    ctx.closePath();
    ctx.stroke();
}
