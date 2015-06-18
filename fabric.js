$(window).load(function(){

	var canvas = new fabric.Canvas("editor");

	// rectangle
	var rect = new fabric.Rect({
		left: 100,
		top: 100,
		fill: 'red',
		width: 20,
		height: 20
	});

	canvas.add(rect);

	var text = new fabric.Text("Placeholder",{
		left:100,
		top:100,
		fontFamily:"Bebas Neue"
	});

	canvas.add(text);

});
