let tralaleroAmount = 4;
let incTralaleroAmount = 1;
function updateTralaleroAmount() {
    document.getElementById("tralalero-amount").innerHTML = tralaleroAmount;

}

function increaseTralalero() {
    tralaleroAmount += incTralaleroAmount;
    updateTralaleroAmount();
}

