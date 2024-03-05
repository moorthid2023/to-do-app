import {new_div,task_content,add_button,ol,insertContent} from './components.js';
import * as fullScreen from './fullscreen.js'
const main_element = document.querySelector('main');

main_element.appendChild(new_div);
main_element.appendChild(ol);

task_content.focus();

add_button.addEventListener('click',insertContent);
const fullScreenButton = document.querySelector('.fullScreenButton');
fullScreenButton.addEventListener('click',()=>{
      fullScreen.enterFullscreen();
        fullScreenButton.innerHTML="exitFullScreen"
});
task_content.addEventListener('keydown',(e)=>{
  if(e.code === 'Enter'){
          insertContent();
  }
})
console.log();
