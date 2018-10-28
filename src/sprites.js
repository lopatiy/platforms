export default class SpritesManager {
	static spriteSheet = [
        [0, 0, 36, 47],
        [36, 0, 36, 47],
        [72, 0, 36, 47],

        [0, 47, 36, 94],
        [36, 47, 36, 94],
        [72, 47, 36, 94]
    ];

	static SPRITE = {
		IDLE : [
            SpritesManager.spriteSheet[0], // left,
		],
		RUN : [
            [SpritesManager.spriteSheet[1], SpritesManager.spriteSheet[2]], // left
		]
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