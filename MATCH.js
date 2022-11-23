module.exports = function (str1, str2) {
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
	str1 = UNICODE(str[0]);
	str2 = UNICODE(str[1]);
	var match = [];
	for (var i = 0; i <= rm; i++) {
		for (var j = 0; j < min; j++) {
			var short = str2[j];
			var long = str1[i + j];
			var n = Math.min(short, long);
			var x = Math.max(short, long);
			var score = 1 / (x / n) * 100;
			match.push(score)
		}
	}
	var multi = 0;
	var multi_highest = 0;
	for (var i = 0; i < match.length; i++) {
		var current = match[i];
		if (current == 100) {
			multi++;
			multi_highest = Math.max(multi_highest, multi)
		} else {
			multi = 0
		}
	}
	return (Sum(match) / match.length + multi_highest * 100 / min) / 2
}
