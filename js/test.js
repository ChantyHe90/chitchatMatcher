import { storeName, names, selectRandom, newMatch } from './index.js';

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
  storeName('New Item');
  expect(names).toContain('New Item');

  // Check if the DOM updates correctly
  const pText = document.getElementById('pText');
  expect(pText.innerHTML).toContain('New Item');
});

test('No Duplications added', () => {
  storeName('Item 1');  
  storeName('Item 1'); 

  expect(names).toEqual(['Item 1']);
});

test('Select Random item and remove it from the list', () => {
  storeName('Item A');
  storeName('Item B');

  const random = selectRandom();  

  // The item should not be in the list anymore
  expect(names).not.toContain(random);
});

test('New Match is found', () => {
  storeName('Item 4');
  storeName('Item 5');

  newMatch();  

  const element = document.getElementById("matchDisplay").innerHTML;

  expect(element).toContain('Item 4');
  expect(element).toContain('Item 5');
});
