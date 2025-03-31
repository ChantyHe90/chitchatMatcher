const names = ["chanty"];
let runOdd;
// TODO: Via Jest einen test reinschreiben und mit github action schauen ob alles gut ist 
// TODO: 4 funktionen, 4 unit tests 
// TODO: Ich erstell einen PR => teste, dass man einen pr stellt und nicht auf master direkt pushen darf
// validty / pull-request.yml
// conventional commits commit lint und husky
// semantic versioning 

function storeName() {
  let nameInput = document.getElementById("name").value;
  if (names.indexOf(nameInput) === -1) {
    names.push(nameInput);
  } else {
    alert("hey" + "" + nameInput + "" + "you are already on the list");
  }
  let pval = [];
  for (i = 0; i < names.length; i++) {
    if (pval[names[i]]) {
      return null;
    } else {
      pval = pval + names[i] + "<br/>";
    }
  }
  document.getElementById("pText").innerHTML = pval;
}

if (names.length % 2 !== 0) {
  runOdd = true;
} else {
  runOdd = false;
}
// select 1 random. delete when selected from array names
function selectRandom() {
  let n1 = Math.floor(Math.random() * names.length);
  console.log("n1", n1);
  let name = names[n1];
  names.splice(n1, 1);
  return name;
}

function newMatch() {
  // even?
  if ((runOdd = true)) {
    if (names.length >= 2) {
      let arr1 = selectRandom();
      let arr2 = selectRandom();
      document.getElementById("matchDisplay").innerHTML +=
        arr1 + "&" + arr2 + "</br>";
    } else {
      alert("insert member names");
    }
  }
}
