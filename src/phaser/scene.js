import Phaser from "phaser";
import NeoImg from "../assets/Neo.png";
const gameState = {};

class playGame extends Phaser.Scene {
  constructor() {
    super("PlayGame");
  }
  preload() {
    this.load.crossOrigin = 'anonymous';
    this.load.image("Neo", NeoImg);
  }

  create() {
    gameState.Neo = this.physics.add.sprite(500,275, "Neo").setScale(0.2);
    gameState.cursors = this.input.keyboard.createCursorKeys();
    gameState.graphics = this.add.graphics({
      x: (gameState.Neo.x - gameState.Neo.width / 2) - 242,
      y: (gameState.Neo.y - gameState.Neo.height / 2) -16
    })
    .fillStyle(0xffff00, 0.2)
    // .setTexture(Neo, undefined, 1)
    .fillCircle(gameState.Neo.x, gameState.Neo.y, gameState.Neo.width / 15, gameState.Neo.height / 15)

    this.tweens.add({
      targets: gameState.graphics,
      alpha: 0,
      ease: 'Cubic.easeOut',  
      duration: 1000,
      repeat: -1,
      yoyo: true
    })
  }

  update() {
    if (gameState.cursors.left.isDown) {
      gameState.Neo.x -= 5;
      gameState.graphics.x -= 5;
    }
    if (gameState.cursors.right.isDown) {
      gameState.Neo.x += 5;
      gameState.graphics.x += 5;
    }
    if (gameState.cursors.up.isDown) {
      gameState.Neo.y -= 5;
      gameState.graphics.y -= 5;
    }
    if (gameState.cursors.down.isDown) {
      gameState.Neo.y += 5;
      gameState.graphics.y += 5;
    }
  }
}

export default playGame;

// if (gameState.cursors.left.isDown) {
//   gameState.Neo.setVelocityX(-200);
//   // gameState.graphics.setVelocityX(-100);
// } else if (gameState.cursors.right.isDown) {
//   gameState.Neo.setVelocityX(200);
//   // gameState.graphics.setVelocityX(100);
// } else if (gameState.cursors.up.isDown) {
//   gameState.Neo.setVelocityY(-200);
//   // gameState.graphics.setVelocityY(-100);
// } else if (gameState.cursors.down.isDown) {
//   gameState.Neo.setVelocityY(200);
//   // gameState.graphics.setVelocityY(100);
// } else {
//   gameState.Neo.setVelocity(0);
// }