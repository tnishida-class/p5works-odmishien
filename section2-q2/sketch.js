// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  // チェッカー
  fill(51);
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (j % 2 === 0) {
        if (i % 2 !== 0) {
          rect(size * i, size * j, size, size);
        }
      } else {
        if (i % 2 === 0) {
          rect(size * i, size * j, size, size);
        }
      }
    }
  }
  // 赤丸
  fill(255, 0, 0);
  for (let k = 0; k < 8; k++) {
    for (let l = 0; l < 3; l++) {
      if (l % 2 === 0) {
        if (k % 2 !== 0) {
          ellipse(
            size * k + size / 2,
            size * l + size / 2,
            size - 10,
            size - 10
          );
        }
      } else {
        if (k % 2 === 0) {
          ellipse(
            size * k + size / 2,
            size * l + size / 2,
            size - 10,
            size - 10
          );
        }
      }
    }
  }

  // 白丸
  fill(255, 255, 255);
  for (let m = 0; m < 8; m++) {
    for (let n = 5; n < 9; n++) {
      if (n % 2 === 0) {
        if (m % 2 !== 0) {
          ellipse(
            size * m + size / 2,
            size * n + size / 2,
            size - 10,
            size - 10
          );
        }
      } else {
        if (m % 2 === 0) {
          ellipse(
            size * m + size / 2,
            size * n + size / 2,
            size - 10,
            size - 10
          );
        }
      }
    }
  }
}
