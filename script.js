/* Declare variables below to save the different sections (divs) of your story*/

let enterButton = document.querySelector(".option-enter")
let leaveButton = document.querySelector(".option-leave")
let leftButton = document.querySelector(".option-left")
let rightButton = document.querySelector(".option-right")
let returnButton = document.querySelector(".option-return")
let refuseButton = document.querySelector(".option-refuse")
let restartButton = document.querySelector(".option-restart")
let trap1sun = document.querySelector(".trap1-sun")
let trap1grass = document.querySelector(".trap1-grass")
let trap1water = document.querySelector(".trap1-water")
let trap2sun = document.querySelector(".trap2-sun")
let trap2grass = document.querySelector(".trap2-grass")
let trap2water = document.querySelector(".trap2-water")
let trap3sun = document.querySelector(".trap3-sun")
let trap3grass = document.querySelector(".trap3-grass")
let trap3water = document.querySelector(".trap3-water")
let trap4sun = document.querySelector(".trap4-sun")
let trap4grass = document.querySelector(".trap4-grass")
let trap4water = document.querySelector(".trap4-water")
let monster1fightbutton = document.querySelector(".option-fight")
let monster1runbutton = document.querySelector(".option-run")
let monsterdeadButton = document.querySelector(".monsterdeadbutton")
let monster2fightbutton = document.querySelector(".option-fight2")
let monster3fightbutton = document.querySelector(".option-fight3")
let monsterwinbutton = document.querySelector(".monster-winbutton")
let body = document.querySelector("body")
let dietext = document.querySelector(".dietext")

let trap1text = document.querySelector(".trap1text")
let trap2text = document.querySelector(".trap2text")
let trap3text = document.querySelector(".trap3text")
let trap4text = document.querySelector(".trap4text")

let startButtons = document.querySelector(".buttons-start")
let splitButtons = document.querySelector(".buttons-split")
let returnButtons = document.querySelector(".buttons-return")
let trap1Buttons = document.querySelector(".trap1buttons")
let trap2Buttons = document.querySelector(".trap2buttons")
let trap3Buttons = document.querySelector(".trap3buttons")
let trap4Buttons = document.querySelector(".trap4buttons")
let monster1Buttons = document.querySelector(".buttons-monster")



let openingScreen = document.querySelector(".story-opening")
let enterScreen = document.querySelector(".chose-enter")
let leaveScreen = document.querySelector(".chose-leave")
let refuseScreen = document.querySelector(".chose-refuse")
let trap1Screen = document.querySelector(".trap-1")
let trap2Screen = document.querySelector(".trap-2")
let trap3Screen = document.querySelector(".trap-3")
let trap4Screen = document.querySelector(".trap-4")
let monster1Screen = document.querySelector(".monster1")
let monster2Screen = document.querySelector(".monster2")
let monster3Screen = document.querySelector(".monster3")
let monsterRunScreen = document.querySelector(".monsterrun")
let killedMonsterScreen = document.querySelector(".killedmonster")
let monsterWinScreen = document.querySelector(".monsterwin")
let monsterLoseScreen = document.querySelector(".monsterlose")
let trapWinScreen = document.querySelector(".trapwin")
let trapLoseScreen = document.querySelector(".traplose")

let traplosses = 0


//RESTART LOOP (leaving and coming back)
leaveButton.onclick = function() {
  openingScreen.style.display = "none";
  leaveScreen.style.display = "block";
  startButtons.style.display = "none"
  returnButtons.style.display = "block"
};
returnButton.onclick = function() {
  openingScreen.style.display = "block";
  leaveScreen.style.display = "none";
  startButtons.style.display = "block"
  returnButtons.style.display = "none"
};
refuseButton.onclick = function() {
  setTimeout(restartFunction, 3000);
  leaveScreen.style.display = "none";
  returnButtons.style.display = "none"
};
function restartFunction() {
  alert('You gotta refresh the page now :/');
}


restartButton.onclick = function() {
  openingScreen.style.display = "block";
  refuseScreen.style.display = "none";
  startButtons.style.display = "block"
  restartButton.style.display = "none"
};


enterButton.onclick = function() {
  openingScreen.style.display = "none";
  enterScreen.style.display = "block";
  startButtons.style.display = "none"
  splitButtons.style.display = "block"
};

rightButton.onclick = function() {
  enterScreen.style.display = "none";
  monster1Screen.style.display = "block"
  splitButtons.style.display = "none"
  monster1Buttons.style.display = "block"
}
monster1runbutton.onclick = function() {
  monster1Screen.style.display = "none"
  monsterRunScreen.style.display = "block"
  monster1Buttons.style.display = "none"
  monsterdeadButton.style.display = "block"
}
monsterdeadButton.onclick = function(){
  monsterRunScreen.style.display = "none"
  monsterLoseScreen.style.display = "block"
  monsterdeadButton.style.display = "none"
  setTimeout(restartFunction, 3000);
    body.style.backgroundColor = "grey";
}
monster1fightbutton.onclick = function() {
  monster1Screen.style.display = "none"
  monster2Screen.style.display = "block"
  monster1Buttons.style.display = "none"
  monster2fightbutton.style.display = "block"
}

monster2fightbutton.onclick = function() {
  monster2Screen.style.display = "none"
  monster3Screen.style.display = "block"
  monster2fightbutton.style.display = "none"
  monster3fightbutton.style.display = "block"
}
monster3fightbutton.onclick = function() {
  monster3Screen.style.display = "none"
  killedMonsterScreen.style.display = "block"
  monster3fightbutton.style.display = "none"
  monsterwinbutton.style.display = "block"
}
monsterwinbutton.onclick = function() {
  monsterWinScreen.style.display = "block"
  killedMonsterScreen.style.display = "none"
}


