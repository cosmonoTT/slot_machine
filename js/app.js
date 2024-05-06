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
    // some objects for the item information
    // we will have values in here soon
    // all of the images were downloaded from emojiisland.com
    item1 = {
        emotion: "happy",
        image: "/img/happy.png"
    }
    item2 = {
        emotion: "sad",
        image: "/img/sad.png"
    }
    item3 = {
        emotion: "angry",
        image: "/img/angry.png"
    }
    item4 = {
        emotion: "upset",
        image: "/img/upset.png"
    }
    item5 = {
        emotion: "excited",
        image: "/img/excited.png"
    }
    item6 = {
        emotion: "crying",
        image: "/img/crying.png"
    }
    item7 = {
        emotion:"annoyed",
        image: "/img/annoyed.png"
    }
    item8 = {
        emotion: "surprised",
        image: "/img/surprised.png"
    }
    item9 = {
        emotion: "mindblown",
        image: "/img/mindblown.png"
    }

    subtractScore(num1) {
        this.score -= num1
    }

    addScore(num1) {
        this.score += num1
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
    if(checkMatch(slotArray) === true && slotMachine.score > 0){
        slotMachine.addScore(slotMachine.currentWager)
        renderScore()
        renderPlay(slotArray)
    }else if(checkMatch(slotArray) === false && slotMachine.score > 0){
        slotMachine.subtractScore(slotMachine.currentWager)
        renderScore()
        renderPlay(slotArray)
    }else{
        alert("you don't have any more money!")
    }
}

function render() {
    renderScore()
    renderPlayButton()
    renderWagerButtons()
    renderCurrentWager(slotMachine.wager1)
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
    let slot1DisplayText = document.querySelector(".slot1Text")
    slot1DisplayText.innerHTML = arr[0].emotion
    let slot2DisplayText = document.querySelector(".slot2Text")
    slot2DisplayText.innerHTML = arr[1].emotion
    let slot3DisplayText = document.querySelector(".slot3Text")
    slot3DisplayText.innerHTML = arr[2].emotion
    let slot1DisplayImage = document.querySelector(".slot1Image")
    slot1DisplayImage.src = arr[0].image
    let slot2DisplayImage = document.querySelector(".slot2Image")
    slot2DisplayImage.src = arr[1].image
    let slot3DisplayImage = document.querySelector(".slot3Image")
    slot3DisplayImage.src = arr[2].image
}

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

// function renderAnimation() {
//     let slot1DisplayImage = document.querySelector("slot1Image")
//     slot1DisplayImage.src = 
// }
// const slotImages = [slotMachine.item1.image, slotMachine.item2.image, slotMachine.item3.image, slotMachine.item4.image, slotMachine.item5.image, slotMachine.item6.image, slotMachine.item7.image, slotMachine.item8.image, slotMachine.item9.image]



