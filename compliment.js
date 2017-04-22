function pickRandomWord(word){
	var randomWord = Math.floor(Math.random()*(word.length - 0)) + 0;
	return word [randomWord];
}

//pickRandomWord(["test 1","test 2", "test 3"]);

function generateCompliment (){
	var bodyParts = ["eyes", "teeth", "ears"];
	var adjectives = ["beautiful", "lovely", "jumping"];
	var randomWord = ["raven", "dolphin", "diamond"];
	var perfectCompliment = "Your " + pickRandomWord(bodyParts) + " look like a " + pickRandomWord(adjectives) + " " + pickRandomWord(randomWord);
	console.log(perfectCompliment);
}

generateCompliment();