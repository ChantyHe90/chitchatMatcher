import { storeName, names, selectRandom, newMatch } from './index.mjs';

beforeEach(() => {
  // Reset DOM before each test
  document.body.innerHTML = `
    <div id="pText"></div>
    <p id="matchDisplay"></p>
    <input id="name" value="" />
    <button class="delete" onclick="window.location.reload();">Delete</button>
  `;

  // Reset names list
  names.length = 0;
});

test('Add item to the list', () => {
  const input = document.getElementById("name");
  input.value = 'New Item'; 

  storeName();
  expect(names).toContain('New Item');

  const pText = document.getElementById('pText');
  expect(pText.innerHTML).toContain('New Item');
});

test('No Duplications added', () => {
  const input = document.getElementById("name");
  input.value = 'Item 1';
  // Add item 1 twice:
  storeName();  
  storeName(); 

  expect(names).toEqual(['Item 1']);

  const pText = document.getElementById('pText');
  expect(pText.innerHTML).toContain('Item 1');
});
// run jest --watch würde immer im hintergrund laufen => package.json

test('Select Random item and remove it from the list', () => {
  const input = document.getElementById("name");
  input.value = 'Item A';
  storeName();
  const input2 = document.getElementById("name");
  input2.value = 'Item B';
  storeName();
  const random = selectRandom();  

  // The item should not be in the list anymore
  expect(names).not.toContain(random);
});

test('New Match is found', () => {
  const input = document.getElementById("name");
  input.value = 'Item A';
  storeName();
  const input2 = document.getElementById("name");
  input2.value = 'Item B';
  storeName();
  newMatch();

  const element = document.getElementById("matchDisplay").innerHTML;
  expect(element).toContain('Item B');
  expect(element).toContain('Item A');
});

