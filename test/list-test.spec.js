var lista = require('../index.js');

describe('Lista', function() {
  describe('parse a list', function() {
    it('parses a simple list', function() {
      var list = lista("(one two)");
      expect(list.length).toEqual(2);
      expect(list[0]).toEqual('one');
      expect(list[1]).toEqual('two');
    });

    it('list in-a list', function() {
      var list = lista("(one (a b) two)");
      expect(list.length).toEqual(3);
      expect(Array.isArray(list[1])).toEqual(true);
      expect(list[1].length).toEqual(2);
      expect(list[1][0]).toEqual('a');
      expect(list[1][1]).toEqual('b');
    });
  });
});
