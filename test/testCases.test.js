const { expect } = require('@jest/globals')
const AnagramSearch = require('../index')

var list = ['nelson', 'pedro', 'mesa', 'computador']

test('Null Input', () => {
    expect(() => AnagramSearch()).toThrow(Error)
})

test('Number Input', () => {
    expect(() => AnagramSearch(23242452)).toThrow(Error)
});

test('List Input', () => {
    expect(AnagramSearch(list)).toStrictEqual({"acdmooprtu": ["computador"], "aems": ["mesa"], "deopr": ["pedro"], "elnnos": ["nelson"]})
});
