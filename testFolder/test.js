shape = new sShape({x: 13*box, y: 11*box});
fillShape(shape.boxArr);
status = true;
document.addEventListener('keydown',() => {
    if(event.keyCode == 37 && status){
        shape.boxArr = allowLeft(shape.boxArr);
    }
    if(event.keyCode == 39 && status){
        shape.boxArr = allowRight(shape.boxArr)
    }
    if(event.keyCode == 38 && status){
        shape.boxArr = allowUp(shape.boxArr)
    }
    if(event.keyCode == 40 && status){
        shape.boxArr = allowDown(shape.boxArr)
    }
    if(event.keyCode == 32 && status){
        status = !status;
        freezeBoxes(shape.boxArr);
        shape = shapeGeneratorFunc();
        fillShape(shape.boxArr);
        status = !status;
    }
    if(event.keyCode == 65){
        shape.boxArr = rotater(shape.boxArr);
    }
})