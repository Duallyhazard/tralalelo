var tralaleroAmount = 0;
var incTralaleroAmount = 1;

const bombCrocBaseCost = 10
var bombCrocCost = 10;
var bombCrocLevel = 0;

document.addEventListener("DOMContentLoaded", function() {updateTralaleroAmount();});
document.addEventListener("DOMContentLoaded", function() {updateBombCrocCost();});
document.addEventListener("DOMContentLoaded", function() {updateBombCrocLevel();});

function updateTralaleroAmount() {
    document.getElementById("tralalero-amount").innerHTML = tralaleroAmount;

}

function increaseTralalero() {
    tralaleroAmount += incTralaleroAmount;
    updateTralaleroAmount();
}

// BombCroc ~~~~~~~~~~~~~~~~

function buyBombCroc() {
    if (tralaleroAmount >= bombCrocCost) {
        tralaleroAmount -= bombCrocCost;
        updateTralaleroAmount();
        incBombCrocLevel();
        increaseBombCrocCost();

    } else {

    }
}

// BombCrocCost
function updateBombCrocCost() {
    document.getElementById("bombCrocCost").innerHTML = bombCrocCost;

}

function increaseBombCrocCost() {
    bombCrocCost = Math.floor(bombCrocBaseCost * Math.pow(1.3, bombCrocLevel));
    updateBombCrocCost();
}

// BombCrocLevel
function updateBombCrocLevel() {
    document.getElementById("bombCrocLevel").innerHTML = bombCrocLevel;

}

function incBombCrocLevel() {
    bombCrocLevel ++;
    updateBombCrocLevel();

}

// add every second
var interval = setInterval(addTralalero, 1000);
var tralaleroPerSec;

function updateTralaleroPerSec(BClevel) {
    tralaleroPerSec = BClevel*0.5;
}
function addTralalero() {
    updateTralaleroPerSec(bombCrocLevel);
    tralaleroAmount += tralaleroPerSec;
    updateTralaleroAmount();
}


/*
function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const obj = document.getElementById("value");
animateValue(obj, 100, 0, 5000);
*/