export default class SpritesManager {
	constructor(url, callback){
		this.spritesSheet = [
			[0, 0, 36, 47],
			[0, 0, 72, 47],
			[0, 0, 108, 47]
		];

		this.load(url, 108, 47, callback)
	}

	load(url, width, height, callback) {
   		const image = document.createElement('img');
    	image.onload = function () {
        	const canvas = document.createElement('canvas');
        	canvas.width = width;
        	canvas.height = height;
            canvas.id = 'spritesCanvas';

        	this.canvas = document.getElementById('spritesCanvas');
        	this.ctx = canvas.getContext('2d');
        	this.ctx.drawImage(image, 0, 0, width, height);
        	callback(this.ctx.getImageData(0, 0, width, height));
    	};

    	image.setAttribute('crossOrigin', '');
    	image.src = url + '?' + new Date().getTime();
	}

	copy(){
	 	return ctx.getImageData(10,10,50,50);
	}
}