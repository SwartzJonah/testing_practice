const { capitalize, reverseString, calculator, ceaserCipher } = require('./testproject');

test('Captializes the word shark', () => {
  expect(capitalize("shark")).toBe("Shark");
});



test('reverses the word shark', () => {
  expect(reverseString("shark")).toBe("krahs");
});


test('adding', () => {
  expect(calculator.add(3, 4)).toBe(7);
});

test('subtracting', () => {
  expect(calculator.subtract(5,2)).toBe(3);
});

test('multiply', () => {
  expect(calculator.multiply(3,4)).toBe(12);
});

test('divide', () => {
  expect(calculator.divide(12,3)).toBe(4);
});

test('1 shift 1 char', () => {
  expect(ceaserCipher("b",1)).toBe("c");
});

test('5 shift 1 char', () => {
  expect(ceaserCipher("b",5)).toBe("g");
});

test('1 shift 5 char', () => {
  expect(ceaserCipher("abcde",1)).toBe("bcdef");
});