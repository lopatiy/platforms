import Scene from "./scene";
import SpritesManager from "./sprites";
import {ControllableUnit, Unit} from "./point";

let unit;
let interval;

class Application {
    constructor(){
        this.canvas = document.getElementById("canvas");
        this.h = document.body.scrollHeight;
        this.w = document.body.getBoundingClientRect().width;
        this.canvas.height = this.h;
        this.canvas.width = this.w;

        this.scene = new Scene(this.canvas);
        this.spritesManager = new SpritesManager("../assets/hero.png", this.bootstrap.bind(this));

        this.units = [];
    }

    bootstrap() {
        this.place();
        let time = 1000;
        this.render(time);
        this.scene.cc.putImageData(this.spritesManager.ctx.getImageData(0,0,this.w, this.h),0,0)

        interval = setInterval(() => this.render(time++), 1000/24)
    }

    place(){
        this.units.push(new ControllableUnit(this.w/2, 3*this.h/4));
        this.units.push(new Unit(3*this.w/4, 3*this.h/4));
    }

    render(time){
        this.scene.clear();
        this.scene.line(0, 3*this.h/4, this.w, 3*this.h/4);

        for(let i = 0; i < this.units.length ; i++){
            let unit = this.units[i];

            unit.update();
            unit.render(this.scene, this.spritesManager, time);
        }
    }
}

window.app = new Application();
