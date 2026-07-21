let scroll_down=document.getElementById("scroll_down");
let scroll_up=document.getElementById("scroll_up");
// let head=document.getElementById("head");
// let hid=document.querySelector('.hid');

let previous_pos=window.pageYOffset;
let present_pos;

    console.log("front over");
        window.addEventListener("scroll",(e)=>{
            if(head.classList.contains("hid")){
                pageHeight=(document.documentElement.scrollHeight-document.documentElement.clientHeight)*1.2;
        present_pos=document.documentElement.scrollTop;
        if(present_pos>previous_pos){
            scroll_down.classList.remove("hid");
            scroll_up.classList.add("hid");
            scroll_down.style.top=present_pos/pageHeight*100+'%';
            console.log(scroll_down.style.top);
            previous_pos=present_pos;
            console.log("scrolldown");
        }
        else{
            scroll_up.classList.remove("hid");
            scroll_down.classList.add("hid");
            console.log(`${present_pos/pageHeight}`);
            scroll_up.style.top=`${(present_pos/pageHeight)*100}%`;
            previous_pos=present_pos;
            console.log("scrollup");
        }
            }
    });
    

