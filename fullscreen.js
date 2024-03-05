export var elem = document.querySelector('.container');

export function enterFullscreen(){
        if(!document.fullscreenElement){
              
                elem.requestFullscreen()
        }else{
                if(document.exitFullscreen){
                        document.exitFullscreen();
                }
                
        }
}
