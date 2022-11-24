module.exports = function (items) {
	var sum = 0;
	var i = 0;
	while (i < items.length) {
		sum += items[i];
		i++
	}
	return sum
}
