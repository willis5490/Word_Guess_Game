//Declare variable!

var hangWords = ["blastoise", "bulbasaur", "charizard", "mewtwo", "pikachu", "zapdos"];

var guess = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
var countDown = Math.floor(Math.random() * guess.length);
var counter = guess[countDown];
var letterIndex = 0;
var randomWord = Math.floor(Math.random() * hangWords.length);
var chosenWord = hangWords[randomWord];
var underScores = [];
var wrongLetter = [];
var rightLetter = [];
var docUnder = document.getElementsByClassName("current");
var guess1 = document.getElementsByClassName("guesses");
var remains = document.getElementsByClassName("letters");
var dip = document.getElementsByClassName("diplo");
var pics = document.getElementsByClassName("");
var lose = [];





console.log(docUnder);
console.log(chosenWord);
//create functions to display correct letters and incorrect letters
var start = () => {
    for (var i = 0; i < chosenWord.length; i++) {
        underScores.push("_ _");

    }
    return underScores;

}
var go = () => {
    for (var i = 12; i <= counter.length; i--) {
        lose.push(0);
    }
    return lose;
}



console.log(go());

console.log(start());



document.addEventListener("keypress", (event) => {
    var keyCodes = event.keyCode;
    var keyWords = String.fromCharCode(keyCodes);


    if (chosenWord.indexOf(keyWords) > -1) {
        underScores[chosenWord.indexOf(keyWords)] = keyWords;
        rightLetter.push(keyWords);
        docUnder[0].innerHTML = underScores.join("");


        console.log(rightLetter);
       
        if (lose == 12) {
            alert("GAME OVER")
        }
        if (underScores.join("") == chosenWord) {
            dip[0].innerHTML = chosenWord;
        }
        if (chosenWord==hangWords[0]){
            pics = blastoise.src = "assests/images/blastoise.jpg"
        }
        if (chosenWord == hangWords[5]){
            pics = src = "assests/images/zapdos.png";
        }
    
        


    }
    else {
        wrongLetter.push(keyWords);
        remains[0].innerHTML = wrongLetter;
        lose++;
        guess1[0].innerHTML = lose;

        console.log(wrongLetter);

    }
    if (lose == 12){
        alert("GAME OVER");
        
    }

    


});

