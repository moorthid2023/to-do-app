//div
const new_div = document.createElement('div');
new_div.classList.add("task_div");
//list
let ol = document.createElement('ol');
//input
let task_content=document.createElement('input');
task_content.classList.add('task_content');
task_content.placeholder="Add Task";

new_div.appendChild(task_content);
//button
const add_button =document.createElement('button');
add_button.classList.add('add_button');
add_button.innerHTML='add';
new_div.appendChild(add_button);
//function to addlist
function insertContent(){
        let list_li = document.createElement('li');
        list_li.classList='list_li';
        ol.appendChild(list_li);
        let li = document.createElement('li');
        li.classList="inner_li";
        list_li.appendChild(li);
        li.innerHTML=task_content.value;
        let tick = document.createElement('input');
        tick.classList="tick";
        tick.type="checkbox";
        list_li.appendChild(tick);
        let delete_button=document.createElement('button');
        delete_button.classList="delete_button";
        delete_button.innerHTML="del"
        list_li.appendChild(delete_button);
        delete_button.addEventListener('click',()=>{
                list_li.remove();
        });
        tick.addEventListener('change',()=>{
                if(tick.checked){
                        li.style.textDecoration="line-through";
                }else{
                        li.style.textDecoration="none"
                }
        })
        task_content.value=null;
};

export {new_div,task_content,add_button,ol,insertContent}