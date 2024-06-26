class Machine {

    constructor(wager1, wager2, wager3, wager4, wager5, score) {
        this.wager1 = wager1
        this.wager2 = wager2
        this.wager3 = wager3
        this.wager4 = wager4
        this.wager5 = wager5
        this.score = score
    }

    items = {
        item1: {
            emotion: "happy",
            image: "./img/happy.png"
        },
        item2: {
            emotion: "sad",
            image: "./img/sad.png"
        },
        item3: {
            emotion: "angry",
            image: "./img/angry.png"
        },
        item4: {
            emotion: "upset",
            image: "./img/upset.png"
        },
        item5: {
            emotion: "excited",
            image: "./img/excited.png"
        },
        item6: {
            emotion: "crying",
            image: "./img/crying.png"
        },
        item7: {
            emotion:"annoyed",
            image: "./img/annoyed.png"
        },
        item8: {
            emotion: "surprised",
            image: "./img/surprised.png"
        },
        item9: {
            emotion: "mindblown",
            image: "./img/mindblown.png"
        }
    }   

    slot = [this.items.item1, this.items.item2, this.items.item3, this.items.item4, this.items.item5, this.items.item6, this.items.item7, this.items.item8, this.items.item9]

    animationImages = ["./img/loading1.png", "./img/loading2.png", "./img/loading3.png"]

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
                console.log("match")
                slotMachine.renderAnimationImage()
                slotMachine.renderAnimation()
                slotMachine.renderPlaySound()
                setTimeout(function() {
                    slotMachine.renderMatch4Animation()
                }, 1500)
                setTimeout(function() {
                    slotMachine.renderWin1CoinAnimation()
                }, 3500)
                setTimeout(function() {
                    slotMachine.renderWinSound()
                }, 2000)
                setTimeout(function() {
                    slotMachine.renderMatchSound()
                }, 3000)
                setTimeout(function(wag) {
                    slotMachine.addScore(slotMachine.currentWager * slotMachine.score)
                }, 1000)
                slotMachine.renderPlayInfo(slotArray)
                setTimeout(function() {
                    slotMachine.renderButtonUsable()
                }, 2000)
            }else if(slotMachine.check4Matches(slotArray) === true){
                console.log("4 matched")
                slotMachine.renderAnimationImage()
                slotMachine.renderAnimation()
                slotMachine.renderPlaySound()
                setTimeout(function() {
                    slotMachine.renderMatch4Animation()
                }, 1500)
                setTimeout(function() {
                    slotMachine.renderWinSound()
                }, 2000)
                setTimeout(function(wag, wag2) {
                    slotMachine.addScore(slotMachine.currentWager * slotMachine.score / 2)
                }, 1000)
                slotMachine.renderPlayInfo(slotArray)
                setTimeout(function(wag) {
                    slotMachine.renderButtonUsable()
                }, 2000)
            }else if(slotMachine.check3Matches(slotArray) === true){
                console.log("3 matched")
                slotMachine.renderAnimationImage()
                slotMachine.renderAnimation()
                slotMachine.renderPlaySound()
                setTimeout(function() {
                    slotMachine.renderWin1CoinAnimation()
                }, 1500)
                setTimeout(function() {
                    slotMachine.render1CoinSound()
                }, 2000)
                setTimeout(function(wag) {
                    slotMachine.addScore(slotMachine.currentWager)
                }, 1000)
                slotMachine.renderPlayInfo(slotArray)
                setTimeout(function(wag) {
                    slotMachine.renderButtonUsable()
                }, 2000)
            }else{
                console.log("not a match")
                slotMachine.renderAnimationImage()
                slotMachine.renderAnimation()
                slotMachine.renderPlaySound()
                setTimeout(function(wag) {
                    slotMachine.subtractScore(slotMachine.currentWager)
                }, 1000)
                slotMachine.renderPlayInfo(slotArray)
                setTimeout(function() {
                    slotMachine.renderButtonUsable()
                }, 2000)
            }
        }else if(slotMachine.score <= 0){
            slotMachine.renderLoseScenario()
            slotMachine.hideCustomWagerButton()
            slotMachine.renderLoserSound()
            setTimeout(function() {
                slotMachine.renderResetButtonUsable()
            }, 2000)
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
        let enterCustomWager = document.getElementById("enterCustomWager")
        enterCustomWager.addEventListener("click", slotMachine.renderEnterCustomWagerButton)
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
        }else if(slotMachine.check4Matches(arr) === true){
            matchType.innerHTML = "4 Matched"
        }else if(slotMachine.check3Matches(arr) === true){
            matchType.innerHTML = "3 Matched"
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
        this.renderResetButton()
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
        this.wager4 = Number(customWager)
        let currentWager = document.getElementById("currentWager")
        this.currentWager = this.wager4
        currentWager.innerHTML = this.currentWager
        slotMachine.renderButtonUsable()
        let customWagerArea = document.querySelector(".custom-wager")
        customWagerArea.style.display = "none"
        let enterCustomWager = document.getElementById("enterCustomWager")
        enterCustomWager.style.display = "block"
    }   
    
    renderLoseScenario() {
        document.getElementById("wager1").disabled = true
        document.getElementById("wager2").disabled = true
        document.getElementById("wager3").disabled = true
        document.getElementById("play").disabled = true
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

    resetGame() {
        slotMachine.score += 50
        document.getElementById("wager1").disabled = false
        document.getElementById("wager2").disabled = false
        document.getElementById("wager3").disabled = false
        document.getElementById("play").disabled = false
        slotMachine.renderScore()
        let resetButtonElement = document.getElementById("resetButton")
        resetButtonElement.style.display = "none"
        let customWagerButton = document.getElementById("enterCustomWager")
        customWagerButton.style.display = "block"
    }
    
    renderResetButton() {
        let resetButtonElement = document.getElementById("resetButton")
        resetButtonElement.addEventListener("click", slotMachine.resetGame)
        resetButtonElement.style.display = "none"
    }

    renderResetButtonUsable() {
        let resetButtonElement = document.getElementById("resetButton")
        resetButtonElement.style.display = "block"
        resetButtonElement.style.backgroundColor = "red"
    }

    renderEnterCustomWagerButton() {
        let customWagerArea = document.querySelector(".custom-wager")
        customWagerArea.style.display = "flex"
        slotMachine.hideCustomWagerButton()
    }

    hideCustomWagerButton() {
      let customWagerButton = document.getElementById("enterCustomWager")
      customWagerButton.style.display = "none"  
    }

    renderPlaySound() {
        let playSound = new Audio("./audio/play.mp3")
        playSound.play()
    }

    renderWinSound() {
        let winSound = new Audio("./audio/win.mp3")
        winSound.play()
    }

    render1CoinSound() {
        let coinSound = new Audio("./audio/win1coin.mp3")
        coinSound.play()
    }

    renderWin1CoinAnimation() {
        $(".slot-images").animate({
            marginTop: "1%"
        })
        $(".slot-images").animate({
            marginTop: "-3%"
        })
        $(".slot-images").animate({
            marginTop: "1%"
        })
        $(".slot-images").animate({
            marginTop: "0%"
        })
    }

    renderMatch4Animation() {
        $(".slot-images").animate({
            marginTop: "-1%"
        })
        $(".slot-images").animate({
            marginTop: "1%"
        })
        $(".slot-images").animate({
            marginTop: "-1%"
        })
        $(".slot-images").animate({
            marginTop: "1%"
        })
        $(".slot-images").animate({
            marginTop: "-3%"
        })
        $(".slot-images").animate({
            marginTop: "1%"
        })
        $(".slot-images").animate({
            marginTop: "0%"
        })
    }

    renderLoserSound() {
        let loserSound = new Audio("./audio/loser.mp3")
        loserSound.play()
    }

    renderMatchSound() {
        let matchSound = new Audio("./audio/match.mp3")
        matchSound.play()
    }

}

const slotMachine = new Machine(1, 5, 10, null, "number must meet parameters", 50)

slotMachine.render()