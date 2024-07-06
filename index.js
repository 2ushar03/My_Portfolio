var tab=document.getElementsByClassName('tab');
var contents=document.getElementsByClassName('tab-contents');
function opn(name){
    for(it of tab){
        it.classList.remove('active-link');
    }
    for(it of contents){
        it.classList.remove('active-tab');
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(name).classList.add("active-tab");
}