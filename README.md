# Package & version:

### Match v4.0.0

# Description:

### Algorithm measuring percentages of correspondence between texts.

# Example:

```
import { Match } from "@yaronkoresh/match";
// or: const { Match } = await import("@yaronkoresh/match");

// Step 1: Choose the first string!
const str1 = "meow";

// Step 2: Choose the second string!
const str2 = "lol";

// Step 3: Choose the weight for the "continuity" (exact match of characters, one after another) factor! [default is 50 out of 100]
const continuity = 33;

// Step 4: Choose the weight for the "unicode" (distance of characters inside one from the other, e.g. "b" is closer to "W" than any japanese characters) factor! [default is 50 out of 100]
const unicode = 67;

// Step 5: Now let's calculate!
const match = Match( str1, str2, continuity, unicode );

// The results: 70 (70% of correspondence between the inputs).
console.log(match);

// Unicode gave high score of 94% (67% of the 94%) because of the same english language of the inputs.
// Continuity found just a one exact match ("o" character) so it gave a low score of 25% (33% of the 25%).
```

# License:

### This project is licensed under MIT open-source license.