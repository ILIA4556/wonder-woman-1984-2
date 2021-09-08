scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    info.changeScoreBy(1)
    music.baDing.play()
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorLockedNorth, function (sprite, location) {
    info.setLife(3)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    info.changeLifeBy(-1)
    music.powerDown.play()
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    tiles.setTilemap(tilemap`4321`)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleBlueCrystal)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    info.setLife(game.askForNumber(""))
    tiles.setTileAt(location, sprites.dungeon.chestOpen)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    info.stopCountdown()
    effects.clearParticles(mySprite)
})
info.onLifeZero(function () {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    info.startCountdown(10)
    mySprite.startEffect(effects.fire)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    game.reset()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    tiles.setTilemap(tilemap`level3`)
    tiles.placeOnRandomTile(mySprite, assets.tile`transparency16`)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
let mySprite: Sprite = null
info.setLife(4)
tiles.setTilemap(tilemap`4321`)
info.setScore(0)
mySprite = sprites.create(assets.image`12`, SpriteKind.Player)
controller.moveSprite(mySprite, 150, 150)
scene.setBackgroundColor(11)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLadder)
scene.cameraFollowSprite(mySprite)
forever(function () {
    if (info.score() < 0) {
        game.over(false)
    }
})
