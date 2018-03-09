let c = document.getElementById("mycanvas");
let cue = document.getElementById("cue");
let ctx = c.getContext("2d");
c.addEventListener('click', function (e) {

    let x = Math.round((e.layerX - Radius) / (Radius * 2));
    let y = Math.round((e.layerY - Radius) / (Radius * 2));
    if (Checkerboard[x][y] != 0) {
        return;
    }
    Checkerboard[x][y] = Player;
    let 水平 = horizontalLeft(x, y) + horizontalRight(x, y) - 1;
    let 垂直 = verticalDown(x, y) + verticalUp(x, y) - 1;
    let 左上 = leftUp(x, y) + rightDown(x, y) - 1;
    let 左下 = leftDown(x, y) + rightUp(x, y) - 1;
    console.log(x, y);
    console.log('水平', 水平);
    console.log('垂直', 垂直);
    console.log('左上', 左上);
    console.log('左下', 左下);
    show();
    if (水平 >= 5 || 垂直 >= 5 || 左上 >= 5 || 左下 >= 5) {
        alert(Player == 1 ? "黑方胜" : "白方胜");
        init();
    }
    Player = Player == 1 ? 2 : 1;
    cue.innerText = 'Player:' + (Player == 1 ? "黑方" : "白方");
}, false);
let Radius = 30;
let Length = 10;
let Player = 1;

let Checkerboard = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
function init() {
    cue.innerText = 'Player:黑方';
    Checkerboard = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
    Player = 1;
    show();
}
function show() {
    ctx.clearRect(0, 0, c.width, c.height);
    for (var i = 0; i < Length; i++) {
        for (var j = 0; j < Length; j++) {
            ctx.fillStyle = '#000000';
            if (i == 0) {
                ctx.beginPath();
                ctx.lineWidth = 1;
                ctx.moveTo((i * 2 + 1) * Radius, j * (Radius * 2) + Radius);
                ctx.lineTo((i * 2 + 2) * Radius, j * (Radius * 2) + Radius);
                ctx.stroke();
            } else if (i == Length - 1) {
                ctx.beginPath();
                ctx.lineWidth = 1;
                ctx.moveTo((i * 2) * Radius, j * (Radius * 2) + Radius);
                ctx.lineTo((i * 2 + 1) * Radius, j * (Radius * 2) + Radius);
                ctx.stroke();
            } else {
                ctx.beginPath();
                ctx.lineWidth = 1;
                ctx.moveTo((i * 2) * Radius, j * (Radius * 2) + Radius);
                ctx.lineTo((i * 2 + 2) * Radius, j * (Radius * 2) + Radius);
                ctx.stroke();
            }
            if (j == 0) {
                ctx.beginPath();
                ctx.lineWidth = 1;
                ctx.moveTo(i * (Radius * 2) + Radius, (j * 2 + 1) * Radius);
                ctx.lineTo(i * (Radius * 2) + Radius, (j * 2 + 2) * Radius);
                ctx.stroke();
            } else if (j == Length - 1) {
                ctx.beginPath();
                ctx.lineWidth = 1;
                ctx.moveTo(i * (Radius * 2) + Radius, (j * 2) * Radius);
                ctx.lineTo(i * (Radius * 2) + Radius, (j * 2 + 1) * Radius);
                ctx.stroke();
            } else {
                ctx.beginPath();
                ctx.lineWidth = 1;
                ctx.moveTo(i * (Radius * 2) + Radius, (j * 2) * Radius);
                ctx.lineTo(i * (Radius * 2) + Radius, (j * 2 + 2) * Radius);
                ctx.stroke();
            }
            if (Checkerboard[i][j] == 2) {
                ctx.fillStyle = '#000000';
                ctx.beginPath();
                ctx.arc((i * 2 + 1) * Radius, (j * 2 + 1) * Radius, Radius, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.fillStyle = '#ffffff';
                ctx.beginPath();
                ctx.arc((i * 2 + 1) * Radius, (j * 2 + 1) * Radius, 29, 0, 2 * Math.PI);
                ctx.fill();
            }
            if (Checkerboard[i][j] == 1) {
                ctx.fillStyle = '#000000';
                ctx.beginPath();
                ctx.arc((i * 2 + 1) * Radius, (j * 2 + 1) * Radius, Radius, 0, 2 * Math.PI);
                ctx.fill();
            }
        }
    }
}

let horizontalLeft = function (x, y) {         //水平方向左
    if (x >= 0 && y < 10 && x < 10 && y >= 0 && Checkerboard[x][y] == Player) {
        return 1 + horizontalLeft(x - 1, y);
    } else {
        return 0;
    }
}
let horizontalRight = function (x, y) {         //水平方向右
    if (x >= 0 && y < 10 && x < 10 && y >= 0 && Checkerboard[x][y] == Player) {
        return 1 + horizontalRight(x + 1, y);
    } else {
        return 0;
    }
}
let verticalUp = function (x, y) {
    if (x >= 0 && y < 10 && x < 10 && y >= 0 && Checkerboard[x][y] == Player) {
        return 1 + verticalUp(x, y - 1);
    } else {
        return 0;
    }
}
let verticalDown = function (x, y) {
    if (x >= 0 && y < 10 && x < 10 && y >= 0 && Checkerboard[x][y] == Player) {
        return 1 + verticalDown(x, y + 1);
    } else {
        return 0;
    }
}
let leftUp = function (x, y) {
    if (x >= 0 && y < 10 && x < 10 && y >= 0 && Checkerboard[x][y] == Player) {
        return 1 + leftUp(x - 1, y - 1);
    } else {
        return 0;
    }
}
let rightDown = function (x, y) {
    if (x >= 0 && y < 10 && x < 10 && y >= 0 && Checkerboard[x][y] == Player) {
        return 1 + rightDown(x + 1, y + 1);
    } else {
        return 0;
    }
}
let leftDown = function (x, y) {
    if (x >= 0 && y < 10 && x < 10 && y >= 0 && Checkerboard[x][y] == Player) {
        return 1 + leftDown(x + 1, y - 1);
    } else {
        return 0;
    }
}
let rightUp = function (x, y) {
    if (x >= 0 && y < 10 && x < 10 && y >= 0 && Checkerboard[x][y] == Player) {
        return 1 + rightUp(x - 1, y + 1);
    } else {
        return 0;
    }
}

init();
