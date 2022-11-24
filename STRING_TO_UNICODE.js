module.exports = function(str) {
	var out = [];
	str = str.toString();
	for (var i = 0; i < str.length; i++) {
		out.push(str.charCodeAt(i))
	}
	if (out.length == 1) {
		return out[0]
	} else {
		return out
	}
}
