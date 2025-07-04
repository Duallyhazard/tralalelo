var tralaleroAmount = 0;
var incTralaleroAmount = 1;

const bombCrocBaseCost = 10;
var bombCrocCost = 10;
var bombCrocLevel = 0;


// onload functions

document.addEventListener("DOMContentLoaded", function() {updateTralaleroAmount();});

document.addEventListener("DOMContentLoaded", function() {updateBombCrocCost();});
document.addEventListener("DOMContentLoaded", function() {updateBombCrocLevel();});
document.addEventListener("DOMContentLoaded", function() {updateLiriliLarilaCost();});
document.addEventListener("DOMContentLoaded", function() {updateLiriliLarilaLevel();});
document.addEventListener("DOMContentLoaded", function() {updateBrrBrrPatapimCost();});
document.addEventListener("DOMContentLoaded", function() {updateBrrBrrPatapimLevel();});

document.addEventListener("DOMContentLoaded", function() {updateTralaleroPerSec();});


function updateTralaleroAmount() {
    document.getElementById("tralalero-amount").innerHTML = tralaleroAmount;

}

// runs every time tralalero is clicked
function increaseTralalero() {
    tralaleroAmount += incTralaleroAmount;
    updateTralaleroAmount();
}

// BombCroc ~~~~~~~~~~~~~~~~

function buyBombCroc() {
    if (tralaleroAmount >= bombCrocCost) {
        tralaleroAmount -= bombCrocCost;

        // decrease tralalero amount
        updateTralaleroAmount();

        // bomb croc level ++
        incBombCrocLevel();

        // bomb croc costs more
        increaseBombCrocCost();

        // more tralalalero per sec
        updateTralaleroPerSec();

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

// Lirili Larila ~~~~~~~~~~~~~~~~

const liriliLarilaBaseCost = 11;
var liriliLarilaCost = 11;
var liriliLarilaLevel = 0;

function buyLiriliLarila() {
    if (tralaleroAmount >= liriliLarilaCost) {
        tralaleroAmount -= liriliLarilaCost;

        // decrease tralalero amount
        updateTralaleroAmount();

        // bomb croc level ++
        incLiriliLarilaLevel();

        // bomb croc costs more
        increaseLiriliLarilaCost();

        // more tralalalero per sec
        updateTralaleroPerSec();

    }
}

// LiriliLarilaCost
function updateLiriliLarilaCost() {
    document.getElementById("liriliLarilaCost").innerHTML = liriliLarilaCost;

}

function increaseLiriliLarilaCost() {
    liriliLarilaCost = Math.floor(liriliLarilaBaseCost * Math.pow(1.3, liriliLarilaLevel));
    updateLiriliLarilaCost();
}

// LiriliLarilaLevel
function updateLiriliLarilaLevel() {
    document.getElementById("liriliLarilaLevel").innerHTML = liriliLarilaLevel;

}

function incLiriliLarilaLevel() {
    liriliLarilaLevel ++;
    updateLiriliLarilaLevel();

}

// Brr Brr Patapim ~~~~~~~~~~~~~~~~

const brrBrrPatapimBaseCost = 12;
var brrBrrPatapimCost = 12;
var brrBrrPatapimLevel = 0;

function buyBrrBrrPatapim() {
    if (tralaleroAmount >= brrBrrPatapimCost) {
        tralaleroAmount -= brrBrrPatapimCost;

        // decrease tralalero amount
        updateTralaleroAmount();

        // bomb croc level ++
        incBrrBrrPatapimLevel();

        // bomb croc costs more
        increaseBrrBrrPatapimCost();

        // more tralalalero per sec
        updateTralaleroPerSec();

    }
}

// BrrBrrPatapimCost
function updateBrrBrrPatapimCost() {
    document.getElementById("brrBrrPatapimCost").innerHTML = brrBrrPatapimCost;

}

function increaseBrrBrrPatapimCost() {
    brrBrrPatapimCost = Math.floor(brrBrrPatapimBaseCost * Math.pow(1.3, brrBrrPatapimLevel));
    updateBrrBrrPatapimCost();
}

// BrrBrrPatapimLevel
function updateBrrBrrPatapimLevel() {
    document.getElementById("brrBrrPatapimLevel").innerHTML = brrBrrPatapimLevel;

}

function incBrrBrrPatapimLevel() {
    brrBrrPatapimLevel ++;
    updateBrrBrrPatapimLevel();

}



// add every second ~~~~~~~~~~~~~~~~~~~~~~~~
var tralaleroPerSec;

function updateTralaleroPerSec() {
    tralaleroPerSec = 
        bombCrocLevel*0.5 
        + liriliLarilaLevel * 2 
        + brrBrrPatapimLevel * 5
        ;
    updateTralaleroPerSecHTML();
}

function updateTralaleroPerSecHTML() {
    document.getElementById("tralaleroPerSecond").innerHTML = tralaleroPerSec;
}

// adds tralaleros to total (runs every second)
function addTralalero() {
    updateTralaleroPerSec();
    tralaleroAmount += tralaleroPerSec;
    updateTralaleroAmount();
}

var interval = setInterval(addTralalero, 1000);



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