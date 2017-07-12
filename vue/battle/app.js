new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    enemyHealth: 100,
    isGameRunning: false,
    turns: []
  },
  methods: {
    startGame: function () {
      this.isGameRunning = true;
      this.playerHealth = 100;
      this.enemyHealth = 100;
    },
    attack: function () {
      var damage = this.calculateDamage(3, 10)
      this.enemyHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: 'Player Hits Monster' + damage
      })

      if (this.checkWin()) return;

      this.enemyAttacksPlayer();

    },
    specialAttack: function () {
      var damage = this.calculateDamage(10, 20)
      this.enemyHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: 'Player Hits Monster Hard' + damage
      })

      if (this.checkWin()) return;

      this.enemyAttacksPlayer();
    },
    enemyAttacksPlayer: function () {
      var damage = this.calculateDamage(5, 12)
      this.playerHealth -= damage;
      this.turns.unshift({
        isPlayer: false,
        text: 'Monster Hits Player' + damage
      })

      this.checkWin();
    },
    heal: function () {
      if (this.playerHealth <= 90) {
        this.playerHealth += 10;
      } else {
        this.playerHealth = 100;
      }
      this.enemyAttacksPlayer();
    },
    giveUp: function () { },
    calculateDamage: function (min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    checkWin: function () {
      if (this.enemyHealth <= 0) {
        if (confirm('you win! start new game?')) {
          this.startGame();
          return true;
        }
      } else if (this.playerHealth <= 0) {
        if (confirm('you lose! start new game?')) {
          this.isGameRunning = false;
          return true;
        }
      }
      return false
    }
  }
})
