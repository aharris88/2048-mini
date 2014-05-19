(function() {
  module('sync Module', {
    setup: function() {
    },
    teardown: function() {
    }
  });

  test("shiftBoard('down')", function() {
    board._private.setBoard([
      [2, 0, 3, 0],
      [1, 1, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1]
    ]);
    board._private.shiftBoard('down');
    deepEqual(board._private.getBoard(), [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [2, 0, 3, 0],
      [1, 1, 1, 1]
    ]);
  });

  test("shiftBoard('up')", function() {
    board._private.setBoard([
      [2, 0, 3, 0],
      [0, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 0, 0, 1]
    ]);
    board._private.shiftBoard('up');
    deepEqual(board._private.getBoard(), [
      [2, 1, 3, 1],
      [1, 0, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ]);
  });

  test("shiftBoard('left')", function() {
    board._private.setBoard([
      [2, 0, 3, 0],
      [0, 1, 0, 0],
      [2, 0, 1, 0],
      [0, 0, 0, 1]
    ]);
    board._private.shiftBoard('left');
    deepEqual(board._private.getBoard(), [
      [2, 3, 0, 0],
      [1, 0, 0, 0],
      [2, 1, 0, 0],
      [1, 0, 0, 0]
    ]);
  });

  test("shiftBoard('right')", function() {
    board._private.setBoard([
      [2, 0, 3, 0],
      [0, 1, 0, 0],
      [2, 0, 1, 0],
      [0, 0, 0, 1]
    ]);
    board._private.shiftBoard('right');
    deepEqual(board._private.getBoard(), [
      [0, 0, 2, 3],
      [0, 0, 0, 1],
      [0, 0, 2, 1],
      [0, 0, 0, 1]
    ]);
  });

  test("shiftBoard() right then left", function() {
    board._private.setBoard([
      [2, 0, 3, 0],
      [0, 1, 0, 0],
      [2, 0, 1, 0],
      [0, 0, 0, 1]
    ]);
    board._private.shiftBoard('right');
    board._private.shiftBoard('left');
    deepEqual(board._private.getBoard(), [
      [2, 3, 0, 0],
      [1, 0, 0, 0],
      [2, 1, 0, 0],
      [1, 0, 0, 0]
    ]);
  });

  test('getNewLocation()', function() {
    deepEqual(board._private.getNewLocation({x: 1, y: 1}, 'up'), {x: 1, y: 0}, 'up');
    deepEqual(board._private.getNewLocation({x: 1, y: 1}, 'down'),{x: 1, y: 2}, 'down');
    deepEqual(board._private.getNewLocation({x: 1, y: 1}, 'left'), {x: 0, y: 1}, 'left');
    deepEqual(board._private.getNewLocation({x: 1, y: 1}, 'right'), {x: 2, y: 1}, 'right');
  });

  test('getLocation()', function() {
    board.initialize({boardWidth: 100, padding: 5, tilesPerSide: 4});

    equal(board._private.getLocation(0), 5);
    equal(board._private.getLocation(1), 28.75);
    equal(board._private.getLocation(2), 52.5);
    equal(board._private.getLocation(3), 76.25);
  });
})();