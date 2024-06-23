

export function loadShow(intems, active, transition){
    //console.log(active)
    let sst= 0

        intems[active].style.transform= `none`;
        intems[active].style.zIndex= 1;
        intems[active].style.filter= 'none';
        intems[active].style.opacity=  1;
        //intems[active + 1].classList.remove('size');

    for (let i = active + 1; i < intems.length; i++) {
        sst++;
        intems[i].style.transform= `translate(${120*sst}px) scale(${1 - 0.3*sst}) perspective(16px) rotateY(-1deg)`;
        intems[i].style.zIndex= -sst;
        intems[i].style.filter= 'blur(10px)';
        intems[i].style.opacity=  sst > 2 ? 0 : '.6';
        intems[i].style.transition=  `${transition}s`;
        
    }
    
    sst= 0;
    for (let i = active - 1; i >= 0; i--) {
        sst++;
        intems[i].style.transform= `translate(${-120*sst}px) scale(${1 - 0.3*sst}) perspective(16px) rotateY(1deg)`;
        intems[i].style.zIndex= -sst;
        intems[i].style.filter= 'blur(1px)';
        intems[i].style.opacity=  sst > 2 ? 0 : '.8';
        intems[i].style.transition=  `${transition}s`;
        
    }


}