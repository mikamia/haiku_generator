var fs = require('fs');
var cmudictFile = readCmudictFile('./cmudict.txt');

function readCmudictFile(file){
	return fs.readFileSync(file).toString();
}

function formatData(data){
	var syllablesArr = [];
	var lines = data.toString().split("\n");
	var lineSplit;
	lines.forEach(function(line){
		lineSplit = line.split("  ");
		//console.log("The word " + lineSplit[0] + " has this phoneme layout : " + lineSplit[1]);
		if(lineSplit[1]!= undefined){
			var numSyllables = lineSplit[1].match(/\d/g);
			if(numSyllables != null){
				if(syllablesArr[numSyllables.length] == undefined){
					syllablesArr[numSyllables.length] = [lineSplit[0]];
				} else{
					syllablesArr[numSyllables.length].push(lineSplit[0]);
				}
			}	
		}
	});
	return syllablesArr;
}


//var s = formatData(cmudictFile);


function createHaiku(structure, dicFile){
    console.log("this should log a haiku with the structure " + structure);
	var syllablesArr = formatData(dicFile);
	var haiku = [];
	var count = 0;
	var split = 0;
	for (var i = 0; i < structure.length; i++) {
		var randomWordIndex = Math.round(Math.random()*syllablesArr[structure[i]].length); 
		var randomWord = syllablesArr[structure[i]][randomWordIndex];
		haiku.push(randomWord);
		count += structure[i];
		if(((split%2==0) && (count == 5)) || ((split%2==1) && (count ==7))){
			haiku.push("\n");
			count = 0;
			(split % 2 == 0)? split = 1 : split = 0;
		} else { haiku.push(" ");}
		//console.log(randomWord);
	}


	return haiku.join("");
	

};
module.exports = {
	createHaiku: createHaiku,
	readCmudictFile: readCmudictFile,
};


