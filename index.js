let unit;
let interval;
const sprites = new SpritesManager(
	"./hero.png",
	() => {
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
	}
	);


function place(scene, w,h){
	unit = new Unit(w/2, 3*h/4);
}

function render(scene, w, h){
	scene.clear();
	scene.line(0, 3*h/4, w, 3*h/4)
	unit.update();
	unit.render(scene);	
}