document.addEventListener("DOMContentLoaded",myfunction);

function myfunction() {
    for(i=0;i<8;i++){
        var videoList = document.getElementsByClassName("video-item");
        var video = document.getElementsByClassName("video-item")[i].querySelector("video");
        video.addEventListener("click",enlargeVideo(i,video));
    }
        function enlargeVideo(i,v){
            var modal = document.getElementById("myv");
            var myVideo = v
            var modalV = document.getElementById("v01");
            myVideo.onclick= function(){
            modal.style.display = "flex";
            modalV.querySelector("source").src = myVideo.querySelector("source").src;
            modalV.load();
        }
        window.onclick = function(event) {
            if (event.target == modal) {
              modal.style.display = "none";
            }
          }
    }
}