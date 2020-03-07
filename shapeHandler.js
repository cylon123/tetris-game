const yValueArr = [{key :'sShape',value: 2},
                    {key: 'zShape' , value: 2},
                        {key:'iShape', value: 4},
                            {key: 'tShape' , value: 2},{key: 'lShape' ,value: 3}]
var MultFactor = (shape) => {
    var val = yValueArr.find((o) => {
        return o.key === shape.constructor.name
    }).value;
    return val;
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
    let sumCOMx,sumCOMy;
    sumCOMx = boxArr.reduce((sum,curr) => {
        return sum += curr.x;
    },0)
    sumCOMy = boxArr.reduce((sum,curr) => {
        return sum += curr.y;
    },0)
    sumCOMx /= 4;
    sumCOMy /= 4;
    let boxer = {};
    boxArr.forEach((box) => {
        boxer.x = sumCOMx + sumCOMy - box.y;
        boxer.y = sumCOMy - sumCOMx + box.x;
        box.x = boxer.x;
        box.y = boxer.y;
    })
    fillShape(boxArr);
}
shapeMover = (boxArr,direction) => {
    clearShape(boxArr);
    if(direction == 'down'){
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
    this.fillShape = () => {
        for(let i = 0;i < 4;i++){
            ctx2.fillStyle = 'black';
            ctx2.fillRect(this.boxArr[i].x,this.boxArr[i].y,box,box);
        }
    }
    this.clearShape = () => {
        for(let i = 0;i < 4;i++){
            ctx2.clearRect(this.boxArr[i].x,this.boxArr[i].y,box,box);
        }
    }
    this.rotater = () => {
        const COMx = (this.box1.x + this.box2.x + this.box3.x + this.box4.x)/4;
        const COMy = (this.box1.y + this.box2.y + this.box3.y + this.box4.y)/4;
        let boxer = {};
        this.boxArr.forEach((box,index) => {
            boxer.x = COMx + COMy - box.y;
            boxer.y = COMy - COMx + box.x;
            box.x = boxer.x;
            box.y = boxer.y;
        })
    }
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
    this.fillShape = () => {
        for(let i = 0;i < 4;i++){
            ctx2.fillStyle = 'black';
            ctx2.fillRect(this.boxArr[i].x,this.boxArr[i].y,box,box);
        }
    }
    this.clearShape = () => {
        for(let i = 0;i < 4;i++){
            ctx2.clearRect(this.boxArr[i].x,this.boxArr[i].y,box,box);
        }
    }
    this.rotater = () => {
        const COMx = (this.box1.x + this.box2.x + this.box3.x + this.box4.x)/4;
        const COMy = (this.box1.y + this.box2.y + this.box3.y + this.box4.y)/4;
        let boxer = {};
        this.boxArr.forEach((box,index) => {
            boxer.x = COMx + COMy - box.y;
            boxer.y = COMy - COMx + box.x;
            box.x = boxer.x;
            box.y = boxer.y;
        })
    }
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
    this.fillShape = () => {
        for(let i = 0;i < 4;i++){
            ctx2.fillStyle = 'black';
            ctx2.fillRect(this.boxArr[i].x,this.boxArr[i].y,box,box);
        }
    }
    this.clearShape = () => {
        for(let i = 0;i < 4;i++){
            ctx2.clearRect(this.boxArr[i].x,this.boxArr[i].y,box,box);
        }
    }
    this.rotater = () => {
        const COMx = (this.box1.x + this.box2.x + this.box3.x + this.box4.x)/4;
        const COMy = (this.box1.y + this.box2.y + this.box3.y + this.box4.y)/4;
        let boxer = {};
        this.boxArr.forEach((box,index) => {
            boxer.x = COMx + COMy - box.y;
            boxer.y = COMy - COMx + box.x;
            box.x = boxer.x;
            box.y = boxer.y;
        })
    }
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
    this.fillShape = () => {
        for(let i = 0;i < 4;i++){
            ctx2.fillStyle = 'black';
            ctx2.fillRect(this.boxArr[i].x,this.boxArr[i].y,box,box);
        }
    }
    this.clearShape = () => {
        for(let i = 0;i < 4;i++){
            ctx2.clearRect(this.boxArr[i].x,this.boxArr[i].y,box,box);
        }
    }
    this.rotater = () => {
        const COMx = (this.box1.x + this.box2.x + this.box3.x + this.box4.x)/4;
        const COMy = (this.box1.y + this.box2.y + this.box3.y + this.box4.y)/4;
        let boxer = {};
        this.boxArr.forEach((box,index) => {
            boxer.x = COMx + COMy - box.y;
            boxer.y = COMy - COMx + box.x;
            box.x = boxer.x;
            box.y = boxer.y;
        })
    }
}