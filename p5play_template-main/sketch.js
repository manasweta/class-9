var box
function setup() {
    box = createSprite(200,200,10,10)
 }

function draw() {
    background("black")
    if(keyDown("up")){
        background("red")
    }

    if(keyDown("down")){
        background("blue")
    }

    if(keyDown("right")){
        background("green")
    }

    if(keyDown("left")){
        background("purple")
    }

    drawSprites()
}





