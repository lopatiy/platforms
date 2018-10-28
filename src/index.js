import Scene from "./scene";
import SpritesManager from "./sprites";
import {ControllableUnit} from "./point";

let unit;
let interval;

class Application {
    constructor(){
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext('2d');

        this.h = document.body.scrollHeight;
        this.w = document.body.getBoundingClientRect().width;

        this.scene = new Scene(this.canvas);

        this.canvas.height = this.h;
        this.canvas.width = this.w;

        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0,0, this.w, this.h);
        this.ctx.fill();

        this.scene.fill('black');
        this.scene.stroke('black');

        this.spritesManager = new SpritesManager("../assets/hero.png", this.bootstrap.bind(this));
    }

    bootstrap() {
        this.place();
        interval = setInterval(() => this.render(), 1000/24)
    }

    place(){
        unit = new ControllableUnit(this.w/2, 3*this.h/4);
    }

    render(){
        this.scene.clear();
        this.scene.line(0, 3*this.h/4, this.w, 3*this.h/4);
        unit.update();
        unit.render(this.scene, this.spritesManager);
    }
}

window.app = new Application();