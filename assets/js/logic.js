$(document).ready(function(){
   


    let crystalOne = "";
    let crystalTwo = "";
    let crystalThree = "";
    let crystalFour = "";
    let total = 0;
    let target = 0;
    let wins = 0;
    let losses = 0;
    let crystals = [];

    initializeReset(); 

    function setTarget() {
      let upperLimitScore = 120;
      let lowerLimitScore = 19;
      target = Math.floor(Math.random() * (upperLimitScore-lowerLimitScore)) + lowerLimitScore;
      $("#target").html("Target: " + target);
      console.log("Target: " + target);
    }

    $(".btn").on("click", updateTotal);

    function updateTotal (){
      total += $(this).data("data-value");
      $("#total").html("Total: " + total);
      if (total >= target) {
        winLose();
      }

    }

    function crystalRandom() {
      let crystalCeiling = 12;
      let crystalFloor = 2;
      let crystalValue = Math.floor(Math.random() * (crystalCeiling-crystalFloor)) + crystalFloor;
      crystals.push(crystalValue);
      return crystalValue;
    }  


    function checkFairness (array, targetNumber) {
        console.log("Checking fairness");
        let fair = false;
        array.forEach(function(value) {
            if (targetNumber%value===0){
                fair=true;
            }
        });
        if (fair===false) {
            console.log("game unfair");
            initializeReset();
        }
        else {
            console.log("game fair");
        }

    }

    function initializeReset (){
      crystalOne = $("[data-id=1]");
      crystalOne.data("data-value", crystalRandom()); 
      console.log("Crystal 1: " + crystalOne.data("data-value"));
      crystalTwo = $("[data-id=2]");
      crystalTwo.data("data-value", crystalRandom()); 
      console.log("Crystal 2: " + crystalTwo.data("data-value"));
      crystalThree = $("[data-id=3]");
      crystalThree.data("data-value", crystalRandom()); 
      console.log("Crystal 3: " + crystalThree.data("data-value"));
      crystalFour = $("[data-id=4]");
      crystalFour.data("data-value", crystalRandom()); 
      console.log("Crystal 4: " + crystalFour.data("data-value"));
      setTarget();
      total = 0;
      console.log("Target: " + target);
      $("#total").html("Total: " + total);
      $("#wins").html("Wins: " + wins);
      $("#losses").html("Losses: " + losses);
      checkFairness(crystals, target);
    }

  function winLose() {
    if (total === target) {
      wins++;
      $("#wins").html("Wins: " + wins);
      alert("You win! Press 'ok' to start a new round.");
    } else {
      losses++;
      $("#losses").html("Losses: " + losses);
      alert("You lose! Your total was: " + total + ". The target was: " + target + ". Press 'ok' to start a new round.");
    }
    initializeReset(); 
  }

})