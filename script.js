var Timer = 60;
var score = 0;
var hitrn = 0;


// Score Fucntion
function IncreaseScore() {
    scoring = score += 10; // save 
    var scoreIncreasingAddition = document.querySelector("#scorevalue");
    scoreIncreasingAddition.textContent = score;
}

// Hit Random Number
function getnewhit() {
    hitrn = Math.floor(Math.random() * 10);
    var newhitting = document.querySelector("#hitvalue");
    newhitting.textContent = hitrn;
}

// Create Bobble 
function makeBubble() {
    var Clutter = "";

    for (var bubble = 1; bubble <= 102; bubble++) {
        var RandomNumber = Math.floor(Math.random() * 10);
        Clutter += `<div class="bubble">${RandomNumber}</div>`
    }

    var BottomBubbleLayout = document.querySelector("#panel-bottom");
    BottomBubbleLayout.innerHTML = Clutter;
}

// Timer Function //

function RunTimer() {
    var TimeCounting = setInterval(function () {
        if (Timer > 0) {
            Timer--;
            var TimerMachine = document.querySelector("#timervalue");
            TimerMachine.textContent = Timer;
        } else {
            clearInterval(TimeCounting);
            document.querySelector("#panel-bottom").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);
}

// Event Bubbling 
document.querySelector("#panel-bottom").addEventListener("click" ,function(dets){
    var ClickedNumberHitt = Number(dets.target.textContent);
    if(ClickedNumberHitt === hitrn){
        IncreaseScore();
        makeBubble();
        getnewhit();
    }
});

RunTimer();
makeBubble();
getnewhit();




//

