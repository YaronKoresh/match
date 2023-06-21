# NPM package: @yaronkoresh/match

### Algorithm measuring percentages of correspondence between texts:

* 50% default score for highest continuity of perfect match.
* 50% default score for Unicode closeness ("b" is closer to "c" than "7").

### Start/end spaces are ignored & duplicate spaces are merged, before any calculation!

# Example:

```

var Match = require("@yaronkoresh/match");

console.log( Match.using("gree", "my apple is very green so i will keep it", 100, 0) );
// continuity (%): 100%.
// unicode (%): 0%.
// return: 10 (10% out of 100%).

console.log( Match.using("gree", "my apple is very green so i will keep it") );
// continuity (%): 50%.
// unicode (%): 50%.
// return: 44.539704552980574 (~44.5% out of 100%).

```

### Enjoy!