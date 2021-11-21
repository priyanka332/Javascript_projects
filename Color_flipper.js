function changeColor(){
    var color = document.getElementById("container1");
    var color1 = document.getElementById("colorInputText");
    color.style.backgroundColor = color1.value;
    color1.value=null;
}