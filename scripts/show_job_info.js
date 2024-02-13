function showJobInfo(item){
    let button = document.getElementById("job" + item);
    let text = document.getElementById("buttonText" + item);
    let description = document.getElementById("descriptionJob" + item);
    let link = document.getElementById("linkButton" + item);

    if(button.hasAttribute("active")){
        button.classList.remove("active_button");
        button.removeAttribute("active");
        text.style.display = "block";
        text.style.opacity = "1";
        
        description.style.opacity = "0";
        link.style.opacity = "0";

        setTimeout(() => {
            description.style.display = "none";
            link.style.display = "none";
        }, "150"); //0.15s
    }
    else{
        button.classList.add("active_button");
        button.setAttribute("active", "");

        text.style.opacity = "0";

        description.style.display = "block";
        description.style.opacity = "1";

        link.style.display = "block";
        link.style.opacity = "1";

        setTimeout(() => {
            text.style.display = "none";   
        }, "150"); //0.15s
        
    }
}