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

    subtractScore(num1) {
        this.score -= num1
    }

    addScore(num1) {
        this.score -= num1
    }
}
// instantiating machine
const slotMachine = new Machine(1, 5, 10, 25, 100, 100)

// arrays for my slots
slot1 = [slotMachine.item1, slotMachine.item2, slotMachine.item3]
slot2 = [slotMachine.item1, slotMachine.item2, slotMachine.item3]
slot3 = [slotMachine.item1, slotMachine.item2, slotMachine.item3]

// a function that returns a random value from the arrays above
function play() {
    let slot1play = slot1[Math.floor(Math.random() * slot1.length)]
    let slot2play = slot2[Math.floor(Math.random() * slot2.length)]
    let slot3play = slot3[Math.floor(Math.random() * slot3.length)]
    let slotArray = [slot1play, slot2play, slot3play]   
    if(slotArray[0] === slotArray[1] && slotArray[0] === slotArray[2]){
        return [true, slotArray]
    }else{
        return [false, slotArray]
    }
}


// a function to render the things on screen where they need to go
function render() {
    renderScore()
    // renderScreen()
    renderButtons()
}
render()
function renderButtons() {
    let wager1Element = document.getElementById("wager1")
    wager1Element.addEventListener("click", wager1play)
    let wager2Element = document.getElementById("wager2")
    wager2Element.addEventListener("click", wager2play)
    let wager3Element = document.getElementById("wager3")
    wager3Element.addEventListener("click", wager3play)
    let wager4Element = document.getElementById("wager4")
    wager4Element.addEventListener("click", wager4play)
    let wager5Element = document.getElementById("wager5")
    wager5Element.addEventListener("click", wager5play)
}

function renderScore() {
    let scoreElement = document.getElementById("score")
    scoreElement.innerHTML = slotMachine.score
}
// this function assigns all the elements of the slot machine to the elements of the HTML. it's gonna be a big one!
function renderScreen() {
    let slot1item1Element = document.getElementById("item1A")
    slot1item1Element.innerHTML = slot1[0]

    let slot1item2Element = document.getElementById("item2A")
    slot1item2Element.innerHTML = slot1[1]

    let slot1item3Element = document.getElementById("item3A")
    slot1item3Element.innerHTML = slot1[2]

    let slot2item1Element = document.getElementById("item1B")
    slot2item1Element.innerHTML = slot2[0]

    let slot2item2Element = document.getElementById("item2B")
    slot2item2Element.innerHTML = slot2[1]

    let slot2item3Element = document.getElementById("item3B")
    slot2item3Element.innerHTML = slot2[2]

    let slot3item1Element = document.getElementById("item1C")
    slot3item1Element.innerHTML = slot3[0]
    
    let slot3item2Element = document.getElementById("item2C")
    slot3item2Element.innerHTML = slot3[1]

    let slot3item3Element = document.getElementById("item3C")
    slot3item3Element.innerHTML = slot3[2]
}
// a function that checks if the play function returns the same things=
function checkWinner() {
    play()
}

function wager1play() {
    if (play()[0] === false) {
        slotMachine.subtractScore(slotMachine.wager1)
        renderScore()
        console.log(play()[1])
    }else{
        slotMachine.addScore(slotMachine.wager1)
        renderScore()
        console.log(play()[1])
    }
}

function wager2play() {
    if (play()[0] === false) {
        slotMachine.subtractScore(slotMachine.wager2)
        renderScore()
    }else{
        slotMachine.addScore(slotMachine.wager2)
        renderScore()
    }
}

function wager3play() {
    if (play()[0] === false){
        slotMachine.subtractScore(slotMachine.wager3)
        renderScore()
    }else{
        slotMachine.addScore(slotMachine.wager3)
        renderScore()
    }
}

function wager4play() {
    if (play()[0] === false){
        slotMachine.subtractScore(slotMachine.wager4)
        renderScore()
    }else{
        slotMachine.addScore(slotMachine.wager4)
        renderScore()
    }
}

function wager5play() {
    if (play()[0] === false){
        slotMachine.subtractScore(slotMachine.wager5)
        renderScore()
    }else{
        slotMachine.addScore(slotMachine.wager5)
        renderScore()
    }
}