var btn1 = document.getElementById('btn1');

btn1.onclick = function(){
    alert("請點選下面的\"剪刀\" \"石頭\" \"布\" 這三個按鈕其中一個,AI會在你選出後的2秒內隨機出拳,你可以為AI取5個字以內的名子,祝你玩得愉快😁");
}

var bnt2 = document.getElementById('btn2');
var AIname = document.getElementById('AIname');

var type = "AI:";

bnt2.onclick = function(){
    const typeElement = document.getElementById('fname');
    type = typeElement.value;

    if (type.length > 5){
        alert("名子超過5個字,請再想其他的名子");
    }
    else {
        alert('更名成功!');
        AIname.innerHTML = type + ":";
    }
}

// 玩家 vs AI

var player = 0;
var num = 0

var pscore = document.getElementById('Playerscore');
var ascore = document.getElementById('AIscore');

var playerscore = 0;
var aiscore = 0;

var PlayerImgs = [
    "剪刀.png",
    "石頭.png",
    "布.png"
]

var img = document.getElementById('Playerimg');

var AIImgs = [
    "剪刀.png",
    "石頭.png",
    "布.png"
]

var ai = document.getElementById('AIimg');

let Scissors = document.getElementById('Scissors');
let Stone = document.getElementById('Stone');
let cloth = document.getElementById('cloth');

Scissors.onclick = function(){
    img.src = PlayerImgs[0];
    player = 1;


    num = Math.floor(Math.random() * 3);

    if (player == num){
        alert("平手");
        ai.src = AIImgs[0];
    }
    else if (num == 2){
        alert(type.split(":") + "贏");
        ai.src = AIImgs[1];
        aiscore += 1;
        ascore.innerHTML = aiscore;
    }
    else if (num == 3){
        alert("你贏了!");
        ai.src = AIImgs[2];
        playerscore += 1;
        pscore.innerHTML = playerscore;
    }
}

Stone.onclick = function(){
    img.src = PlayerImgs[1];
    player = 2;

    num = Math.floor(Math.random() * 2);

    if (player == num){
        alert("平手");
        ai.src = AIImgs[1];
    }
    else if (num == 1){
        alert("你贏了!");
        ai.src = AIImgs[0];
        playerscore += 1;
        pscore.innerHTML = playerscore;
    }
    else if (num == 3){
        alert(type.split(":") + "贏");
        ai.src = AIImgs[2];
        aiscore += 1;
        ascore.innerHTML = aiscore;
    }
}

cloth.onclick = function(){
    img.src = PlayerImgs[2];
    player = 3;


    num = Math.floor(Math.random() * 2);

    if (player == num){
        alert("平手");
        ai.src = AIImgs[2];
    }
    else if (num == 1){
        alert(type.split(":") + "贏");
        ai.src = AIImgs[0];
        aiscore += 1;
        ascore.innerHTML = aiscore;
    }
    else if (num == 2){
        alert("你贏了!");
        ai.src = AIImgs[1];
        playerscore += 1;
        pscore.innerHTML = playerscore;
    }
}