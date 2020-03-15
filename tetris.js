const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const board = []
const canvasHeight = canvas.height = document.querySelector('.gameDiv').offsetHeight;
const canvasWidth = canvas.width = document.querySelector('.gameDiv').offsetWidth;
const box = 32;
const canvas2 = document.querySelector('.canvas2');
const ctx2 = canvas2.getContext('2d');
let status = true;
let pieceTouchingStatus = false;
canvas2.height = canvas.height;
canvas2.width = canvas.width;
console.dir(canvas);
ctx.fillStyle = 'white';
ctx.fillRect(0,0,canvasWidth,canvasHeight);
for(let i = 0;i <= canvasWidth/box;i++){
    board[i*box] = [];
    for(j = 0;j <= canvasHeight/box;j++){
        ctx.rect(i*box,j*box,box,box);
        ctx.strokeStyle = 'black';
        ctx.stroke();
        board[i*box][j*box] = false;
    }
}