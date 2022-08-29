ctx.drawImage(
            this.image, 
            this.frameCurrent * (this.image.width / this.frameMax),
            0,
            this.image.width / this.frameMax,
            this.image.height,
            this.position.x, this.position.y, 
            (this.width / this.frameMax) * this.scale, 
            this.image.height * this.scale
            );
            if(this.gameFrame % this.frameMax === 0){
                if(this.frameCurrent < this.frameMax - 1){
                 this.frameCurrent++ 
                }
                else this.frameCurrent = 0;
            }
            this.gameFrame++;
   )
