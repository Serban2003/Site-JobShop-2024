window.onload =function(){
    var half_text = document.getElementById("half-text");
    half_text.style.marginTop = -half_text.offsetHeight / 2 + "px";
}

window.onresize = function(){
    var half_text = document.getElementById("half-text");
    half_text.style.marginTop = -half_text.offsetHeight / 2 + "px";
}