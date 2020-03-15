var randomX,randomIndexGenerator;
var funcNames = ['lShape','iShape','sShape','zShape','tShape'];
let timer;
var shape;
let shapeGeneratorFunc = () => {
    randomX = Math.floor(Math.random() * 13 + 2);
    randomIndexGenerator = Math.floor(Math.random() * 5);
    shape = new window[funcNames[randomIndexGenerator]]({x: randomX *box, y: 0});
    fillShape(shape.boxArr);
    return shape;
}