const maxpoints = document.querySelector("#maxpoints");
const pointsgoal = document.querySelector("#pointsgoal");

function numberOfFight() {

    const pointGoal = document.getElementById("pointGoal").value;
    const playerPoints = document.getElementById("playerPoints").value;
    const fightPoints = document.getElementById("fightPoints").value;

    const fight = (pointGoal - playerPoints) / fightPoints;
    let safeFight = Math.ceil(fight)

    pointsgoal.innerHTML = `Nombre de Combats à Faire : ${safeFight} combats`;
}

function maxPoints() {

    const life = document.getElementById("numberOfLife").value;
    const fightPoints = document.getElementById("fightPoints").value;

    const pointsMax = fightPoints * life;

    maxpoints.innerHTML = `Nombre de Points Max : ${pointsMax} points`;
}

function result() {

    numberOfFight();
    maxPoints();
}







