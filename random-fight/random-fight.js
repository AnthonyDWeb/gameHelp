function result() {

    var player = document.getElementById("numberOfPlayer").value;
    var column = document.getElementById("numberOfColumn").value;
    var line = document.getElementById("numberOfLine").value;
    var character = document.getElementById("numberOfCharacter").value;



    for (var j = 1; j <= player; j++) {

        let division = document.createElement("div");
        division.classList.add("divisionContaint");
        document.getElementById("resultat").appendChild(division);
        division.innerHTML = `<h3>Player ${[j]}:</h3>`;
        for (var i = 1; i <= character; i++) {
            var text = document.createElement("p");
            text.classList.add("paragraph");
            division.appendChild(text);
            var randomColumn = Math.round(Math.random() * (column - 1) + 1);
            var randomLine = Math.round(Math.random() * (line - 1) + 1);
            text.innerHTML = `C:${randomColumn} / L:${randomLine}`;
        }

    }

}

// function reset(){

//   let result =document.getElementsById("resultat").innerHTML;
//     result.classList.containt("result").remove();
// }



