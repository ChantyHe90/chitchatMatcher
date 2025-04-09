// validty / pull-request.yml
// conventional commits commit lint und husky
// semantic versioning 
// # A) nur deployen wenn tests erfolgreich ist => ich füge ein needs: test hinzu
// # B) learning: wenn es lokal funktioniert dann oft auch in der pipe :)
// # CJS MJS => wann was? => ich muss meine test.mjs file in config jest hinzufügen
// # packageJson nochmal anpassen
// # woher kommt meine commit msg :) 
// # hol die elemnte besser aus der UI 
// # unterschied mjs?
// # .mjs → ESM, braucht import/export
// # .cjs oder .js mit "type": "commonjs" → require/module.exports

export const names = [];

export function storeName() {
  const input = document.getElementById("name");
  const nameInput = input.value.trim();

  if (nameInput && !names.includes(nameInput)) {
    names.push(nameInput);
    document.getElementById("pText").innerHTML = names.join("<br/>");
    input.value = '';
  } else {

    document.getElementById("matchError").innerHTML = "Name is already on the list or empty!";
  }
}

// Event listener für den "Save"-Button
document.getElementById("saveButton").addEventListener("click", storeName);

window.onload = function() {
  // Wenn der Name aus dem localStorage geladen wird
  const name = localStorage.getItem('name');
  if (name !== null) {
    document.getElementById('name').value = name;
  }
}

window.onbeforeunload = function() {
  // Vor dem Verlassen der Seite speichern wir den Namen im localStorage
  localStorage.setItem("name", document.getElementById('name').value);
}


export function selectRandom() {
  if (names.length === 0) return null;
  let n1 = Math.floor(Math.random() * names.length);
  let name = names[n1];
  names.splice(n1, 1);
  return name;
}

export function newMatch() {
  console.log()
  if (names.length < 2) {
    document.getElementById("matchError").innerHTML = "Not enough names to match";
    return;
  }

  let arr1 = selectRandom();
  let arr2 = selectRandom();
  document.getElementById("matchDisplay").innerHTML = `${arr1} - ${arr2}`;
  }

  window.storeName = storeName;
  window.newMatch = newMatch;