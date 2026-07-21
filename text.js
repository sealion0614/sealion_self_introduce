
const options={
    threshold:0.1,
    rootMargin:'0px 0px -50px 0px'
};



callback=(entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            if(entry.target.tagName=="H3"){
                entry.target.classList.add('visible');
            }
            else{
                entry.target.classList.add('visible');
            }
            
        }
    });
};

const observer=new IntersectionObserver(callback,options);
const autoTargets=document.querySelectorAll('h4');
const autoTargets_topic=document.querySelectorAll(`h3`);
autoTargets.forEach(target=>{
    target.classList.add('fade_in');
    
    observer.observe(target);
})

autoTargets_topic.forEach(target=>{
    target.classList.add('fade_in_topic');

    observer.observe(target);
})

