let houseScore = document.getElementById("house-score")
let guestScore = document.getElementById("guest-score")

houseScore.textContent = 0
guestScore.textContent = 0

//New Game

function newGame() {
    houseCount = 0
    guestCount = 0

    houseScore.textContent = 0
    guestScore.textContent = 0
}

newGame()

// House Score Buttons

function houseBtn1() {
    houseCount += 1
    houseScore.textContent = houseCount
}

function houseBtn2() {
    houseCount += 2
    houseScore.textContent = houseCount
}

function houseBtn3() {
    houseCount += 3
    houseScore.textContent = houseCount
}

// Guest Score Buttons

function guestBtn1() {
    guestCount += 1
    guestScore.textContent = guestCount
}

function guestBtn2() {
    guestCount += 2
    guestScore.textContent = guestCount
}

function guestBtn3() {
    guestCount += 3
    guestScore.textContent = guestCount
}


