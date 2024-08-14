import { init, Sprite, GameLoop } from "kontra";

let { canvas } = init();

let sprite = Sprite({
  x: 90,
  y: 250,
  color: "pink",
  width: 30,
  height: 30,
  dy: 1.5,
});

let loop = GameLoop({
  update: function () {
    sprite.update();
    if (sprite.y > canvas.height) {
      sprite.y = -sprite.height;
    }
  },
  render: function () {
    sprite.render();
  },
});

loop.start();
