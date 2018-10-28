import {summ, mult, subt} from "./fn";
import SpritesManager from "./sprites";

const gravity = [0, 0.5];
const f = 3;

export class Point {
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

export class Unit extends Point {
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

	render(scene, sprites){
	    const sprite = SpritesManager.SPRITE.IDLE;

        const x = this.pos[0] - sprite[2]/2;
        const y = this.pos[1] - sprite[3];

		return scene.sprite(sprites.copy(...sprite), x, y)
	}
}

export class ControllableUnit extends Unit {
	constructor(x,y){
		super(x,y);

		document.addEventListener('keydown', (e) => {
			switch(e.keyCode) {
				case 37: this.left();
				break;
				case 39: this.right();
				break;
				case 38: this.jump();
				break;
				case 40: this.duck();
				break;
				default:
			}
		});

		document.addEventListener('keyup', (e) => {
			switch(e.keyCode) {
				case 37: 
				case 39: this.stop(); 
				break;
				case 38: this.duck();
				break;
				case 40: this.jump();
				break;
				default:
			}
		})
	}
}