for (let index = 0; index < 4; index++) {
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(466, music.beat(BeatFraction.Half))
    for (let index = 0; index < 2; index++) {
        music.playTone(523, music.beat(BeatFraction.Whole))
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(587, music.beat(BeatFraction.Half))
    }
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    for (let index = 0; index < 4; index++) {
        music.playTone(587, music.beat(BeatFraction.Half))
    }
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    for (let index = 0; index < 4; index++) {
        music.playTone(466, music.beat(BeatFraction.Half))
    }
    for (let index = 0; index < 2; index++) {
        music.playTone(440, music.beat(BeatFraction.Whole))
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(523, music.beat(BeatFraction.Half))
    }
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
}
