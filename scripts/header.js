const headerScroll = document.getElementById('ativo');

function activeScroll(){
    if(window.scrollY > 0){
        headerScroll.classList.add("scrolled");
    }
    else{
        headerScroll.classList.remove("scrolled");
    }
}

window.addEventListener('scroll', activeScroll);