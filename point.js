var x = null;
var y = null;
    
document.addEventListener('mousemove', onMouseUpdate, false);
document.addEventListener('mouseenter', onMouseUpdate, false);
    
function onMouseUpdate(e) {
  x = e.pageX;
  y = e.pageY;
}

const summ = (v1,v2) => {
	return [v1[0]+v2[0], v1[1] + v2[1]];
}

const subt = (v1,v2) => {
	return [v1[0] - v2[0], v1[1] - v2[1]];
}

const mult = (v1, n1, n2) => {
	return [v1[0] * n1, v1[1] * (n2 ? n2 : n1)];
}

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
}

