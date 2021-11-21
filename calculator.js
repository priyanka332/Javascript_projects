function display(v){
    var tr = document.getElementById("screen")
    tr.value += v
}
function solution(){
    var tr = document.getElementById("screen")
    var a = eval(tr.value)
    tr.value=a
}
function clear_needed(){
    var tr = document.getElementById("screen")
    tr.value=" "
}