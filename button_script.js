window.addEventListener("scroll",scrollfunction);
function scrollfunction(){
    var winheight= window.innerHeight
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
    var pctScrolled = Math.floor(scrollTop/winheight*100)
    mybutton = document.getElementById("myBtn");
    if( pctScrolled>25){
        mybutton.style.display="block";
        }
    else{
        mybutton.style.display="none";
    }
}

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}