class SpritesManager {
	constructor(url, callback){
		this.spritesSheet = [
			[0,0,36,47],
			[0,0,72,47]
			[0,0,108,47]
		]	

		this.load(url, 108, 47, callback)
	}

	function load(url, width, height, callback) {
   		var image = document.createElement('img');
    	image.onload = function () {
        	this.canvas = document.createElement('canvas');
        	this.canvas.width = width;
        	this.canvas.height = height;
        	this.ctx = canvas.getContext('2d');
        	this.ctx.drawImage(image, 0, 0, width, height);
        	callback(ctx.getImageData(0, 0, width, height));
    	};

    	image.setAttribute('crossOrigin', '');
    	image.src = url + '?' + new Date().getTime();
	}

	function copy(){
	 	return ctx.getImageData(10,10,50,50);
	}
}