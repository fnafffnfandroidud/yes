controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 3 3 3 . . . . . . 3 . 
        . . . 3 3 3 3 . 3 . . . . 3 . . 
        . . . 3 3 3 3 3 . 3 . . . 3 . . 
        . . . 3 3 . 3 3 . . 3 . . 3 . . 
        . . . 3 3 . 3 . 3 . 3 . 3 . . . 
        . . . 3 . 3 3 3 3 . 3 3 . . . . 
        . . . . 3 . . 3 3 3 3 . . . . . 
        . . . . . 3 3 3 3 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 100, 0)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 3 3 3 . . . . . . 3 . 
        . . . 3 3 3 3 . 3 . . . . 3 . . 
        . . . 3 3 3 3 3 . 3 . . . 3 . . 
        . . . 3 3 . 3 3 . . 3 . . 3 . . 
        . . . 3 3 . 3 . 3 . 3 . 3 . . . 
        . . . 3 . 3 3 3 3 . 3 3 . . . . 
        . . . . 3 . . 3 3 3 3 . . . . . 
        . . . . . 3 3 3 3 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, -100, 0)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass3, function (sprite, location) {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.gameOver(false)
})
let projectile: Sprite = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`nivel1`)
mySprite = sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 3 2 2 2 2 2 2 
    2 2 2 3 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 3 2 2 2 2 3 2 2 2 2 2 2 2 
    2 2 2 3 2 2 2 2 3 2 2 2 2 2 2 2 
    2 2 2 3 3 3 3 3 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.Player)
let myEnemy = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........fffff.........
    ........ff11111f........
    .......fb111111bf.......
    ......fbd1111111f.......
    ......fddd111111df......
    ......fdddd11111df......
    ......fddddddd11df......
    ......fddddddd111f......
    ......fddddddcf11f......
    .......fbdddb1111bf.....
    ........fffcfdb1b1f.....
    .......ffffffffbfbf.....
    ....ff.fffffffffff......
    .....ffffffff...........
    .....ffffffb1b1f........
    ......ffffffbfbf........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, sprites.castle.tileDarkGrass2)
tiles.placeOnRandomTile(myEnemy, sprites.dungeon.collectibleBlueCrystal)
controller.moveSprite(mySprite)
myEnemy.follow(mySprite)
