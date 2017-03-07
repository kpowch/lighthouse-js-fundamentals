// refactored LoopyLighthouse (using arrays)
/*
range = array of 2 numbers: start and end values of loop
multiples = array of 2 numbers: multiples to replace with words
words = 2 strings: words to replace the multiples
*/

function loopyLighthouse(range, multiples, word) {
  for (var i = range[0]; i <= range[1]; i++) {
    var output = "";
    if (i % multiples[0] === 0) {
      output += word[0];
    }
    if (i % multiples[1] === 0) {
      output += word[1];
    }
    console.log(output === "" ? i : output); //print the number if it didn't get caught by the if statements
    }
  }

loopyLighthouse([0,12], [3,4], ["Loopy","Lighthouse"]);


// original exercise
/*
for (var i = 100; i <= 200; i++) {
  // if multiple of 3 and 4, print LoopyLighthouse" instead
  if (i % 3 === 0 && i % 4 === 0) {
    console.log("LoopyLighthouse");
  }
  // if multiple of 3, print "Loopy" instead
  else if (i % 3 === 0) {
    console.log("Loopy");
  }
  // if multiple of 4, print "Lighthouse" instead
  else if (i % 4 === 0) {
    console.log("Lighthouse");
  }
  else {
    console.log(i);
  }
}
*/
