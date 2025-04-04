// validty / pull-request.yml
// conventional commits commit lint und husky
// semantic versioning 

export const names = [];

export function storeName() {
  const input = document.getElementById("name");
  const nameInput = input.value.trim();

  if (nameInput && !names.includes(nameInput)) {
    names.push(nameInput);
    document.getElementById("pText").innerHTML = names.join("<br/>");
    input.value = '';
  } else {
    alert("Name is already on the list or empty!");
  }
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
    document.getElementById("matchDisplay").innerHTML = "Not enough names to match";
    return;
  }

  let arr1 = selectRandom();
  let arr2 = selectRandom();
  document.getElementById("matchDisplay").innerHTML = `${arr1} - ${arr2}`;
  }

  window.storeName = storeName;
  window.newMatch = newMatch;