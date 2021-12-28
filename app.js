let spaceChanger=document.querySelector("#space");
console.log(spaceChanger.value);
spaceChanger.addEventListener('change',function(evt){
    let spacevalue=document.querySelector("#space");
    let rooter=document.documentElement;
    rooter.style.setProperty("--ptop",this.value+"px");
    rooter.style.setProperty("--pleft",this.value+"px");
    

})

let blurChanger=document.querySelector("#blur");
console.log(blurChanger.value);
blurChanger.addEventListener('change',function(evt){
    let blurvalue=document.querySelector("#blur");
    let rooter=document.documentElement;
    rooter.style.setProperty("--blurVar",this.value+"px");
    
    

})

let colorChanger=document.querySelector("#head");
console.log(colorChanger.value);
colorChanger.addEventListener('change',function(evt){
    let colorvalue=document.querySelector("#head");
    let rooter=document.documentElement;
    rooter.style.setProperty("--main-bg-color",this.value);
    console.log(this.value);
    

})