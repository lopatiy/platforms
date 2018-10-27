let unit;
let interval;

(() => {
	document.addEventListener('keydown', (e) => {
		switch(e.keyCode) {
			case 37: unit.left();
				break;
			case 39: unit.right();
				break;
			case 38: unit.jump();
				break;
			case 40: unit.duck();
				break;
			default:
		}
	})

	document.addEventListener('keyup', (e) => {
		switch(e.keyCode) {
			case 37: 
			case 39: unit.stop(); 
				break;
			case 38: unit.duck()
				break;
			case 40: unit.jump();
				break;
			default:
		}
	})


	const canvas = document.getElementById("canvas");
	const ctx = canvas.getContext('2d');

	let h = document.body.scrollHeight,
		w = document.body.getBoundingClientRect().width;

	const scene = new Scene(canvas);

	canvas.height = h;
	canvas.width = w; 

	ctx.fillStyle = "white";
	ctx.fillRect(0,0, w, h);
	ctx.fill();

	scene.fill('black');
	scene.stroke('black');

	place(scene, w,h);
	
	interval = setInterval(() => render(scene, w, h), 1000/24)
})()

function place(scene, w,h){
	unit = new Unit(w/2, 3*h/4);
}

function render(scene, w, h){
	scene.clear();
	scene.line(0, 3*h/4, w, 3*h/4)
	unit.update();
	scene.ellipse(unit.pos[0] - 6, unit.pos[1] - 6, 6);	
}