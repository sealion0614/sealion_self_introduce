let btns=document.querySelectorAll('.pg_btn button');
let texts=document.querySelectorAll('.pg_text > div');
let head=document.getElementById('head');
let btn_controller=document.getElementById('btn');
let front_pg_container=document.querySelector('.front_pg_container');
let pg_text=document.querySelector('.pg_text');
let top_right=document.querySelector('.top_right');
let wave=document.querySelector('.wave');
let otherwave=document.querySelector('.otherwave');

var head_hid=0,pageHeight=0;
let lastMovedMouseY;
document.body.style.backgroundColor='rgb(108, 203, 203)';
btns.forEach(btn=>{
    btn.addEventListener("click",()=>{
        const targetid=`${btn.id}_text`;
        
        document.documentElement.style.setProperty(
            '--bar-height',
            btn_controller.offsetHeight+'px'
        );
        if(!btn_controller.classList.contains("top_right")){
            btn_controller.classList.add("top_right");
            btn_controller.classList.add("first_bar_hidden");
        }
        else{
            btn_controller.classList.remove("first_bar_hidden");
            btn_controller.classList.remove("bar_hidden");
            pg_text.classList.add("bar_space"); 
        }
        if(head){
                head.classList.add("hid");
                head_hid=1;
        }
        if(front_pg_container){
            front_pg_container.style.height="auto";
        }
        texts.forEach(text=>{
            if(text.id!=targetid){
                text.classList.add("hid");
                console.log(`check${targetid}`);
            }
            else{
                text.classList.remove("hid");
                if(targetid=="pg1_text"){
                    document.body.style.backgroundColor='rgb(239, 203, 203)';
                    wave.style.top="0px";
                    otherwave.style.top="70px";
                }
                else if(targetid=="pg2_text"){
                    document.body.style.backgroundColor='rgb(235, 234, 183)';
                    wave.style.top="0px";
                    otherwave.style.top="70px";
                }
                else if(targetid=="pg3_text"){
                    document.body.style.backgroundColor='rgb(183, 235, 196)';
                    wave.style.top="0px";
                    otherwave.style.top="70px";
                }
                else if(targetid=="pg4_text"){
                    document.body.style.backgroundColor='rgb(183, 203, 235)';
                    wave.style.top="0px";
                    otherwave.style.top="70px";
                }
            }
        });
    });
});

document.addEventListener('mousemove',(e)=>{
    const y=e.clientY;
    lastMovedMouseY=y;
    if(btn_controller.classList.contains("top_right")){
        if(y<60){
            btn_controller.classList.remove("first_bar_hidden");
            btn_controller.classList.remove("bar_hidden");
            pg_text.classList.add("bar_space");
        }
        else{
            btn_controller.classList.add("bar_hidden");
            pg_text.classList.remove("bar_space");
        }
    }
    
    
})