leftButton.onclick = function() {
  enterScreen.style.display = "none";
  trap1Screen.style.display = "block";
  splitButtons.style.display = "none"
  trap1Buttons.style.display = "block"
};

trap1sun.onclick = function() {
  trap1Screen.style.display = "none"
  trap2Screen.style.display = "block"
  trap1Buttons.style.display = "none"
  trap2Buttons.style.display = "block"
  body.style.backgroundColor = "white";
}
trap1grass.onclick = function() {
  body.style.backgroundColor = "red";
  trap1text.innerHTML = "NOPE!! try again! remember: Dawn breaks with stirring air, as Sun shines down on new day fair."
  traplosses++
  if (traplosses >= 4) {
    trap1Screen.style.display = "none"
    trap2Screen.style.display = "none"
    trap3Screen.style.display = "none"
    trap4Screen.style.display = "none"
    trapLoseScreen.style.display = "block"
    setTimeout(restartFunction, 3000);
  }
}
trap1water.onclick = function() {
  trap1text.innerHTML = "NOPE!! try again! remember: Dawn breaks with stirring air, as Sun shines down on new day fair."
  traplosses++
  body.style.backgroundColor = "red";
  if (traplosses >= 4) {
    trap1Screen.style.display = "none"
    trap2Screen.style.display = "none"
    trap3Screen.style.display = "none"
    trap4Screen.style.display = "none"
    trapLoseScreen.style.display = "block"
    setTimeout(restartFunction, 3000);
  }
}

trap2grass.onclick = function() {
  trap2Screen.style.display = "none"
  trap3Screen.style.display = "block"
  trap2Buttons.style.display = "none"
  trap3Buttons.style.display = "block"
  body.style.backgroundColor = "white";
}
trap2sun.onclick = function() {
  trap2text.innerHTML = "NOPE!! try again! remember: Midday blaze bakes earth and grass, The farmer waits for heat to pass."
  traplosses++
  body.style.backgroundColor = "red";
  if (traplosses >= 4) {
    trap1Screen.style.display = "none"
    trap2Screen.style.display = "none"
    trap3Screen.style.display = "none"
    trap4Screen.style.display = "none"
    trapLoseScreen.style.display = "block"
    setTimeout(restartFunction, 3000);
  }
}
trap2water.onclick = function() {
  trap2text.innerHTML = "NOPE!! try again! remember: Midday blaze bakes earth and grass, The farmer waits for heat to pass."
  traplosses++
  body.style.backgroundColor = "red";
  if (traplosses >= 4) {
    trap1Screen.style.display = "none"
    trap2Screen.style.display = "none"
    trap3Screen.style.display = "none"
    trap4Screen.style.display = "none"
    trapLoseScreen.style.display = "block"
    setTimeout(restartFunction, 3000);
  }
}
trap3water.onclick = function() {
  trap3Screen.style.display = "none"
  trap4Screen.style.display = "block"
  trap3Buttons.style.display = "none"
  trap4Buttons.style.display = "block"
  body.style.backgroundColor = "white";
  
}
trap3sun.onclick = function() {
  trap3text.innerHTML = "NOPE!! try again! remember: Evening cool brings water, wine, Drink and laughter passing time"
  traplosses++
  body.style.backgroundColor = "red";
  if (traplosses >= 4) {
    trap1Screen.style.display = "none"
    trap2Screen.style.display = "none"
    trap3Screen.style.display = "none"
    trap4Screen.style.display = "none"
    trapLoseScreen.style.display = "block"
    setTimeout(restartFunction, 3000);
  }
}
trap3grass.onclick = function() {
  trap3text.innerHTML = "NOPE!! try again! remember: Evening cool brings water, wine, Drink and laughter passing time"
  traplosses++
  body.style.backgroundColor = "red";
  if (traplosses >= 4) {
    trap1Screen.style.display = "none"
    trap2Screen.style.display = "none"
    trap3Screen.style.display = "none"
    trap4Screen.style.display = "none"
    trapLoseScreen.style.display = "block"
    setTimeout(restartFunction, 3000);
  }
}
trap4grass.onclick = function() {
  trap4Screen.style.display = "none"
  trapWinScreen.style.display = "block"
  trap4Buttons.style.display = "none"
  body.style.backgroundColor = "white";
}
trap4sun.onclick = function() {
  trap4text.innerHTML = "NOPE!! try again! remember: Night sees shining, roaring fire, as wood and coals burn on the pyre."
  traplosses++
  body.style.backgroundColor = "red";
  if (traplosses >= 4) {
    trap1Screen.style.display = "none"
    trap2Screen.style.display = "none"
    trap3Screen.style.display = "none"
    trap4Screen.style.display = "none"
    trapLoseScreen.style.display = "block"
    setTimeout(restartFunction, 3000);
  }
}
trap4water.onclick = function() {
  trap4text.innerHTML = "NOPE!! try again! remember: Night sees shining, roaring fire, as wood and coals burn on the pyre."
  traplosses++
  body.style.backgroundColor = "red";
  if (traplosses >= 4) {
    trap1Screen.style.display = "none"
    trap2Screen.style.display = "none"
    trap3Screen.style.display = "none"
    trap4Screen.style.display = "none"
    trapLoseScreen.style.display = "block"
    setTimeout(restartFunction, 3000);
  }
}



