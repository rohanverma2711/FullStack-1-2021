
var counter = document.getElementById('count');
var addition = document.getElementsByClassName('add')[0];
var subtract = document.getElementsByClassName('sub')[0];
var count = 0;
function inc(){
    count++;
    counter.innerHTML = count;
    if(subtract.disabled == true)
        subtract.disabled = false;
}
function dec(){
   count--;
   if (count == 0)
        subtract.disabled = true;
    counter.innerHTML = count;
}