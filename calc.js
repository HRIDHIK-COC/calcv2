function displayData(n){
    PathResult.value+=n
}
function allClear(){
    PathResult.value=""
}
function backSpace(){
    PathResult.value=PathResult.value.slice(0,-1)
}
function findOut(){

PathResult.value=eval(PathResult.value)
}
