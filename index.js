function getRandomColor() {
  const chars = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let color = ["#"];
  for (let i = 0; i < 6; i++) {
    let currchar = Math.random() * 10 * chars.length;
    console.log(currchar);
    // color.push();
  }
}

console.log(getRandomColor());
