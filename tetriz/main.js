var Pieza = function(formas, x, y){ 
        this.formas = formas; 
        this.actual=0; 
        this.x=x; 
        this.y=y; 
        self=this; 
         
        this.rotar=function(){ 
            self.actual=self.actual+1; 
            if(self.actual >= self.formas.length){ 
                self.actual=0; 
            } 
        } 
    }
    //0 ,
    var comprobar_colision = function(forma, n_x, n_y){ 
            for(y=0;y<pieza_actual.formas[forma].length;y++){ 
                for(x=0; x<pieza_actual.formas[forma][y].length;x++){ 
                    if( tablero[y+n_y][x+n_x] != 0 && pieza_actual.formas[forma][y][x] != 0){ 
                        return true; 
                    } 
                } 
            } 
            return false; 
        }  