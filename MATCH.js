const Unicode = require("./STRING_TO_UNICODE.js");
const Sum = require("./SUM.js");

module.exports = function (str1, str2, continuity = 50, unicode = 50) {
	if ( unicode + continuity == 1 ){
		unicode *= 100;
		continuity *= 100;
	} else if ( unicode + continuity == 10 ){
		unicode *= 10;
		continuity *= 10;
	} else if( unicode + continuity != 100 ){
		console.log("unicode + continuity must be equal to 100%");
		return null;
	}
	str1 = str1.toString().replaceAll(/([\n\t\s]){2,}/g," ").trim();
	str2 = str2.toString().replaceAll(/([\n\t\s]){2,}/g," ").trim();
	if (str1.length === 0) {
		return 0
	} else if (str2.length === 0) {
		return 0
	}
	var max = Math.max(str1.length, str2.length);
	var min = Math.min(str1.length, str2.length);
	var rm = max - min;
	var str = [];
	if (rm == 0) {
		str.push(str1);
		str.push(str2)
	} else if (str1.length > str2.length) {
		str.push(str1);
		str.push(str2)
	} else {
		str.push(str2);
		str.push(str1)
	}
	str1 = Unicode(str[0]);
	str2 = Unicode(str[1]);
	if( typeof str1 != "object" ){
		str1 = [str1];
	}
	if( typeof str2 != "object" ){
		str2 = [str2];
	}
	var match = [];
	var multi = 0;
	var multi_highest = 0;
	for (var i = 0; i <= rm; i++) {
		for (var j = 0; j < min; j++) {

			var short = str2[j];
			var long = str1[i + j];
			var n = Math.min(short, long);
			var x = Math.max(short, long);
			var score = 1 / (x / n) * 100;

			match.push(score);

			if (score == 100) {
				multi++;
				multi_highest = Math.max(multi_highest, multi);
			} else {
				multi = 0;
			}
		}
		multi = 0;
	}
	return ( Sum(match) / match.length * (unicode / 100) ) + ( multi_highest * 100 / max * (continuity / 100))
}
