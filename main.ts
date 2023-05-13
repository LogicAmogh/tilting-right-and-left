input.onGesture(Gesture.TiltLeft, function () {
    basic.pause(200)
    Move(4)
    basic.pause(500)
    Move(3)
    basic.pause(500)
    Move(2)
    basic.pause(500)
    Move(1)
    basic.pause(500)
    Move(0)
    basic.pause(500)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.pause(200)
    Move(0)
    basic.pause(500)
    Move(1)
    basic.pause(500)
    Move(2)
    basic.pause(500)
    Move(3)
    basic.pause(500)
    Move(4)
    basic.pause(500)
})
function Move (Z: number) {
    basic.clearScreen()
    X = Z
    Y = 0
    for (let index = 0; index < 5; index++) {
        led.plot(X, Y)
        Y += 1
    }
}
let Y = 0
let X = 0
basic.pause(200)
Move(4)
