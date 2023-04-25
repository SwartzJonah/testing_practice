const capitalize = require('./testproject');

test('Captializes the word shark', () => {
    expect(capitalize("shark")).toBe("Shark");
  });