basic.forever(function () {
    if (input.lightLevel() < 100) {
        basic.showLeds(`
            . # . . .
            . # . . .
            . # . . .
            . # # # .
            . . . . .
            `)
        music.playMelody("C5 B A G F E D C ", 120)
    }
    if (input.lightLevel() > 100) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # # # # #
            # . . . #
            # . . . #
            `)
        music.playMelody("C D E F G A B C5 ", 120)
    }
})
