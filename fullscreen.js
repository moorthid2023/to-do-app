export var container = document.querySelector('.container');
export let fullScreenMode = false;
export function enterFullscreen(){
        if(!document.fullscreenElement){
                fullScreenMode=true;
                container.requestFullscreen();
        }else{
                if(document.exitFullscreen){
                        fullScreenMode=false;
                        document.exitFullscreen();
                }
                
        }
}
