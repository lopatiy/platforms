const gravity = [0, 0.5];
const f = 3;

class Point {
	constructor(x,y){
		this.pos = [x,y];

		this.acc = [0, 0];
		this.vel = [0, 0];
	}

	update(){
		this.vel = summ(this.vel, this.acc);	
		this.pos = summ(this.pos, this.vel);
	}
}

class Unit extends Point {
	constructor(x,y){
		super(x,y);

		this.ground = y;
	}

	stop(){
		this.vel[0] = 0;
	}

	left(){
		this.vel[0] = -1 * f;
	}

	right(){
		this.vel[0] = 1 * f;
	}

	duck(){

	}

	jump(){
		if(this.isOnGround()){
			this.applyJump();
			this.doubleJumpAllowed = true;
		} else if(this.doubleJumpAllowed) {
			this.applyJump();
			this.doubleJumpAllowed = false;
		}
	}

	applyJump(){
		this.vel[1] = -2 * f
	}

	isOnGround(){
		return this.pos[1] >= this.ground;
	}

	update(){
		if(!this.isOnGround()){
			this.vel = summ(this.vel, gravity)
		}

		super.update();
		
		if(this.pos[1] >= this.ground){
			this.pos[1] = this.ground;
		}  
	}

	render(scene){

	}
}

class ControlableUnit extends Unit {
	consttuctor(x,y){
		super(x,y);

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
	}
}