let projectile: Sprite = null
scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 5 5 5 . . . . . . . 
    . . . . . 5 5 e 5 5 . . . . . . 
    . . . . . 5 e e e 5 . . . . . . 
    . . . . . 5 5 e 5 5 . . . . . . 
    . . . . . . 5 5 5 . . . . . . . 
    . . . . 7 . . 7 . . 7 . . . . . 
    . . . . . 7 . 7 . 7 . . . . . . 
    . . . . . . 7 7 7 . . . . . . . 
    . . . . . . . 7 . . . . . . . . 
    . . . . . . . 7 . . . . . . . . 
    . . . . . . . 7 . . . . . . . . 
    . . . . . . . 7 . . . . . . . . 
    `, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . 1 1 1 1 . . . . . . . . . . 
        . . 1 1 1 1 1 . . . 1 1 . . . . 
        . 1 1 1 1 1 1 1 . 1 1 1 . . . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . 1 1 5 5 5 5 1 1 1 1 1 1 . . . 
        . . 1 5 f f 5 f f 5 5 1 5 . . . 
        . . 5 5 f f 5 f f 5 f 5 5 5 . . 
        . . 5 5 f f 5 f f 5 f 5 f 5 5 . 
        . . 5 5 f f 5 f f 5 f 5 5 5 5 . 
        . . 5 5 f f 5 f f 5 f 5 5 5 5 . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . . . . f . 5 5 f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . . . . . f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, randint(-25, 25), randint(-25, 25))
    projectile.lifespan = 3000
    if (mySprite.vx < 0) {
        projectile.image.flipX()
    }
})
