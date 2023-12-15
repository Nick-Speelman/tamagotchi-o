input.onButtonPressed(Button.A, function () {
    knop_a = 1
})
input.onButtonPressed(Button.B, function () {
    knop_b = 1
})
let _2 = 0
let _3 = 0
let _1 = 0
let knop_b = 0
let knop_a = 0
let toestand = 5
basic.forever(function () {
    if (toestand == 0) {
        if (knop_a == 1) {
            knop_b = 0
            toestand = 7
        } else if (input.runningTime() - _1 >= 5000) {
            toestand = 6
        } else {
            basic.showIcon(IconNames.Happy)
            pins.analogWritePin(AnalogPin.P2, 1023)
        }
    } else if (toestand == 1) {
        if (knop_b == 1) {
            toestand = 8
        } else if (input.runningTime() - _3 >= 5000) {
            toestand = 5
        } else {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
            pins.analogWritePin(AnalogPin.P2, 250)
        }
    } else if (toestand == 2) {
        if (knop_b == 1) {
            toestand = 5
        } else if (input.runningTime() - _3 >= 5000) {
            toestand = 5
        } else {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                # # # # #
                . . . . .
                `)
            pins.analogWritePin(AnalogPin.P2, 500)
        }
    } else if (toestand == 3) {
        if (knop_a == 1) {
            toestand = 5
        } else if (input.runningTime() - _2 >= 3000) {
            toestand = 4
        } else {
            basic.showIcon(IconNames.Angry)
            music.ringTone(262)
            pins.analogWritePin(AnalogPin.P2, 1023)
        }
    } else if (toestand == 4) {
        basic.showIcon(IconNames.No)
        pins.analogWritePin(AnalogPin.P2, 0)
        music.stopAllSounds()
        music.playTone(523, music.beat(BeatFraction.Half))
        music.playTone(466, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(587, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.playTone(466, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.playTone(466, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(932, music.beat(BeatFraction.Half))
        music.playTone(880, music.beat(BeatFraction.Half))
        music.playTone(932, music.beat(BeatFraction.Half))
        music.playTone(880, music.beat(BeatFraction.Half))
        music.playTone(932, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(932, music.beat(BeatFraction.Half))
        music.playTone(880, music.beat(BeatFraction.Half))
        music.playTone(932, music.beat(BeatFraction.Half))
        music.playTone(880, music.beat(BeatFraction.Half))
        music.playTone(932, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(587, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.playTone(466, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.playTone(466, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(932, music.beat(BeatFraction.Half))
        music.playTone(880, music.beat(BeatFraction.Half))
        music.playTone(932, music.beat(BeatFraction.Half))
        music.playTone(880, music.beat(BeatFraction.Half))
        music.playTone(932, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(932, music.beat(BeatFraction.Half))
        music.playTone(880, music.beat(BeatFraction.Half))
        music.playTone(932, music.beat(BeatFraction.Half))
        music.playTone(880, music.beat(BeatFraction.Half))
        music.playTone(932, music.beat(BeatFraction.Half))
        music.playTone(466, music.beat(BeatFraction.Half))
        music.playTone(466, music.beat(BeatFraction.Half))
        music.playTone(466, music.beat(BeatFraction.Half))
        music.playTone(466, music.beat(BeatFraction.Half))
        music.playTone(587, music.beat(BeatFraction.Half))
        music.playTone(587, music.beat(BeatFraction.Half))
        music.playTone(587, music.beat(BeatFraction.Half))
        music.playTone(587, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Half))
        music.playTone(698, music.beat(BeatFraction.Half))
        music.playTone(698, music.beat(BeatFraction.Half))
        music.playTone(698, music.beat(BeatFraction.Half))
        music.playTone(698, music.beat(BeatFraction.Half))
        music.playTone(784, music.beat(BeatFraction.Half))
        music.playTone(784, music.beat(BeatFraction.Half))
        music.playTone(784, music.beat(BeatFraction.Half))
        music.playTone(784, music.beat(BeatFraction.Half))
        music.playTone(784, music.beat(BeatFraction.Half))
        music.playTone(784, music.beat(BeatFraction.Half))
        music.playTone(784, music.beat(BeatFraction.Half))
        music.playTone(784, music.beat(BeatFraction.Half))
        music.playTone(784, music.beat(BeatFraction.Half))
        music.playTone(784, music.beat(BeatFraction.Half))
        music.playTone(784, music.beat(BeatFraction.Half))
        music.playTone(784, music.beat(BeatFraction.Half))
    } else if (toestand == 5) {
        music.stopAllSounds()
        _1 = input.runningTime()
        knop_b = 0
        knop_a = 0
        toestand = 0
    } else if (toestand == 6) {
        music.stopAllSounds()
        _2 = input.runningTime()
        toestand = 3
    } else if (toestand == 7) {
        music.stopMelody(MelodyStopOptions.All)
        _3 = input.runningTime()
        knop_a = 0
        toestand = 1
    } else if (toestand == 8) {
        music.stopAllSounds()
        knop_b = 0
        toestand = 2
    }
})
