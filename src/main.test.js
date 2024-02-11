const sum = require('./sum');

test('Deve testar o sum', () => {
  const result = sum(2, 3);
  expect(result).toBe(5);
});
