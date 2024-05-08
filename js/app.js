// a class for my machine
class Machine {

    constructor(wager1, wager2, wager3, wager4, wager5, score) {
        this.wager1 = wager1
        this.wager2 = wager2
        this.wager3 = wager3
        this.wager4 = wager4
        this.wager5 = wager5
        this.score = score
    }
    // some objects for the item information
    // add values soon?
    // all of the images were downloaded from emojiisland.com
    items = {
        item1: {
            emotion: "happy",
            image: "/img/happy.png"
        },
        item2: {
            emotion: "sad",
            image: "/img/sad.png"
        },
        item3: {
            emotion: "angry",
            image: "/img/angry.png"
        },
        item4: {
            emotion: "upset",
            image: "/img/upset.png"
        },
        item5: {
            emotion: "excited",
            image: "/img/excited.png"
        },
        item6: {
            emotion: "crying",
            image: "/img/crying.png"
        },
        item7: {
            emotion:"annoyed",
            image: "/img/annoyed.png"
        },
        item8: {
            emotion: "surprised",
            image: "/img/surprised.png"
        },
        item9: {
            emotion: "mindblown",
            image: "/img/mindblown.png"
        }
    }   

    slot = [this.items.item1, this.items.item2, this.items.item3, this.items.item4, this.items.item5, this.items.item6, this.items.item7, this.items.item8, this.items.item9]

    subtractScore(num1) {
        this.score -= num1
    }

    addScore(num1) {
        this.score += num1
    }

    play() {
        // animation function will go here
        //
        let playButtonElement = document.getElementById("play")
        playButtonElement.disabled = true
        let slot1play = slotMachine.slot[Math.floor(Math.random() * slotMachine.slot.length)]
        let slot2play = slotMachine.slot[Math.floor(Math.random() * slotMachine.slot.length)]
        let slot3play = slotMachine.slot[Math.floor(Math.random() * slotMachine.slot.length)]
        let slotArray = [slot1play, slot2play, slot3play]   
        if(slotMachine.checkMatch(slotArray) === true && slotMachine.score > 0){
            setTimeout(function(wag) {
                slotMachine.addScore(slotMachine.currentWager)
            }, 1000)
            slotMachine.renderPlayInfo(slotArray)
            slotMachine.renderButtonUsable()
        }else if(slotMachine.checkMatch(slotArray) === false && slotMachine.score > 0 && slotMachine.checkPartialMatch(slotArray) === false){
            setTimeout(function(wag) {
                slotMachine.subtractScore(slotMachine.currentWager)
            }, 1000)
            slotMachine.renderPlayInfo(slotArray)
            slotMachine.renderButtonUsable()
        }else if(slotMachine.checkMatch(slotArray) === false && slotMachine.score > 0 && slotMachine.checkPartialMatch(slotArray) === true){
            setTimeout(function(wag) {
                slotMachine.addScore(slotMachine.currentWager / 2)
            }, 1000)
            slotMachine.renderPlayInfo(slotArray)
            slotMachine.renderButtonUsable()
        }else{
            alert("you don't have any more money!")
        }
    }

    renderPlayButton() {
        let playElement = document.getElementById("play")
        playElement.addEventListener("click", this.play)
    }
    
    renderScore() {
        let scoreElement = document.getElementById("score")
        scoreElement.innerHTML = this.score
    }

    renderWagerButtons() {
        let wager1Element = document.getElementById("wager1")
        wager1Element.addEventListener("click", function(wager) {
            slotMachine.renderCurrentWager(slotMachine.wager1)
        })
        let wager2Element = document.getElementById("wager2")
        wager2Element.addEventListener("click", function(wager) {
            slotMachine.renderCurrentWager(slotMachine.wager2)
        })
        let wager3Element = document.getElementById("wager3")
        wager3Element.addEventListener("click", function(wager) {
            slotMachine.renderCurrentWager(slotMachine.wager3)
        })
        let wager4Element = document.getElementById("wager4")
        wager4Element.addEventListener("click", function(wager) {
            slotMachine.renderCurrentWager(slotMachine.wager4)
        })
        let wager5Element = document.getElementById("wager5")
        wager5Element.addEventListener("click", function(wager) {
            slotMachine.renderCurrentWager(slotMachine.wager5)
        })
    }

    renderPlay(arr) {
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
        let matchType = document.getElementById("matchType")
    }

    renderMatchType(arr) {
        let matchType = document.getElementById("matchType")
        if (slotMachine.checkMatch(arr) === true) {
            matchType.innerHTML = "Match"
        }else if(slotMachine.checkPartialMatch(arr) === true){
            matchType.innerHTML = "Partial Match"
        }else{
            matchType.innerHTML = "Not a Match"
        }
    }

    renderCurrentWager(wag) {
        let currentWager = document.getElementById("currentWager")
        this.currentWager = wag
        currentWager.innerHTML = this.currentWager
    }

    checkPartialMatch(arr) {
        if (arr[0] === arr[1] && arr[0] !== arr[2] || arr[0] === arr[2] && arr[0] !== arr[1] || arr[1] === arr[2] && arr[0] !== arr[1]){
            return true
        }else{
            return false
        }
    }

    checkMatch(arr) {
        if(arr[0] === arr[1] && arr[1] === arr[2]){
            return true
        }else{
            return false
        }
    }

    render() {
        this.renderScore()
        this.renderPlayButton()
        this.renderWagerButtons()
        this.renderCurrentWager(this.wager1)
    }

    renderPlayInfo(arr) {
        setTimeout(function() {
            slotMachine.renderMatchType(arr)
        }, 1000)
        setTimeout(function() {
            slotMachine.renderScore()
        })
        setTimeout(function() {
            slotMachine.renderPlay(arr)
        }, 1000)
    }

    renderButtonUsable() {
        let playButtonElement = document.getElementById("play")
        setTimeout(function() {
            playButtonElement.disabled = false
        }, 1000)
    }

}

// instantiating machine
const slotMachine = new Machine(1, 5, 10, 25, 50, 100)

slotMachine.render()

