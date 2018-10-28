export default class SpritesManager {
	static spriteSheet = [
        [0, 0, 36, 47],
        [0, 0, 72, 47],
        [0, 0, 108, 47]
    ];

	static SPRITE = {
		IDLE : SpritesManager.spriteSheet[0],
		RUN_0 : SpritesManager.spriteSheet[0],
		RUN_1 : SpritesManager.spriteSheet[0]
	};

	constructor(url, callback){
		this.load(url, 108, 47, callback)
	}

	load(url, width, height, callback) {
   		const image = document.createElement('img');
    	image.onload = () => {
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

	copy(...data){
	 	return this.ctx.getImageData(...data);
	}
}