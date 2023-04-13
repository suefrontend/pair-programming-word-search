const transpose = function(letters) {
  const row = letters.length;
  const col = letters[0].length;
  const grid = [];

  for (let i = 0; i < col; i++) {
    grid.push([]);
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      grid[j].push(letters[i][j]);
    }
  }
  return grid;
};

const wordSearch = (letters, word) => {
  if (letters.length === 0 || !word) return false;

  const horizontalJoin = letters.map((ls) => ls.join(""));
  const newLett = transpose(letters);
  const verticalJoin = newLett.map((ls) => ls.join(""));

  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  for (const l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;
