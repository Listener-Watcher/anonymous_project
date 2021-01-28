let button = document.getElementById("submit");
button.addEventListener("click",check_email);
function check_email(){
    let email = document.getElementById("form1").elements['email'].value;
    let content = email;
    let check = false;
    let taili=-1;
    for(i=0;i<content.length;i++){

        if(content[i]=='@'){
            taili=i;
        }
    }
    if((content.includes(".edu",taili)||content.includes(".com",taili))&&taili!=-1){
        check = true;
    }
    if(check){
        let reply = document.getElementById("reply");
        alert("This email is valid");
        // reply.innerHTML = "This email is valid";
        // reply.style.display="block";
    }
    else{
        let reply = document.getElementById("reply");
        alert("This email is not valid");
        // reply.innerHTML = "This email is not valid";
    }
    
}