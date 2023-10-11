// ../_tools_/src/Match.js
import { Add, Greater } from "@yaronkoresh/math";
var Match = function(str1, str2, continuity = 50, unicode = 50) {
  if (unicode + continuity == 1) {
    unicode *= 100;
    continuity *= 100;
  } else if (unicode + continuity == 10) {
    unicode *= 10;
    continuity *= 10;
  } else if (unicode + continuity != 100) {
    console.log("unicode + continuity must be equal to 100%");
    return null;
  }
  str1 = str1.toString().replaceAll(/([\n\t\s]){2,}/g, " ").trim();
  str2 = str2.toString().replaceAll(/([\n\t\s]){2,}/g, " ").trim();
  if (str1.length === 0) {
    return 0;
  } else if (str2.length === 0) {
    return 0;
  }
  let max = Math.max(str1.length, str2.length);
  let min = Math.min(str1.length, str2.length);
  let rm = max - min;
  let str = [];
  if (rm == 0) {
    str.push(str1);
    str.push(str2);
  } else if (str1.length > str2.length) {
    str.push(str1);
    str.push(str2);
  } else {
    str.push(str2);
    str.push(str1);
  }
  let _str1 = str[0];
  let _str2 = str[1];
  str1 = [];
  str2 = [];
  for (let i = 0; i < _str1.length; i++) {
    if (typeof _str1.codePointAt(i) === "undefined") {
      break;
    }
    str1.push(_str1.codePointAt(i));
  }
  for (let i = 0; i < _str2.length; i++) {
    if (typeof _str2.codePointAt(i) === "undefined") {
      break;
    }
    str2.push(_str2.codePointAt(i));
  }
  let matched = [];
  let multi = 0;
  let multi_highest = 0;
  for (let i = 0; i <= rm; i++) {
    for (let j = 0; j < min; j++) {
      let short = str2[j];
      let long = str1[i + j];
      let g = Greater(short, long);
      let n = null;
      let x = null;
      if (g === true) {
        n = long;
        x = long;
      } else if (g === short.toString()) {
        n = long;
        x = short;
      } else if (g === long.toString()) {
        n = short;
        x = long;
      }
      let score = Math.floor(100 / (x / n));
      matched.push(score);
      if (score === 100) {
        multi++;
        multi_highest = Greater(multi_highest, multi);
        if (multi_highest === true) {
          multi_highest = multi;
        }
        multi_highest = +multi_highest;
      } else {
        multi = 0;
      }
    }
    multi = 0;
  }
  console.log("");
  console.log(" - - -");
  console.log("");
  console.log(" * Continuity weight: " + continuity + "%");
  let continuityValue = Math.floor(multi_highest * 100 / max);
  console.log(" * Continuity score: " + continuityValue);
  continuityValue = Math.floor(continuityValue * (continuity / 100));
  console.log("");
  console.log(" - - -");
  console.log("");
  console.log(" * Unicode weight: " + unicode + "%");
  let unicodeValue = Math.floor(+Add(matched) / matched.length);
  console.log(" * Unicode score: " + unicodeValue);
  unicodeValue = Math.floor(unicodeValue * (unicode / 100));
  console.log("");
  console.log(" - - -");
  console.log("");
  console.log(" * Continuity results: " + continuityValue);
  console.log(" * Unicode results: " + unicodeValue);
  console.log("");
  console.log(" - - -");
  console.log("");
  return unicodeValue + continuityValue;
};
export {
  Match
};
