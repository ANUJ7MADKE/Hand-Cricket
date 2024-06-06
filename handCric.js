var player1hand = document.getElementById('player1hand')
var player2hand = document.getElementById('player2hand')

var score = document.getElementById('score')
var message = document.getElementById('message')

var statusdisplay = document.getElementById("status")

var buttonArea = document.getElementsByClassName("RunButtons")[0]
var scoreboard = document.getElementById("ScoreBoard")

var oddEvenBox = document.getElementById("oddEvenBox")
var batBallBoxChoice = document.getElementById("batBallBoxChoice")
var autoChoose = document.getElementById("autoChoose")
var playAgainBox = document.getElementById("playAgainBox")

var OddOrEven = ''
var myturn = "not decided"
var targetScore = -1
var arrayofhands = ["images\\hand0.jpg","images\\hand1.jpg","images\\hand2.jpg","images\\hand3.jpg","images\\hand4.jpg","images\\hand5.jpg","images\\hand6.jpg"]


function OddEvenBtn(choice){
    oddEvenBox.style.display = 'none'
    buttonArea.style.display = 'block'
    message.textContent = 'You have choosen ' + choice
    OddOrEven = choice
}

function BatBallBtn(choice){
    myturn = choice
    batBallBoxChoice.style.display = 'none'
    buttonArea.style.display = 'block'
    score.textContent = 0

    if (choice == 'batting'){
        statusdisplay.textContent = "You are batting"
        message.textContent = ''
    }else{
        statusdisplay.textContent = "You are balling"
        message.textContent = ''
    }
}

function playerHandDisplay(number,compHandNumber) {
    player1hand.src = arrayofhands[number]
    
    if (myturn == 'not decided'){
        buttonArea.style.display = 'none'
    }else{
        if (number == compHandNumber){
            scoreboard.src =  'images\\out.jpg'
            buttonArea.style.display = "none"
            scoreboard.style.display = "block"

            setTimeout(() => {
                buttonArea.style.display = "block"
                scoreboard.style.display = "none"
            }, 5000);
        }
    }        
}

function mainGameLogic(mychance,target,runs,compHandNumber,playerHandNumber){
    

    if (mychance == "batting"){
        if (target == -1){
            if (compHandNumber == playerHandNumber){
                myturn = "balling"
                targetScore = runs
                score.textContent = 0
                message.textContent = "All the Best!"
                statusdisplay.textContent = "You are balling. Target: "+ (targetScore+1)

                
            }else{
                score.textContent = parseInt(score.textContent) + playerHandNumber
                message.textContent = 'You scored ' + playerHandNumber + ' runs.'
            }
        } else {
            if (runs+playerHandNumber<=target){
                if (compHandNumber == playerHandNumber){
                    statusdisplay.textContent = 'OUT!'
                    if (runs == target){
                        message.textContent = "Tie!"
                        playAgainBox.style.display = 'block'
                        buttonArea.style.display = 'none'
                    }else{
                        message.textContent = "You Lost!"
                        playAgainBox.style.display = 'block'
                        buttonArea.style.display = 'none'
                    }
                    
                }else{
                    score.textContent = parseInt(score.textContent) + playerHandNumber
                    message.textContent = 'You scored ' + playerHandNumber + ' runs.'
                }
            } else {
                score.textContent = parseInt(score.textContent) + playerHandNumber
                message.textContent = "Target Completed, You Won!"
                playAgainBox.style.display = 'block'
                buttonArea.style.display = 'none'
            }
        }
        

    }else if (mychance == "balling"){
        if (targetScore == -1){
            if (compHandNumber == playerHandNumber){
                myturn = "batting"
                targetScore = runs
                score.textContent = 0
                message.textContent = "All the Best!"
                statusdisplay.textContent = "You are batting "  + "Target: " + (targetScore+1)
            }else{
                message.textContent = 'Opponent scored ' + compHandNumber + ' runs.'
                score.textContent = parseInt(score.textContent) +compHandNumber
            }
        } else {
            if (runs+compHandNumber<=targetScore){
                if (compHandNumber == playerHandNumber){
                    statusdisplay.textContent = 'OUT!'
                    if (runs == target){
                        message.textContent = "Tie!"
                        playAgainBox.style.display = 'block'
                        buttonArea.style.display = 'none'
                    }else{
                        message.textContent = "You Won!"
                        playAgainBox.style.display = 'block'
                        buttonArea.style.display = 'none'
                    }
                }else{
                    message.textContent = 'Opponent scored ' + compHandNumber + ' runs.'
                    score.textContent = parseInt(score.textContent) +compHandNumber
                }
            } else {
                message.textContent = "Target Completed, You Lost!"
                score.textContent = parseInt(score.textContent) + compHandNumber
                playAgainBox.style.display = 'block'
                buttonArea.style.display = 'none'
            }
        }

    }
}

function compHand() {
    var player2handNumber = Math.floor(Math.random() * arrayofhands.length)
    player2hand.src = arrayofhands[player2handNumber]
    return player2handNumber
}

function runThis(playerHandnumber){
    let compHandNumber = compHand()
    playerHandDisplay(playerHandnumber,compHandNumber)

    if (myturn == 'not decided'){
        score.textContent = compHandNumber + playerHandnumber
        if (OddOrEven == 'even'){
            if ((compHandNumber+playerHandnumber)%2==0){
                message.textContent = 'Even!'
                batBallBoxChoice.style.display = 'block'
            }
            else{
                message.textContent = 'Even!'
                batBallBoxDeclaration.style.display = 'block'

                
                let options = ['batting','balling']
                myturn = options[Math.floor(Math.random() * options.length)]

                if (myturn == 'batting'){
                    autoChoose.textContent = "Computer Chooses to Ball"
                    statusdisplay.textContent = "You are batting"
                    
                }else{
                    autoChoose.textContent = "Computer Chooses to Bat"
                    statusdisplay.textContent = "You are balling"
                    
                }

                setTimeout(() => {
                    score.textContent = 0
                    batBallBoxDeclaration.style.display = 'none'
                    message.textContent = ''
                }, 5000);


                buttonArea.style.display = 'block'
    
            }
        }else if (OddOrEven == 'odd'){
            if ((compHandNumber+playerHandnumber)%2==0){
                batBallBoxDeclaration.style.display = 'block'

                score.textContent = 0
                let options = ['batting','balling']
                myturn = options[Math.floor(Math.random() * options.length)]

                if (myturn == 'batting'){
                    autoChoose.textContent = "Computer Chooses to Ball"
                    statusdisplay.textContent = "You are batting"
                }else{
                    autoChoose.textContent = "Computer Chooses to Bat"
                    statusdisplay.textContent = "You are balling"
                }

                setTimeout(() => {
                    score.textContent = 0
                    batBallBoxDeclaration.style.display = 'none'
                    message.textContent = ''
                }, 5000);


                buttonArea.style.display = 'block'
                
            }
            else{
                message.textContent = 'Odd!'
                batBallBoxChoice.style.display = 'block'
            }
        

        }

    }else{
        mainGameLogic(myturn,targetScore,parseInt(score.textContent),compHandNumber,playerHandnumber)
    }
    
}

function playAgain(){
    location.reload(false)
}

