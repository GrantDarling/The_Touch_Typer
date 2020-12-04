const drawDisplay = require('../components/game/logic/drawDisplay');

test('check display for whitespace', () => {
  expect(drawDisplay()).toBe('works');
});
