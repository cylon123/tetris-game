checkAndDoUpMove = (boxArr) => {
    clearShape(boxArr);
    let flag = true;
    let obj = {};
    let tempBoxArr = [];
    boxArr.forEach(curr => {
        obj = {...curr};
        obj.y -= box;
        tempBoxArr.push(obj);
    })
    tempBoxArr.forEach(curr => {
        if(curr.y >= 0){
            if(board[curr.y][curr.x]){
                flag = false;
            }
        }
        else{
            flag = false;
        }

    })
    if(flag){
        boxArr = [...tempBoxArr];
    }
    fillShape(boxArr);
    console.log(boxArr);
    return boxArr;
}
checkAndDoDownMove = (boxArr) => {
    clearShape(boxArr);
    let flag = true;
    let obj = {};
    let tempBoxArr = [];
    boxArr.forEach(curr => {
        obj = {...curr};
        obj.y += box;
        tempBoxArr.push(obj);
    })
    tempBoxArr.forEach(curr => {
        if(board[curr.y][curr.x] || curr.y + box > canvas2.height){
            freezeBoxes(boxArr);
            flag = false;
        }
    })
    if(flag){
        boxArr = [...tempBoxArr];
    }
    fillShape(boxArr);
    console.log(boxArr);
    return boxArr;
}
checkAndDoLeftMove = (boxArr) => {
    clearShape(boxArr);
    let flag = true;
    let obj = {};
    let tempBoxArr = [];
    boxArr.forEach(curr => {
        obj = {...curr};
        obj.x -= box;
        tempBoxArr.push(obj);
    })
    tempBoxArr.forEach(curr => {
        if(board[curr.y][curr.x] || curr.x < 0){
            flag = false;
        }
    })
    if(flag){
        boxArr = [...tempBoxArr];
    }
    fillShape(boxArr);
    console.log(boxArr);
    return boxArr;
}
checkAndDoRightMove = (boxArr) => {
    clearShape(boxArr);
    let flag = true;
    let obj = {};
    let tempBoxArr = [];
    boxArr.forEach(curr => {
        obj = {...curr};
        obj.x += box;
        tempBoxArr.push(obj);
    })
    tempBoxArr.forEach(curr => {
        if(board[curr.y][curr.x] || curr.x + box > canvas2.width){
            flag = false;
        }
    })
    if(flag){
        boxArr = [...tempBoxArr];
    }
    fillShape(boxArr);
    console.log(boxArr);
    return boxArr;
}
freezeBoxes = (boxArr) => {
    console.log(boxArr);
    boxArr.forEach(box => {
        board[box.y][box.x] = true;
    })
    console.log(boxArr);
    pieceTouchingStatus = true;
}
allowRight = (boxArr) => {
    return checkAndDoRightMove(boxArr);
}
allowLeft = (boxArr) => {
    return checkAndDoLeftMove(boxArr);
}
allowUp = (boxArr) => {
    return checkAndDoUpMove(boxArr);
}
allowDown = (boxArr) => {
    return checkAndDoDownMove(boxArr)
}
getExtremes= (boxArr,direction) => {
    xArray = boxArr.map(box => box.x);
    yArray = boxArr.map(box => box.y);
    xLeft = Math.min(...xArray);
    xRight = Math.max(...xArray) + box;
    yTop = Math.min(...yArray);
    yBottom = Math.max(...yArray) + box;
    if(direction == 'DOWN'){
        return yBottom;
    }
    if(direction == 'LEFT'){
        return xLeft;
    }
    if(direction == 'RIGHT'){
        return xRight;
    }
    if(direction == 'UP'){
        return yTop;
    }
}
fillShape = (boxArr) => {
    for(let i = 0;i < 4;i++){
        ctx2.fillStyle = 'black';
        ctx2.fillRect(boxArr[i].x,boxArr[i].y,box,box);
    }
}
clearShape = (boxArr) => {
    for(let i = 0;i < 4;i++){
        ctx2.clearRect(boxArr[i].x,boxArr[i].y,box,box);
    }
}
rotater = (boxArr) => {
    clearShape(boxArr);
    console.log(box);
    let tempBoxArr = [];
    let sumCOMx,sumCOMy;
    let flag = true;
    sumCOMx = boxArr.reduce((sum,curr) => {
        return sum += curr.x;
    },0)
    sumCOMy = boxArr.reduce((sum,curr) => {
        return sum += curr.y;
    },0)
    sumCOMx /= 4;
    sumCOMy /= 4;
    console.log(sumCOMx);
    console.log(sumCOMy);
    let boxer = {};
    boxArr.forEach((iterBox) => {
        boxer.x = sumCOMx + sumCOMy - iterBox.y;
        boxer.y = sumCOMy - sumCOMx + iterBox.x;
        console.log(boxer);
        boxer.x -= Math.abs(boxer.x) % box;
        boxer.y -= Math.abs(boxer.y) % box;
        tempBoxArr.push({...boxer});
    })
    console.log(tempBoxArr);
    tempBoxArr.forEach(box => {
        if(box.y >= 0 && box.x >= 0){
            if(board[box.y][box.x] || box.y >= canvas2.height || box.x >= canvas2.width){
                flag = false;
            }
        }
        else{
            flag = false;
        }
    })
    if(flag){
        boxArr = [...tempBoxArr];
    }
    fillShape(boxArr);
    return boxArr;
}
shapeMover = (boxArr,direction) => {
    clearShape(boxArr);
    if(direction == 'DOWN'){
        let boxer = {}
        boxArr.forEach(curr => {
            boxer.x = curr.x;
            boxer.y = curr.y;
            boxer.y += box;
            curr.x = boxer.x;
            curr.y = boxer.y;
        })
    }
    fillShape(boxArr);
}
function sShape(box1){
    this.boxArr = [];
    this.x = box1.x;
    this.y = box1.y;
    this.box1 = box1;
    this.box2 = {x: box1.x + box, y: box1.y};
    this.box3 = {x: box1.x, y: box1.y + box};
    this.box4 = {x: box1.x - box, y: box1.y + box}
    this.boxArr.push(this.box1,this.box2,this.box3,this.box4);
}
function zShape(box1){
    this.boxArr = [];
    this.x = box1.x;
    this.y = box1.y;
    this.box1 = box1;
    this.box2 = {x: box1.x + box, y: box1.y};
    this.box3 = {x: box1.x + box, y: box1.y + box};
    this.box4 = {x: box1.x +2* box,y: box1.y + box};
    this.boxArr.push(this.box1,this.box2,this.box3,this.box4);
}
function iShape(box1){
    this.boxArr = [];
    this.x = box1.x;
    this.y = box1.y;
    this.box1 = box1;
    this.box2 = {x: box1.x, y: box1.y + box};
    this.box3 = {x: box1.x, y: box1.y + 2*box};
    this.box4 = {x: box1.x,y: box1.y + 3*box};
    this.boxArr.push(this.box1,this.box2,this.box3,this.box4);
}
function tShape(box1){
    this.boxArr = [];
    this.x = box1.x;
    this.y = box1.y;
    this.box1 = box1;
    this.box2 = {x: box1.x + box, y: box1.y};
    this.box3 = {x: box1.x + box, y: box1.y + box};
    this.box4 = {x: box1.x + 2*box,y: box1.y};
    this.boxArr.push(this.box1,this.box2,this.box3,this.box4);
}
function lShape(box1){
    this.boxArr = [];
    this.x = box1.x;
    this.y = box1.y;
    this.box1 = box1;
    this.box2 = {x: box1.x , y: box1.y + box};
    this.box3 = {x: box1.x , y: box1.y + 2*box};
    this.box4 = {x: box1.x + box,y: box1.y + 2*box};
    this.boxArr.push(this.box1,this.box2,this.box3,this.box4);
}