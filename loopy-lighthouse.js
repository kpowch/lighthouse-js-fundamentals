
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
