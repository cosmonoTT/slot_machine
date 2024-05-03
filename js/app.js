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
    item4 = "indecisive"
    item5 = "perplexed"
    item6 = "upset"
    item7 = "annoyed"
    item8 = "balanced"
    item9 = "bored"
}
// instantiating machine
const slotMachine = new Machine(1, 5, 10, 25, "total", 100)

// arrays for my slots
slot1 = [slotMachine.item1, slotMachine.item2, slotMachine.item3, slotMachine.item4, slotMachine.item5, slotMachine.item6, slotMachine.item7, slotMachine.item8, slotMachine.item9,]
slot2 = [slotMachine.item1, slotMachine.item2, slotMachine.item3, slotMachine.item4, slotMachine.item5, slotMachine.item6, slotMachine.item7, slotMachine.item8, slotMachine.item9,]
slot3 = [slotMachine.item1, slotMachine.item2, slotMachine.item3, slotMachine.item4, slotMachine.item5, slotMachine.item6, slotMachine.item7, slotMachine.item8, slotMachine.item9,]

// a function that returns a random value from the arrays above
function play() {
    let slot1play = slot1[Math.floor(Math.random() * slot1.length)]
    let slot2play = slot2[Math.floor(Math.random() * slot2.length)]
    let slot3play = slot3[Math.floor(Math.random() * slot3.length)]   
    return [slot1play, slot2play, slot3play]
}
console.log(play())

// a function to render the things on screen where they need to go
function render() {
    renderButtons()
    renderScore()
    renderScreen()
}

// a function to render the controls
function renderButtons() {
    // 
    let wager1Element = document.getElementById("wager1")
    // functions will be established soon
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

    let slot1item4Element = document.getElementById("item4A")
    slot1item4Element.innerHTML = slot1[3]

    let slot1item5Element = document.getElementById("item5A")
    slot1item5Element.innerHTML = slot1[4]

    let slot1item6Element = document.getElementById("item6A")
    slot1item6Element.innerHTML = slot1[5]

    let slot1item7Element = document.getElementById("item7A")
    slot1item7Element.innerHTML = slot1[6]

    let slot1item8Element = document.getElementById("item8A")
    slot1item8Element.innerHTML = slot1[7]

    let slot1item9Element = document.getElementById("item9A")
    slot1item9Element.innerHTML = slot1[8]

    let slot2item1Element = document.getElementById("item1B")
    slot2item1Element.innerHTML = slot2[0]

    let slot2item2Element = document.getElementById("item2B")
    slot2item2Element.innerHTML = slot2[1]

    let slot2item3Element = document.getElementById("item3B")
    slot2item3Element.innerHTML = slot2[2]

    let slot2item4Element = document.getElementById("item4B")
    slot2item4Element.innerHTML = slot2[3]

    let slot2item5Element = document.getElementById("item5B")
    slot2item5Element.innerHTML = slot2[4]

    let slot2item6Element = document.getElementById("item6B")
    slot2item6Element.innerHTML = slot2[5]

    let slot2item7Element = document.getElementById("item7B")
    slot2item7Element.innerHTML = slot2[6]

    let slot2item8Element = document.getElementById("item8B")
    slot2item8Element.innerHTML = slot2[7]

    let slot2item9Element = document.getElementById("item9B")
    slot2item9Element.innerHTML = slot2[8]

    let slot3item1Element = document.getElementById("item1C")
    slot3item1Element.innerHTML = slot3[0]
    
    let slot3item2Element = document.getElementById("item2C")
    slot3item2Element.innerHTML = slot3[1]

    let slot3item3Element = document.getElementById("item3C")
    slot3item3Element.innerHTML = slot3[2]

    let slot3item4Element = document.getElementById("item4C")
    slot3item4Element.innerHTML = slot3[3]

    let slot3item5Element = document.getElementById("item5C")
    slot3item5Element.innerHTML = slot3[4]

    let slot3item6Element = document.getElementById("item6C")
    slot3item6Element.innerHTML = slot3[5]

    let slot3item7Element = document.getElementById("item7C")
    slot3item7Element.innerHTML = slot3[6]

    let slot3item8Element = document.getElementById("item8C")
    slot3item8Element.innerHTML = slot3[7]

    let slot3item9Element = document.getElementById("item9C")
    slot3item9Element.innerHTML = slot3[8]
}