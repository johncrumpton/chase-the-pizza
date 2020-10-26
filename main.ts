sprites.onOverlap(SpriteKind.Food, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    pizza.setPosition(randint(0, 160), randint(0, 120))
    info.startCountdown(10)
})
let pizza: Sprite = null
scene.setBackgroundColor(13)
let mySprite = sprites.create(img`
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 f f 5 5 5 5 5 f f f 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 f f f f f f f f 5 5 5 . 
    5 5 5 5 f 5 5 5 5 5 5 f 5 5 5 . 
    . 5 5 5 f f 5 5 5 5 f f 5 5 . . 
    . 5 5 5 5 5 f f f f 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
pizza = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 4 4 2 4 4 2 2 2 4 4 4 4 . 
    . . . 4 2 2 7 7 2 2 2 5 5 4 4 . 
    . . . 4 5 5 5 2 2 2 5 2 2 4 . . 
    . . . 4 5 5 5 2 2 2 2 2 4 . . . 
    . . . . 4 2 2 2 2 2 2 2 . . . . 
    . . . . 4 5 7 2 5 5 2 4 . . . . 
    . . . . . 4 7 2 5 2 4 . . . . . 
    . . . . . 4 2 2 2 2 4 . . . . . 
    . . . . . 4 2 2 2 4 . . . . . . 
    . . . . . . 4 2 2 . . . . . . . 
    . . . . . . 4 2 4 . . . . . . . 
    . . . . . . . 4 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
