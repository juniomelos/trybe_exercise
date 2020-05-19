const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};


/* assert.deepStrictEqual(obj1, obj2); */

test('check if objects are strict equal', () => {
  expect(obj1).not.toBe(obj2);
});