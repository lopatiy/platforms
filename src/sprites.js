export default class SpritesManager {
	static spriteSheet = [
        [72, 0, 36, 47],
        [0, 47, 36, 47],

		[0, 0, 36, 47], //left
        [72, 47, 36, 47], //right

        [36, 0, 36, 47], //left
        [36, 47, 36, 47], //right
    ];

	static SPRITE = {
		IDLE : [
            SpritesManager.spriteSheet[0],
            SpritesManager.spriteSheet[1],
		],
		RUN : [
            [SpritesManager.spriteSheet[2], SpritesManager.spriteSheet[3]], // left
            [SpritesManager.spriteSheet[4], SpritesManager.spriteSheet[5]], // right
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
        	canvas.height = height *2;
            canvas.id = 'spritesCanvas';

        	this.canvas = document.getElementById('spritesCanvas');
        	this.ctx = canvas.getContext('2d');
        	this.ctx.translate(width, 0);
        	this.ctx.scale(-1,1);
        	this.ctx.drawImage(image, 0, 0, width, height);
            this.ctx.translate(width, 0);
            this.ctx.scale(-1,1);
            this.ctx.drawImage(image, 0, height, width, height);

        	callback(this.ctx.getImageData(0, 0, width, height));
    	};

    	image.setAttribute('crossOrigin', '');
    	image.src = url + '?' + new Date().getTime();
	}

	copy(...data){
	 	return this.ctx.getImageData(...data);
	}
}