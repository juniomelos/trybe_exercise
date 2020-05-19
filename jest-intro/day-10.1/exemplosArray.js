const retornePares = array => array.filter(x => x % 2 === 0);

const addItem4 = array => {
  array.push('item4')
  return array
}

module.exports = {
  retornePares,
  addItem4
}