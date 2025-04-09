import { storeName, names, selectRandom, newMatch } from './index.mjs';

beforeEach(() => {
  // Reset DOM before each test
  document.body.innerHTML = `
    <div id="pText"></div>
    <p id="matchDisplay"></p>
    <input id="name" value="" />
    <button id="saveButton" class="delete">Save</button>
    <p id="matchError" class="error"></p>
  `;

  // Reset names list
  names.length = 0;

  const saveButton = document.getElementById("saveButton");
  if (saveButton) {
    saveButton.addEventListener("click", storeName);
  }
});

test('Add item to the list', () => {
  const input = document.getElementById("name");
  input.value = 'New Item';
  document.getElementById("saveButton").click();

  expect(names).toContain('New Item');

  const pText = document.getElementById('pText');
  expect(pText.innerHTML).toContain('New Item');
});

test('No Duplications added', () => {
  const input = document.getElementById("name");
  input.value = 'Item 1';
  // Add item 1 twice:
  document.getElementById("saveButton").click();  
  document.getElementById("saveButton").click(); 

  expect(names).toEqual(['Item 1']);

  const pText = document.getElementById('pText');
  expect(pText.innerHTML).toContain('Item 1');
});
// run jest --watch würde immer im hintergrund laufen => package.json

test('Select Random item and remove it from the list', () => {
  const input = document.getElementById("name");
  input.value = 'Item A';
  document.getElementById("saveButton").click();
  
  const input2 = document.getElementById("name");
  input2.value = 'Item B';
  document.getElementById("saveButton").click();
  
  const random = selectRandom();  

  // The item should not be in the list anymore
  expect(names).not.toContain(random);
});

test('New Match is found', () => {
  const input = document.getElementById("name");
  input.value = 'Item A';
  document.getElementById("saveButton").click();
  
  const input2 = document.getElementById("name");
  input2.value = 'Item B';
  document.getElementById("saveButton").click();

  newMatch();

  const element = document.getElementById("matchDisplay").innerHTML;
  expect(element).toContain('Item A');
  expect(element).toContain('Item B');
});

