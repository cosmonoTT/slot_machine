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

    animationImages = ["/img/loading1.png", "/img/loading2.png", "/img/loading3.png"]

    subtractScore(num1) {
        this.score -= num1
    }

    addScore(num1) {
        this.score += num1
    }

    play() {
        if (slotMachine.score >= slotMachine.currentWager){
            document.getElementById("play").disabled = true
            let slot1play = slotMachine.slot[Math.floor(Math.random() * slotMachine.slot.length)]
            let slot2play = slotMachine.slot[Math.floor(Math.random() * slotMachine.slot.length)]
            let slot3play = slotMachine.slot[Math.floor(Math.random() * slotMachine.slot.length)]
            let slot4play = slotMachine.slot[Math.floor(Math.random() * slotMachine.slot.length)]
            let slot5play = slotMachine.slot[Math.floor(Math.random() * slotMachine.slot.length)]
            let slotArray = [slot1play, slot2play, slot3play, slot4play, slot5play]   
            if(slotMachine.checkMatch(slotArray) === true){
                slotMachine.renderAnimationImage()
                slotMachine.renderAnimation()
                setTimeout(function(wag) {
                    slotMachine.addScore(slotMachine.currentWager * slotMachine.score)
                }, 1000)
                slotMachine.renderPlayInfo(slotArray)
                setTimeout(function() {
                    slotMachine.renderButtonUsable()
                }, 1000)
            }else if(slotMachine.check4Matches(slotArray) === true){
                slotMachine.renderAnimationImage()
                slotMachine.renderAnimation()
                setTimeout(function(wag) {
                    slotMachine.addScore(slotMachine.currentWager * slotMachine.score / 2)
                }, 1000)
                slotMachine.renderPlayInfo(slotArray)
                setTimeout(function(wag) {
                    slotMachine.renderButtonUsable()
                }, 1000)
            }else if(slotMachine.check3Matches(slotArray) === true){
                slotMachine.renderAnimationImage()
                slotMachine.renderAnimation()
                setTimeout(function(wag) {
                    slotMachine.addScore(slotMachine.currentWager)
                }, 1000)
                slotMachine.renderPlayInfo(slotArray)
                setTimeout(function(wag) {
                    slotMachine.renderButtonUsable()
                }, 1000)
            }else{
                slotMachine.renderAnimationImage()
                slotMachine.renderAnimation()
                setTimeout(function(wag) {
                    slotMachine.subtractScore(slotMachine.currentWager)
                }, 1000)
                slotMachine.renderPlayInfo(slotArray)
                setTimeout(function() {
                    slotMachine.renderButtonUsable()
                }, 1000)
            }
        }else if(slotMachine.score <= 0){
            slotMachine.renderLoseScenario()
        }else{
            slotMachine.renderCurrentWager(slotMachine.wager5)
            document.getElementById("play").disabled = true
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
        let submitButton = document.getElementById("enterInput")
        submitButton.addEventListener("click", function() {
            slotMachine.renderCustomWagerButton()
        })
    }

    renderPlay(arr) {
        let slot1DisplayImage = document.querySelector(".slot1Image")
        slot1DisplayImage.src = arr[0].image
        let slot2DisplayImage = document.querySelector(".slot2Image")
        slot2DisplayImage.src = arr[1].image
        let slot3DisplayImage = document.querySelector(".slot3Image")
        slot3DisplayImage.src = arr[2].image
        let slot4DisplayImage = document.querySelector(".slot4Image")
        slot4DisplayImage.src = arr[3].image
        let slot5DisplayImage = document.querySelector(".slot5Image")
        slot5DisplayImage.src = arr[4].image
    }

    renderMatchType(arr) {
        let matchType = document.getElementById("matchType")
        if (slotMachine.checkMatch(arr) === true) {
            matchType.innerHTML = "Match"
        }else if(slotMachine.check4Matches(arr) === true || slotMachine.check3Matches(arr) === true){
            matchType.innerHTML = "Partial Match"
        }else{
            matchType.innerHTML = "Not a Match"
        }
    }

    renderCurrentWager(wag) {
        if(slotMachine.currentWager === slotMachine.wager5 || slotMachine.currentWager > slotMachine.score){
            slotMachine.renderButtonUsable()
            let currentWager = document.getElementById("currentWager")
            this.currentWager = wag
            currentWager.innerHTML = this.currentWager
        }else{
            let currentWager = document.getElementById("currentWager")
            this.currentWager = wag
            currentWager.innerHTML = this.currentWager
        }
    }

    check4Matches(arr) {
        if(arr[0] === arr[1] && arr[1] === arr[2] && arr[0] === arr[3] && arr[0] !== arr[4] || arr[0] === arr[1] && arr[0] === arr[2] && arr[0] !== arr[3] && arr[0] === arr[4] || arr[0] === arr[1] && arr[0] !== arr[2] && arr[0] === arr[3] && arr[0] === arr[4] || arr[0] !== arr[1] && arr[0] === arr[2] && arr[0] === arr[3] && arr[0] === arr[4] || arr[0] !== arr[1] && arr[1] === arr[2] && arr[1] === arr[3] && arr[1] === arr[4]){
            return true
        }else{
            return false
        }
    }

    check3Matches(arr) {
        if(arr[0] !== arr[1] && arr[0] !== arr[2] && arr[0] === arr[3] && arr[0] === arr[4] || arr[0] !== arr[1] && arr[0] === arr[2] && arr[0] !== arr[3] && arr[0] === arr[4] || arr[0] !== arr[1] && arr[0] === arr[2] && arr[0] == arr[3] && arr[0] !== arr[3] || arr[0] !== arr[1] && arr[1] === arr[2] && arr[2] === arr[3] && arr[3] !== arr[0] || arr[0] !== arr[1] && arr[1] === arr[2] && arr[1] !== arr[3] && arr[1] === arr[4] || arr[0] !== arr[1] && arr[1] !== arr[2] && arr[1] === arr[3] && arr[1] === arr[4] || arr[0] !== arr[2] && arr[1] !== arr[2] && arr[2] === arr[3] && arr[3] === arr[4] || arr[0] === arr[1] && arr[0] === arr[2] && arr[0] !== arr[3] && arr[0] !== arr[4] || arr[0] === arr[1] && arr[0] === arr[3] && arr[0] !== arr[2] && arr[0] !== arr[4] || arr[0] === arr[1] && arr[0] !== arr[2] && arr[0] !== arr[3] && arr[0] === arr[4]) {
            return true
        }else{
            return false
        }
    }

    checkMatch(arr) {
        if(arr[0] === arr[1] && arr[0] === arr[2] && arr[0] === arr[3] && arr[0] === arr[4]){
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
        }, 1000)
        setTimeout(function() {
            slotMachine.renderPlay(arr)
        }, 1000)
    }

    renderButtonUsable() {
        let playButtonElement = document.getElementById("play")
        playButtonElement.disabled = false
    }

    renderCustomWagerButton() {
        let inputField = document.querySelector("input")
        let customWager = inputField.value
        slotMachine.wager4 = customWager
        let currentWager = document.getElementById("currentWager")
        slotMachine.currentWager = customWager
        currentWager.innerHTML = slotMachine.wager4
        slotMachine.renderButtonUsable()
    }   
    
    renderLoseScenario() {
        document.getElementById("wager1").disabled = true
        document.getElementById("wager2").disabled = true
        document.getElementById("wager3").disabled = true
        document.getElementById("play").disabled = true
    }

    renderSlot1Play() {
        let slot1DisplayImage = document.querySelector(".slot1Image")
        slot1DisplayImage.src = arr[0].image
    }

    renderAnimationImage() { 
        let slot1DisplayImage = document.querySelector(".slot1Image")
        slot1DisplayImage.src = slotMachine.animationImages[0]
        let slot2DisplayImage = document.querySelector(".slot2Image")
        slot2DisplayImage.src = slotMachine.animationImages[1]
        let slot3DisplayImage = document.querySelector(".slot3Image")
        slot3DisplayImage.src = slotMachine.animationImages[2]
        let slot4DisplayImage = document.querySelector(".slot4Image")
        slot4DisplayImage.src = slotMachine.animationImages[1]
        let slot5DisplayImage = document.querySelector(".slot5Image")
        slot5DisplayImage.src = slotMachine.animationImages[0]
    }

    renderAnimation() {
        $(".slot1Image").animate({
            height:"6vh"
        })
        $(".slot1Image").animate({
            height: "7vh"
        })
        $(".slot2Image").animate({
            height:"8vh"
        })
        $(".slot2Image").animate({
            height:"7vh"
        })
        $(".slot3Image").animate({
            height:"6vh"
        })
        $(".slot3Image").animate({
            height:"7vh"
        })
        $(".slot4Image").animate({
            height:"8vh"
        })
        $(".slot4Image").animate({
            height:"7vh"
        })
        $(".slot5Image").animate({
            height:"6vh"
        })
        $(".slot5Image").animate({
            height:"7vh"
        })
    }
}

// instantiating machine
const slotMachine = new Machine(1, 5, 10, null, "number must meet parameters", 50)

slotMachine.render()

