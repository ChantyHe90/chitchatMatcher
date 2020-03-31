const names = [];
let runOdd;

function storeName() {
  let nameInput = document.getElementById("name").value;
  if (names.indexOf(nameInput) === -1) {
    names.push(nameInput);

    console.log("names.length", names.length);
  } else {
    alert("hey" + "" + nameInput + "" + "you are already on the list");
  }
  console.log("names l13", names);
  // or push name or nameInput
  let pval = [];
  for (i = 0; i < names.length; i++) {
    if (pval[names[i]]) {
      return null;
    } else {
      pval = pval + names[i] + "<br/>";
    }
    console.log("pval", pval);
  }
  document.getElementById("pText").innerHTML = pval;
}
console.log("storeName", storeName());
console.log("names line27", names);

// function isUnique(arr) {
//   const seenValues = {};

//   for (let i = 0; i < arr.length; i++) {
//     // we already saw this element in the array
//     if (seenValues[arr[i]]) {
//       return false;
//     } else {
//       seenValues[arr[i]] = true;
//     }
//   }

//   return true;
// }

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
  console.log("name", name);
  names.splice(n1, 1);
  return name;
}
console.log("selectrandom", selectRandom());
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
console.log(newMatch());
