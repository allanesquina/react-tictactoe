// Check all winner possibilities
function validate(matrix) {
  // check result for each matrix row
  let row = matrix.map((row) => {
    let result = 0;
    row.map((val) => {
      result += val;
    });
    return result;
  }).filter((val) => {
    return val === 3 || val === 12;
  });

  if (row.length > 0) return row[0];

  //check result for each matrix col
  function r(matrix, i) {
    let result = 0;
    matrix.map((row) => {
      result += row[i]
    })
    return result;
  };

  let col = matrix.reduce((a, n, i) => {
    a.push(r(matrix, i));
    return a;
  }, []).filter((val) => {
    return val === 3 || val === 12;
  });

  if (col.length > 0) return col[0];

  // check result for each matrix cross
  let cross = matrix.reduce((res, row, i) => {
    return res += row[i];
  }, 0);

  if (cross === 3 || cross === 12) return cross;

  // check result for each reverse matrix cross
  cross = matrix.reverse().reduce((res, row, i) => {
    matrix.reverse();
    return res += row[i];
  }, 0);

  if (cross === 3 || cross === 12) return cross;

  // Check turn numbers
  let limit = 0;
  matrix.map((row) => {
    row.map((col) => {
      if (col === 0) {
        limit++;
      }
    });
  });

  if (limit === 0) {
    return 0;
  }

  return 2;
}

// Exports the game API
export default {
  createMatrix: () => {
    let matrix = [];
    for (let i = 0; i < 3; i++) {
      matrix[i] = [0, 0, 0];
    }
    return matrix;
  },
  turn: (row, col, player, matrix) => {
    let val = matrix[row][col];

    if (val === 4 || val === 1) return false;

    matrix[row][col] = player;

    return {
      result: validate(matrix),
      matrix: matrix
    }
  }
};
