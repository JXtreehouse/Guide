// 创建App
var app = new t3d.App({
    container: 'div3d',
    appKey: "app_test_key",
    url: 'https://speech.uinnova.com/static/models/building'
});

function createTextCanvas(text) {
	let canvas = document.createElement("canvas");
	canvas.width = 64;
	canvas.height = 64;
	
	const ctx = canvas.getContext("2d");
	ctx.fillStyle = "rgb(32, 32, 256)";
	ctx.beginPath();
	ctx.arc(32, 32, 30, 0, Math.PI * 2);
	ctx.fill();

	ctx.strokeStyle = "rgb(255, 255, 255)";
	ctx.lineWidth = 4;
	ctx.beginPath();
	ctx.arc(32, 32, 30, 0, Math.PI * 2);
	ctx.stroke();

	ctx.fillStyle = "rgb(255, 255, 255)";
	ctx.font = "32px sans-serif";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillText(text, 32, 32);
	return canvas;
}
		
app.on('load', function() {
    var marker = app.create({
        type: "Marker",
        position: [0, 5, 0],
        size: 4,
        url: "https://speech.uinnova.com/static/images/warning1.png",
        parent: app.query('car01')[0]
    });
    
    var marker2 = app.create({
        type: "Marker",
        position: [0, 5, 0],
        size: 3,
        canvas: createTextCanvas('100'),
        parent: app.query('car02')[0]
    });
    marker2.on('click',function() {
        console.log('click marker2');
    });
})

