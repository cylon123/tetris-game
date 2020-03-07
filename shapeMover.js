var randomX = Math.floor(Math.random() * 13 + 2);
var shape = new iShape({x: randomX *box, y: 0});
fillShape(shape.boxArr);
document.addEventListener('keyup',() => {
    if(event.keyCode == 38){
        rotater(shape.boxArr);
    }
})
setInterval(() => {
    shapeMover(shape.boxArr,'down');
}, 1000);