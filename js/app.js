// a class for my machine
class Machine {
    // constructor method will include the information i'd like to control for each button
    constructor(wager1, wager2, wager3, wager4, wager5, score) {
        this.wager1 = wager1
        this.wager2 = wager2
        this.wager3 = wager3
        this.wager4 = wager4
        this.wager5 = wager5
        this.score = score
    }
    // some variables for the items
    item1 = "happy"
    item2 = "sad"
    item3 = "angry"
    item4 = "upset"
    item5 = "elated"
    item6 = "pensive"
    item7 = "annoyed"
    item8 = "surprised"
    item9 = "cranky"

    subtractScore(num1) {
        this.score -= num1
    }

    addScore(num1) {
        this.score -= num1
    }
}
// instantiating machine
const slotMachine = new Machine(1, 5, 10, 25, 50, 100)

// arrays for my slots
slot1 = [slotMachine.item1, slotMachine.item2, slotMachine.item3, slotMachine.item4, slotMachine.item5, slotMachine.item6, slotMachine.item7, slotMachine.item8, slotMachine.item9]
slot2 = [slotMachine.item1, slotMachine.item2, slotMachine.item3, slotMachine.item4, slotMachine.item5, slotMachine.item6, slotMachine.item7, slotMachine.item8, slotMachine.item9]
slot3 = [slotMachine.item1, slotMachine.item2, slotMachine.item3, slotMachine.item4, slotMachine.item5, slotMachine.item6, slotMachine.item7, slotMachine.item8, slotMachine.item9]

function play() {
    let slot1play = slot1[Math.floor(Math.random() * slot1.length)]
    let slot2play = slot2[Math.floor(Math.random() * slot2.length)]
    let slot3play = slot3[Math.floor(Math.random() * slot3.length)]
    let slotArray = [slot1play, slot2play, slot3play]   
    renderPlay(slotArray)
    if(checkMatch(slotArray) === true){
        slotMachine.addScore(slotMachine.currentWager)
        renderScore()
    }else{
        slotMachine.subtractScore(slotMachine.currentWager)
        renderScore()
    }
}

// a function to render the things on screen where they need to go
function render() {
    renderScore()
    renderPlayButton()
    renderWagerButtons()
}
render()

function renderPlayButton() {
    let playElement = document.getElementById("play")
    playElement.addEventListener("click", play)
}

function renderScore() {
    let scoreElement = document.getElementById("score")
    scoreElement.innerHTML = slotMachine.score
}

function renderWagerButtons() {
    let wager1Element = document.getElementById("wager1")
    wager1Element.addEventListener("click", wager1Point)
    let wager2Element = document.getElementById("wager2")
    wager2Element.addEventListener("click", wager5Points)
    let wager3Element = document.getElementById("wager3")
    wager3Element.addEventListener("click", wager10Points)
    let wager4Element = document.getElementById("wager4")
    wager4Element.addEventListener("click", wager25Points)
    let wager5Element = document.getElementById("wager5")
    wager5Element.addEventListener("click", wager50Points)
}


function checkMatch(arr) {
    if(arr[0] === arr[1] && arr[0] === arr[2]){
        return true
    }else{
        return false
    }
}

function renderPlay(arr) {
    let slot1Display = document.querySelector(".slot1")
    slot1Display.innerHTML = arr[0]
    let slot2Display = document.querySelector(".slot2")
    slot2Display.innerHTML = arr[1]
    let slot3Display = document.querySelector(".slot3")
    slot3Display.innerHTML = arr[2]
}
// this function will render the current wager
function renderCurrentWager(wag) {
    let currentWager = document.getElementById("currentWager")
    slotMachine.currentWager = wag
    currentWager.innerHTML = slotMachine.currentWager
}

function wager1Point() {
    renderCurrentWager(slotMachine.wager1)
}

function wager5Points() {
    renderCurrentWager(slotMachine.wager2)
}

function wager10Points() {
    renderCurrentWager(slotMachine.wager3)
}

function wager25Points() {
    renderCurrentWager(slotMachine.wager4)
}

function wager50Points() {
    renderCurrentWager(slotMachine.wager5)
}