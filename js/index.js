// validty / pull-request.yml
// conventional commits commit lint und husky
// semantic versioning 

export const names = [];

 export function storeName(nameInput) {
  if (!names.includes(nameInput)) {
    names.push(nameInput);
  } else {
    return "Name is already on the list";
  }

  // Update DOM
  document.getElementById("pText").innerHTML = names.join("<br/>");
}

export function selectRandom() {
  if (names.length === 0) return null;
  let n1 = Math.floor(Math.random() * names.length);
  let name = names[n1];
  names.splice(n1, 1);
  return name;
}

export function newMatch() {
  if (names.length < 2) {
    return "Not enough names to match";
  }

  let arr1 = selectRandom();
  let arr2 = selectRandom();
  document.getElementById("matchDisplay").innerHTML = `${arr1} & ${arr2}`;
  }

