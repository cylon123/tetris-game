shape = shapeGeneratorFunc();
setInterval(() => {
    shape.boxArr = allowDown(shape.boxArr);
    if(getExtremes(shape.boxArr,'DOWN') >= canvas.height || pieceTouchingStatus){
        freezeBoxes(shape.boxArr);
        status = !status;
        shape = shapeGeneratorFunc();
        status = !status;
        pieceTouchingStatus = !pieceTouchingStatus;
    }
},1000)
document.addEventListener('keyup',() => {
    if(event.keyCode == 38 && status){
        shape.boxArr = rotater(shape.boxArr);
    }
    if(event.keyCode == 37 && status){
        shape.boxArr = allowLeft(shape.boxArr); 
    }
    if(event.keyCode == 39 && status){
        shape.boxArr = allowRight(shape.boxArr)
    }
})