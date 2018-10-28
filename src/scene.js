export default class Scene {
    constructor(canvas) {
        this.canvas = canvas;
        this.cc = this.canvas.getContext('2d');
    }

    width() {
        return this.canvas.clientWidth
    };

    height() {
        return this.canvas.clientHeight
    };

    stroke(color) {
        !color && (color = 'nostroke');
        this.cc.strokeStyle = color
    };

    fill(color) {
        !color && (color = 'transparent');
        this.cc.fillStyle = color
    };

    clear(){
        this.cc.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    point(x, y) {
        this.ellipse(x, y, 1)
    };

    ellipse(x, y, r) {
        this.cc.beginPath();
        this.cc.ellipse(x, y, r, r, 0, 0, 2 * Math.PI);
        this.cc.stroke();
    };

    line(x0,y0,x1,y1){
        this.cc.beginPath();
        this.cc.moveTo(x0,y0);
        this.cc.lineTo(x1,y1);
        this.cc.stroke();
    }

    sprite(sprite, x, y){
        this.cc.putImageData(sprite, x, y);
    }

    shape(points) {
        this.cc.beginPath();
        this.cc.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
            this.cc.lineTo(points[i].x, points[i].y);
        }
        this.cc.closePath();
        this.cc.fill();
        this.cc.stroke();
    };
}
