ZenvaRunner.Game = function() {};

ZenvaRunner.Game.prototype = {
  create: function() {

    this.background = this.game.add.tileSprite(0, 0, this.game.width, 512, 'background');

    this.foreground = this.game.add.tileSprite(0, 470, this.game.width, this.game.height - 533, 'foreground');

    this.ground = this.game.add.tileSprite(0, this.game.height - 73, this.game.width, 73, 'ground');

    this.player = this.add.sprite(200, this.game.height/2, 'player');
    this.player.anchor.setTo(0.5);
    this.player.scale.setTo(0.3);

    this.player.animations.add('fly', [0,1,2,3,2,1]);

  },
  update: function() {
  },
  shutdown: function() {

  }
}