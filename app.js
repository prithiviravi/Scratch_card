var num = Math.floor(Math.random() * 4) + 1;

$("#card").wScratchPad({
  size: 100, // The size of the brush/scratch.
  bg: `Images/Loni ${num}.jpg`, // Background (image path or hex color).
  fg: `Images/front1.jpg`, // Foreground (image path or hex color).
  cursor: "pointer", // Set cursor.
});
// this is comment
//comment2
