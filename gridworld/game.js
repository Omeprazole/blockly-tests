/**
 * @file Phaser main loop and interface
 * @author Jay Bloodworth <johnabloodworth3@gmail.com>
 */
 
(function (module, exports, Phaser) {
    var tileSize = 48;
    var boardX = 12;
    var boardY = 12;
    var walkTime = 1200;

    var initFunc;
    var nextStepFunc;
    var game;
    var player;
    var map;
    
    var gameState = {
        preload: function () {
            console.log('Pre');
            game.load.spritesheet('player',
                'assets/gridworld/purple-zombie-ss.png', 40, 40);
            game.load.tilemap('map', 'assets/gridworld/level1.json', null,
                Phaser.Tilemap.TILED_JSON);
            game.load.image('tiles', 'assets/gridworld/tileset.png');
            game.load.image('features', 'assets/gridworld/features.png');
        },
        
        create: function () {
            console.log('Create');
            map = game.add.tilemap('map');
            
            map.addTilesetImage('Ground', 'tiles');
            map.addTilesetImage('Features', 'features');
            
            var ground = map.createLayer('Ground');
            ground.resizeWorld();
            map.createLayer('Features');
            
            player = game.add.sprite(2, 2, 'player');
            player.animations.add('walk_s', [0,1,2], 6, true);
            player.animations.add('walk_e', [3,4,5], 6, true);
            player.animations.add('walk_n', [6,7,8], 6, true);
            player.animations.add('walk_w', [9,10,11], 6, true);
            player.animations.add('stand_s', [0], 1, true);
            player.animations.add('stand_e', [3], 1, true);
            player.animations.add('stand_n', [6], 1, true);
            player.animations.add('stand_w', [9], 1, true);
            player.animations.play('stand_s');
            
            initFunc();
            
        },
        
        update: function () {
            //console.log('Update Loop', exports.busy);
        }
    };
    
    exports.atGoal = function () {
        var tile = map.getTileWorldXY(player.x, player.y);
        return !!tile && (tile.properties.goal === 'true');
    };

    exports.walk = function (dir) {
        switch (dir) {
            case 'n':
                var dX = 0;
                var dY = -1;
                var tweenProps = {y: player.y + dY*tileSize};
                break;
            case 's':
                dX = 0;
                dY = 1;
                tweenProps = {y: player.y + dY*tileSize};
                break;
            case 'e':
                dX = 1;
                dY = 0;
                tweenProps = {x: player.x + dX*tileSize};
                break;
            case 'w':
                dX = -1;
                dY = 0;
                tweenProps = {x: player.x + dX*tileSize};
                break;
        }
        var dest = map.getTileWorldXY(
            player.x + dX*tileSize, player.y + dY*tileSize,
            tileSize, tileSize, 'Ground');
        if (!dest || (dest.properties.blocker === 'true')) {
            // Obstacle; walk in place
            //exports.busy = true;
            player.animations.play('walk_' + dir);
            var timer = game.time.create(true);
            timer.add(walkTime, function () {
                //exports.busy = false;
                player.animations.play('stand_' + dir);
                nextStepFunc();
            });
            timer.start();
            return false;
        }
        // Nothing in the way; go ahead
        var tween = game.add.tween(player);
        tween.to(tweenProps, walkTime);
        //exports.busy = true;
        player.animations.play('walk_' + dir);
        tween.onComplete.add(function () {
            //exports.busy = false;
            player.animations.play('stand_' + dir);
            nextStepFunc();
        }, this);
        tween.start();
        return true;
    };
    
    exports.init = function (init_func, nextstep_func) {
        initFunc = init_func;
        nextStepFunc = nextstep_func;
        exports.busy = false;
        game = new Phaser.Game(boardX*tileSize, boardY*tileSize,
            Phaser.AUTO, 'grid-container', gameState);
            console.log('End game init');
        return game;
    };

    exports.busy = false;
    
})(module, exports, Phaser);