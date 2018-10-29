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

		this.dir = 1;
		this.ground = y;
		this.sprite = SpritesManager.SPRITE.IDLE[0];
	}

	stop(){
	    this.sprite = SpritesManager.SPRITE.IDLE[0];
		this.vel[0] = 0;
	}

	left(){
	    this.dir = 0;
		this.vel[0] = -1 * f;
	}

	right(){
        this.dir = 1;
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

	render(scene, sprites, time){
	    let sprite;

	    switch (true){
            case Math.abs(this.vel[0]) > 0 :
                sprite = SpritesManager.SPRITE.RUN[Math.ceil(time % 100 / 10) % 2][this.dir];
                break;
            default:
                sprite = SpritesManager.SPRITE.IDLE[this.dir];
        }

        if(!this.isOnGround()){
	        sprite = SpritesManager.SPRITE.IDLE[this.dir];
        }

        const x = this.pos[0] - sprite[2]/2;
        const y = this.pos[1] - sprite[3];

        const result = sprites.copy(...sprite);


		return scene.sprite(result, x, y)
	}
}

export class ControllableUnit extends Unit {
	constructor(x,y){
		super(x,y);

		document.addEventListener('keydown', (e) => {
			switch(e.keyCode) {
				case 65:
				case 37: this.left();
				break;
				case 68:
				case 39: this.right();
				break;
				case 87:
				case 38: this.jump();
				break;
				case 83:
				case 40: this.duck();
				break;
				default:
			}
		});

		document.addEventListener('keyup', (e) => {
			switch(e.keyCode) {
				case 37:
                case 65:
				case 39:
                case 68: this.stop();
				break;
				default:
			}
		})
	}
}
