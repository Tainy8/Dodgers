const player1 = document.getElementById("player1")
const fiend1 = document.getElementById("fiend1")
const fiend2 = document.getElementById("fiend2")
const fiend3 = document.getElementById("fiend3")
const fiend4 = document.getElementById("fiend4")
const fiend5 = document.getElementById("fiend5")
const fiend6 = document.getElementById("fiend6")
const score = document.getElementById("score")
let fiendSpeed = 2;
let player1XPos = 900;
let player1Direction = 0;
let playerTimer;
const leftBorderPos = 485;
const rightBorderPos = 1254;
let fiend1XPos = 0;
let fiend1YPos = 0;
let fiend2XPos = 0;
let fiend2YPos = 0;
let fiend3XPos = 0;
let fiend3YPos = 0;
let fiend4XPos = 0;
let fiend4YPos = 0;
let fiend5XPos = 0;
let fiend5YPos = 0;
let fiend6XPos = 0;
let fiend6YPos = 0;
player1.style.left = player1XPos + "px";
function movePlayer() {
    player1XPos += player1Direction;
    player1.style.left = player1XPos + "px";

    if (player1XPos + 10 < leftBorderPos) {
        alert("Game Over!");
        player1XPos = 900
        fiend1YPos = 0;
        fiend2YPos = 0;
        fiend3YPos = 0;
        fiend4YPos = 0;
        fiend5YPos = 0;
        fiend6YPos = 0;
        fiend4.style.top = fiend4YPos;
        fiend5.style.top = fiend5YPos;
        fiend6.style.top = fiend6YPos;
        player1Direction = 0;
        fiendSpeed = 2;
        score.textContent = parseInt(score.textContent) - score.textContent;
    }
    if (player1XPos > rightBorderPos) {
        alert("Game Over!");
        player1XPos = 900;
        player1Direction = 0;
        fiend1YPos = 0;
        fiend2YPos = 0;
        fiend3YPos = 0;
        fiend4YPos = 0;
        fiend5YPos = 0;
        fiend6YPos = 0;
        fiend4.style.top = fiend4YPos;
        fiend5.style.top = fiend5YPos;
        fiend6.style.top = fiend6YPos;
        fiendSpeed = 2;
        score.textContent = parseInt(score.textContent) - score.textContent;
    }

}
function goDown() {
    fiend1YPos += fiendSpeed
    fiend1.style.top = fiend1YPos + "px";
    fiend2YPos += fiendSpeed;
    fiend2.style.top = fiend1YPos + "px";
    fiend3YPos += fiendSpeed;
    fiend3.style.top = fiend1YPos + "px";
    if (score.textContent === 10) {
        attack4()
    }
    if (score.textContent > 9) {
        fiend4YPos += fiendSpeed;
        fiend4.style.top = fiend1YPos + "px";
    }
    if (score.textContent === 30) {
        attack5()
    }
    if (score.textContent > 29) {
        fiend5YPos += fiendSpeed;
        fiend5.style.top = fiend5YPos + "px";
    }
    if (score.textContent === 50) {
        attack6()
    }
    if (score.textContent > 49) {
        fiend6YPos += fiendSpeed;
        fiend6.style.top = fiend6YPos + "px";
    }
    if (fiend1XPos > player1XPos && fiend1XPos < player1XPos + 25 && fiend1YPos > 555) {
        alert("Game Over!")
        fiend1YPos = 0;
        fiend2YPos = 0;
        fiend3YPos = 0;
        fiend4YPos = 0;
        fiend5YPos = 0;
        fiend6YPos = 0;
        fiendSpeed = 2;
        fiend4.style.top = fiend4YPos;
        fiend5.style.top = fiend5YPos;
        fiend6.style.top = fiend6YPos;
        player1XPos = 900
        player1Direction = 0;
        score.textContent = parseInt(score.textContent) - score.textContent;
    }
    if (fiend2XPos > player1XPos && fiend2XPos < player1XPos + 25 && fiend2YPos > 555) {
        alert("Game Over!")
        fiend1YPos = 0;
        fiend2YPos = 0;
        fiend3YPos = 0;
        fiend4YPos = 0;
        fiend5YPos = 0;
        fiend6YPos = 0;
        fiendSpeed = 2;
        fiend4.style.top = fiend4YPos;
        fiend5.style.top = fiend5YPos;
        fiend6.style.top = fiend6YPos;
        player2XPos = 900
        player1Direction = 0;
        score.textContent = parseInt(score.textContent) - score.textContent;
    }
    if (fiend3XPos > player1XPos && fiend3XPos < player1XPos + 25 && fiend3YPos > 555) {
        alert("Game Over!")
        fiend3YPos = 0;
        fiend2YPos = 0;
        fiend1YPos = 0;
        fiend4YPos = 0;
        fiend5YPos = 0;
        fiend6YPos = 0;
        fiendSpeed = 2;
        fiend4.style.top = fiend4YPos;
        fiend5.style.top = fiend5YPos;
        fiend6.style.top = fiend6YPos;
        player1XPos = 900
        player1Direction = 0;
        score.textContent = parseInt(score.textContent) - score.textContent;
    }
    if (fiend4XPos > player1XPos && fiend4XPos < player1XPos + 25 && fiend4YPos > 555) {
        alert("Game Over!")
        fiend3YPos = 0;
        fiend2YPos = 0;
        fiend1YPos = 0;
        fiend4YPos = 0;
        fiend5YPos = 0;
        fiend6YPos = 0;
        fiendSpeed = 2;
        fiend4.style.top = fiend4YPos;
        fiend5.style.top = fiend5YPos;
        fiend6.style.top = fiend6YPos;
        player1XPos = 900
        player1Direction = 0;
        score.textContent = parseInt(score.textContent) - score.textContent;
    }
    if (fiend5XPos > player1XPos && fiend5XPos < player1XPos + 25 && fiend5YPos > 555) {
        alert("Game Over!")
        fiend3YPos = 0;
        fiend2YPos = 0;
        fiend1YPos = 0;
        fiend4YPos = 0;
        fiend5YPos = 0;
        fiend6YPos = 0;
        fiendSpeed = 2;
        fiend4.style.top = fiend4YPos;
        fiend5.style.top = fiend5YPos;
        fiend6.style.top = fiend6YPos;
        player1XPos = 900
        player1Direction = 0;
        score.textContent = parseInt(score.textContent) - score.textContent;
    }

    if (fiend6XPos > player1XPos && fiend6XPos < player1XPos + 25 && fiend6YPos > 555) {
        alert("Game Over!")
        fiend3YPos = 0;
        fiend2YPos = 0;
        fiend1YPos = 0;
        fiend4YPos = 0;
        fiend5YPos = 0;
        fiend6YPos = 0;
        fiendSpeed = 2;
        fiend4.style.top = fiend4YPos;
        fiend5.style.top = fiend5YPos;
        fiend6.style.top = fiend6YPos;
        player1XPos = 900;
        player1Direction = 0;
        score.textContent = parseInt(score.textContent) - score.textContent;
    }
}
function control() {
    if (fiend1YPos > 600) {
        fiend1YPos = 0;
        attack1()
        score.textContent = parseInt(score.textContent, 10) + 1
    }
    if (parseInt(score.textContent) === 60) {
        fiendSpeed = 2.5;
    }
    if (parseInt(score.textContent) === 70) {
        fiendSpeed = 3;
    }
    if (parseInt(score.textContent) === 80) {
        fiendSpeed = 3.5;
    }
    if (parseInt(score.textContent) === 90) {
        fiendSpeed = 4;
    }
    if (parseInt(score.textContent) === 100) {
        fiendSpeed = 4.5;
    }
    if (fiend2YPos > 600) {
        fiend2YPos = 0;
        attack2()
    }
    if (fiend3YPos > 600) {
        fiend3YPos = 0;
        attack3()
    }
    if (fiend4YPos > 600) {
        fiend4YPos = 0;
        attack4()
    }
    if (fiend5YPos > 600) {
        fiend5YPos = 0;
        attack5()
    }
    if (fiend6YPos > 600) {
        fiend6YPos = 0;
        attack6()
    }
}
function attack1() {
    fiend1XPos = Math.floor(Math.random() * 800 + 490)
    fiend1.style.left = fiend1XPos + "px";
}
function attack2() {
    fiend2XPos = Math.floor(Math.random() * 800 + 490)
    fiend2.style.left = fiend2XPos + "px";
}
function attack3() {
    fiend3XPos = Math.floor(Math.random() * 800 + 490)
    fiend3.style.left = fiend3XPos + "px";
}
function attack4() {
    if (score.textContent > 9) {
        fiend4.style.backgroundColor = "red"
        fiend4XPos = Math.floor(Math.random() * 800 + 490)
        fiend4.style.left = fiend4XPos + "px";
    }
}
function attack5() {
    if (score.textContent > 29) {
        fiend5.style.backgroundColor = "red"
        fiend5XPos = Math.floor(Math.random() * 800 + 490)
        fiend5.style.left = fiend5XPos + "px";
    }
}
function attack6() {
    if (score.textContent > 49) {
        fiend6.style.backgroundColor = "red"
        fiend6XPos = Math.floor(Math.random() * 800 + 490)
        fiend6.style.left = fiend6XPos + "px";
    }

}


attack1()
attack2()
attack3()
document.addEventListener("keydown", function (evt) {
    switch (evt.code) {
        case "KeyD":
            if (!playerTimer) {
                player1Direction = 2;

            }

            break;
        case "KeyA":
            if (!playerTimer) {
                player1Direction = -2;

            }
    }
})
setInterval(movePlayer, 1)
setInterval(control, 1)
setInterval(goDown, 1)