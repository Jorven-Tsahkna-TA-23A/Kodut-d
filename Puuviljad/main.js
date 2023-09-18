var õunad = 0;
var pirnid = 0;

while (true) {
  var puuvili = prompt();

  if (puuvili == "õun") {
    õunad++;
    console.log("Õuni on: " + õunad)
  }
  else if (puuvili == "pirn") {
    pirnid++;
    console.log("Pirne on: " + pirnid)
  } 
  else {
    console.log("Tundmatu puuvili");
    continue
  }
}