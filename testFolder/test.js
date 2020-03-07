let shape = new sShape({x: 11*box, y : 11*box});
shape.fillShape();
document.addEventListener('keydown',() => {
    if(event.keyCode == 38){
        shape.clearShape();
        shape.rotater();
        shape.fillShape();
    }
})