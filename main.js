//在這邊寫javascript

var game = new Phaser.Game(640, 480, Phaser.AUTO, 'phaser-example', {
  preload: preload,
  create: create,
  update: update,
});

function preload() {
  game.load.image('map', 'images/map.png');
  game.load.image('hero', 'images/hero.png');
  game.load.image('mask', 'images/mask.png');
}

var sprite;

function create() {
  map = game.add.sprite(game.world.centerX, game.world.centerY, 'map');
  map.anchor.setTo(0.5, 0.5);
  map.scale.setTo(0.5, 0.5);

  hero = game.add.sprite(game.world.centerX, game.world.centerY, 'hero');
  hero.anchor.setTo(0.5, 0.5);
  hero.scale.setTo(0.5, 0.5);

  mask = game.add.sprite(game.world.centerX, game.world.centerY, 'mask');
  mask.anchor.setTo(0.5, 0.5);
  mask.scale.setTo(0.5, 0.5);
}

function update() {
  map.x = game.input.mousePointer.x;
  map.y = game.input.mousePointer.y;
}
