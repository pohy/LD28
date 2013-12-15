// Generated by CoffeeScript 1.6.3
(function() {
  window.GameScene = (function() {
    function GameScene(game) {
      this.game = game;
      this.phase = 0;
      this.items = this.spawnItems(5);
      if (this.game.debug) {
        console.log("-------------------------");
      }
      this.basket = new Basket(this.game, this);
    }

    GameScene.prototype.update = function() {
      var item, _i, _len, _ref;
      if (this.game.debug && this.game.keys.keyPressed(82)) {
        console.log("spawning items");
        this.items = this.spawnItems(5);
      }
      _ref = this.items;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        if (item !== void 0) {
          item.update();
        }
      }
      return this.basket.update();
    };

    GameScene.prototype.render = function() {
      var item, _i, _len, _ref;
      this.game.context.clearRect(0, 0, this.game.width, this.game.height);
      this.game.util.drawRect(0, 0, this.game.width, this.game.height, "#0f0f0f");
      _ref = this.items;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        if (item !== void 0) {
          item.render();
        }
      }
      return this.basket.render();
    };

    GameScene.prototype.spawnItems = function(count) {
      var i, items, _i;
      items = [];
      for (i = _i = 0; 0 <= count ? _i < count : _i > count; i = 0 <= count ? ++_i : --_i) {
        items.push(new Item(parseInt(this.game.width) + (64 * i), 200, this.game, this));
      }
      return items;
    };

    return GameScene;

  })();

}).call(this);
