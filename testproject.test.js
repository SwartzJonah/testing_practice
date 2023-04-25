const {capitalize, reverseString} = require('./testproject');

test('Captializes the word shark', () => {
    expect(capitalize("shark")).toBe("Shark");
  });



test('reverses the word shark', () => {
    expect(reverseString("shark")).toBe("krahs");
  });