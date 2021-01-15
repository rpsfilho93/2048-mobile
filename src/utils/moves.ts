export const moveUp = (grid: number[][]) => {
  for (let i = 0; i < grid.length; i += 1) {
    let tmp: number[] = [];
    let empty: number = 0;

    for (let j = 0; j < grid.length; j += 1) {
      if (grid[j][i] > 0) {
        tmp.push(grid[j][i]);
      } else {
        empty += 1;
      }
    }

    for (let k = 0; k < empty; k += 1) {
      tmp.push(0);
    }

    for (let l = 0; l < tmp.length; l += 1) {
      grid[l][i] = tmp[l];
    }
  }
};

export const mergeUp = (grid: number[][]) => {
  let score = 0;
  for (let i = 0; i < grid.length; i += 1) {
    const tmp: number[] = [];
    for (let j = 0; j < grid.length; j += 1) {
      if (grid[j][i] === 0) break;

      if (grid[j][i] === grid[j + 1][i]) {
        score += grid[j][i] * 2;
        tmp.push(grid[j][i] * 2);
        grid[j][i] = 0;
        grid[j + 1][i] = 0;
      }
    }

    for (let k = 0; k < tmp.length; k += 1) {
      grid[k][i] = tmp[k];
    }
  }

  return score;
}

export const moveDown = (grid: number[][]) => {
  for (let i = 0; i < grid.length; i += 1) {
    let tmp: number[] = [];
    let empty: number = 0;

    for (let j = 0; j < grid.length; j += 1) {
      if (grid[j][i] > 0) {
        tmp.unshift(grid[j][i]);
      } else {
        empty += 1;
      }
    }

    for (let k = 0; k < empty; k += 1) {
      tmp.unshift(0);
    }

    for (let l = 0; l < tmp.length; l += 1) {
      grid[l][i] = tmp[l];
    }
  }
};

export const mergeDown = (grid: number[][]) => {
  let score = 0;
  for (let i = grid.length - 1; i >= 0; i -= 1) {
    const tmp: number[] = [];
    for (let j = grid.length - 1; j >= 0; j -= 1) {
      if (grid[j][i] === 0) break;

      if (grid[j][i] === grid[j - 1][i]) {
        score += grid[j][i] * 2;
        tmp.unshift(grid[j][i] * 2);
        grid[j][i] = 0;
        grid[j - 1][i] = 0;
      }
    }

    for (let k = tmp.length; k >= 0; k -= 1) {
      grid[k][i] = tmp[k];
    }
  }

  return score;
}

export const moveLeft = (grid: number[][]) => {
  for (let i = 0; i < grid.length; i += 1) {
    let tmp: number[] = [];
    let empty: number = 0;

    for (let j = 0; j < grid.length; j += 1) {
      if (grid[i][j] > 0) {
        tmp.push(grid[i][j]);
      } else {
        empty += 1;
      }
    }

    for (let k = 0; k < empty; k += 1) {
      tmp.push(0);
    }

    grid[i] = tmp;
  }
};

export const mergeLeft = (grid: number[][]) => {
  let score = 0;
  for (let i = 0; i < grid.length; i += 1) {
    const tmp: number[] = [];
    for (let j = 0; j < grid.length; j += 1) {
      if (grid[i][j] === 0) break;

      if (grid[i][j] === grid[i][j + 1]) {
        score += grid[i][j] * 2;
        tmp.push(grid[i][j] * 2);
        grid[i][j] = 0;
        grid[i][j + 1] = 0;
      }
    }

    for (let k = 0; k < tmp.length; k += 1) {
      grid[i][k] = tmp[k];
    }
  }

  return score;
}

export const moveRight = (grid: number[][]) => {
  for (let i = 0; i < grid.length; i += 1) {
    let tmp: number[] = [];
    let empty: number = 0;

    for (let j = grid.length - 1; j >= 0; j -= 1) {
      if (grid[i][j] > 0) {
        tmp.unshift(grid[i][j]);
      } else {
        empty += 1;
      }
    }

    for (let k = 0; k < empty; k += 1) {
      tmp.unshift(0);
    }


    grid[i] = tmp;
  }
};

export const mergeRight = (grid: number[][]) => {
  let score = 0;
  for (let i = grid.length - 1; i >= 0; i -= 1) {
    const tmp: number[] = [];
    for (let j = grid.length - 1; j >= 0; j -= 1) {
      if (grid[i][j] === 0) break;

      if (grid[i][j] === grid[i][j - 1]) {
        score += grid[i][j] * 2;
        tmp.unshift(grid[i][j] * 2);
        grid[i][j] = 0;
        grid[i][j - 1] = 0;
      }
    }

    for (let k = tmp.length - 1; k >= 0; k -= 1) {
      grid[i][k] = tmp[k];
    }
  }

  return score;
};

