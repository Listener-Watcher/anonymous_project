document.addEventListener("DOMContentLoaded",myfunction);
function myfunction() {
    var img_collection = document.images
    for(i=0;i<15;i++){
        img_collection[i].addEventListener("click",enlargeImage(i));
    }
        function enlargeImage(i){
            var modal = document.getElementById("myModal");
            var myImg = document.images[i];
            var modalImg = document.getElementById("img01");
            myImg.onclick= function(){
            modal.style.display = "flex";
            modalImg.src = myImg.src;
        }
        window.onclick = function(event) {
            if (event.target == modal) {
              modal.style.display = "none";
            }
          }
    }

}

