const CHOICES = [`rock` , `paper` , `scissor`];
const PLAYERDISPLAY = document.getElementById(`playerDISPLAY`);
const COMPUTERDISPLAY = document.getElementById(`computerDISPLAY`);
const RLT = document.getElementById(`RLT`);

function playGAME(PLAYERCHOICE){
    const COMPUTERCHOICE = CHOICES[Math.floor(Math.random() * 3)]
    let rlt = ``;

    if(PLAYERCHOICE === COMPUTERCHOICE){
        rlt = `It's a TIE!`;
    }
    else{
        switch(PLAYERCHOICE){
            case "rock":
                rlt = (COMPUTERCHOICE === `scissor`) ? `YOU WIN!` : `YOU LOSE!`;
                break;
            case "paper":
                rlt = (COMPUTERCHOICE === `rock`) ? `YOU WIN!` : `YOU LOSE!`;
                break;
            case "scissor":
                rlt = (COMPUTERCHOICE === `paper`) ? `YOU WIN!` : `YOU LOSE!`;
                break;
        }

        }

        PLAYERDISPLAY.textContent = `PLAYER: ${PLAYERCHOICE}`;
        COMPUTERDISPLAY.textContent = `COMPUTER: ${COMPUTERCHOICE}`;
        RLT.textContent = rlt;
        RLT.classList.remove(`WIN` , `LOSE` , `TIE`);
        switch(rlt){
            case `YOU WIN!`:
                RLT.classList.add(`WIN`);
                break;
            case `YOU LOSE!`:
                RLT.classList.add(`LOSE`);
                break;
            case `It's a TIE!`:
                RLT.classList.add(`TIE`);
        }
    }
