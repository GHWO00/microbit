input.onButtonPressed(Button.A, function () {
    steps = 0
    basic.showString("Reset")
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
    basic.showNumber(steps)
    if (steps == 100) {
        music.playMelody("G F G A - F E D ", 120)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 2; index++) {
        basic.showNumber(0.7 * steps)
        basic.showString("m")
    }
})
let steps = 0
steps = 0
