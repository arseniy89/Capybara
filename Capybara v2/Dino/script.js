onload = () => {
    let canvas = document.getElementById('canvas')
    let ctx = canvas.getContext('2d')
    let keys = {}
    canvas.width = window.innerWidth - 20
    canvas.height = window.innerHeight - 20
    document.addEventListener('keydown', function (evt) {keys[evt.code] = true})
    document.addEventListener('keyup', function (evt) {keys[evt.code] = false})

    window.onresize = function () {
        canvas.width = innerWidth - 20
        canvas.height = innerHeight - 20
    }

    function drawBackground() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = '#868e96'
        ctx.fillRect(0, canvas.height-7, canvas.width, 2)
    }


    const drawHeadDino = (step, anim, pos_x, pos_y) => {
        [x, y] = (anim[0] === false) ? [0, 0]:[20, 36]
        shift = (step < 2) ? 0:4
        ctx.fillStyle = '#202124'
        ctx.fillRect(44+pos_x+x, 0+pos_y+y+shift, 32, 4)
        ctx.fillRect(40+pos_x+x, 4+pos_y+y+shift, 40, 18)
        ctx.fillRect(40+pos_x+x, 22+pos_y+y+shift, 20, 8)
        ctx.fillRect(60+pos_x+x, 26+pos_y+y+shift, 12, 4)
        ctx.fillStyle = 'white'
        if (anim[2] === false) {
            ctx.fillRect(48+pos_x+x, 6+pos_y+y+shift, 4, 4)
        } else {
            ctx.fillRect(48+pos_x+x, 6+pos_y+y+shift, 8, 8)
            ctx.fillStyle = '#202124'
            ctx.fillRect(50+pos_x+x, 8+pos_y+y+shift, 4, 4)
        }
    }
    const drawBodyDino = (anim, pos_x, pos_y) => {
        ctx.fillStyle = '#202124'
        if (anim[0] === false) {
            ctx.fillRect(36+pos_x, 30+pos_y+shift/8, 20, 26)
            ctx.fillRect(30+pos_x, 34+pos_y+shift/8, 22, 28)
            ctx.fillRect(24+pos_x, 38+pos_y+shift/8, 24, 28)
            ctx.fillRect(20+pos_x, 42+pos_y, 24, 28)
        } else {
            ctx.fillRect(20+pos_x, 42+pos_y+shift/8, 36, 28)
            ctx.fillRect(56+pos_x, 46+pos_y-shift/8, 8, 20)
        }
    }
    const drawHandsDino = (step, anim, pos_x, pos_y) => {
        shift = (step < 2) ? 0:4
        ctx.fillStyle = '#202124'
        if (anim[0] === false) {
            ctx.fillRect(56+pos_x, 38+pos_y+shift/2, 8, 4)
            ctx.fillRect(60+pos_x, 42+pos_y+shift/2, 4, 4)
        } else {
            ctx.fillRect(52+pos_x, 67+pos_y+shift/4, 4, 8)
            ctx.fillRect(48+pos_x, 71+pos_y+shift/4, 4, 4)
        }
    }
    const drawTailDino = (step, anim, pos_x, pos_y) => {
        shift = (step < 2) ? 0:4
        ctx.fillStyle = '#202124'
        ctx.fillRect(16+pos_x, 46+pos_y, 4, 24)
        ctx.fillRect(12+pos_x, 46+pos_y-shift/8, 4, 20)
        y = (anim[0] === false) ? 0:4
        ctx.fillRect(8+pos_x, 42+pos_y+y-shift/4, 4, 20)
        ctx.fillRect(4+pos_x, 38+pos_y+y*2-shift/2, 4, 20)
        ctx.fillRect(0+pos_x, 34+pos_y+y*2-shift, 4, 20)
    }
    const drawRLegDino = (step, anim, pos_x, pos_y) => {
        if (anim[1] === false) {
            if (step < 1) {shift = 0}
            else if (step < 2) {shift = 4}
            else if (step < 3) {shift = 0}
            else if (step < 4) {shift = -4}
            move = (shift === 4) ? 0:2
        } else {
            shift = (step < 2) ? 0:4
            move = 0
        }
        ctx.fillStyle = '#202124'
        ctx.fillRect(20+pos_x-shift, 70+pos_y, 12, 4)
        ctx.fillRect(20+pos_x-shift*2, 74+pos_y, 8, 4)
        ctx.fillRect(20+pos_x-shift*2, 78+pos_y-move, 4, 4)
        ctx.fillRect(20+pos_x-shift*2, 82+pos_y-move, 8, 4)
    }
    const drawLLegDino = (step, anim, pos_x, pos_y) => {
        if (anim[1] === false) {
            if (step < 1) {shift = 0}
            else if (step < 2) {shift = -4}
            else if (step < 3) {shift = 0}
            else if (step < 4) {shift = 4}
            move = (shift === -4) ? 0:2
        } else {
            shift = (step < 2) ? 0:4
            move = 0
        }
        ctx.fillStyle = '#202124'
        ctx.fillRect(36+pos_x-shift, 70+pos_y, 8, 4)
        ctx.fillRect(40+pos_x-shift*2, 74+pos_y, 4, 4)
        ctx.fillRect(40+pos_x-shift*2, 78+pos_y-move, 4, 4)
        ctx.fillRect(40+pos_x-shift*2, 82+pos_y-move, 8, 4)
    }


    class Dino { 
        constructor (t, anim, x, y) {
            this.anim = anim
            this.t = t
            this.x = x
            this.y = y
        }
        Jump() {
        }
        Draw() {
            drawHeadDino(this.t, this.anim, this.x, this.y)
            drawBodyDino(this.anim, this.x, this.y)
            drawHandsDino(this.t, this.anim, this.x, this.y)
            drawTailDino(this.t, this.anim, this.x, this.y)
            drawRLegDino(this.t, this.anim, this.x, this.y)
            drawLLegDino(this.t, this.anim, this.x, this.y)
        }
    }

    // class Obstacle {
    //     constructor () {
    //     }
    //     Update () {
    //     }
    //     Draw () {
    //     }
    // }

    // class Ground {
    //     constructor () {
    //     }
    //     Draw () {
    //     }
    // }

    // class Text {
    //     constructor (t, x, y, a, c, s) {
    //         this.t = t
    //         this.x = x
    //         this.y = y
    //         this.a = a
    //         this.c = c
    //         this.s = s
    //     }
    //     Draw () {
    //         ctx.beginPath()
    //         ctx.fillStyle = this.c
    //         ctx.font = this.s + "px sans-serif"
    //         ctx.textAlign = this.a
    //         ctx.fillText(this.t, this.x, this.y)
    //         ctx.closePath()
    //     }
    // }

    const Start = () => {
        player = new Dino(0, [false,false,false], 0, canvas.height - 88)
        // scoreText = new Text("HI " + score + record, 25, 25, "left", "#202124", "20")
        Animation()
    }

    const Animation = t => {
        if (t >= 512) {t %= 512}
        t /= 128
        
        anim = [(keys['ShiftLeft'] || keys['KeyS'] || keys['ArrowDown']) ? true:false,
                (keys['Space'] || keys['KeyW'] || keys['ArrowUp']) ? true:false,
                false]
        // 0 - squat; 1 - jump; 2 - hit
        drawBackground()

        if (anim[1] === true) {anim[0] = false} // Need update!!!

        player.anim = anim
        player.t = t
        player.x = 0
        player.y = canvas.height - 88

        player.Draw()

        requestAnimationFrame(Animation)
    }

    Start()
}

// ПЛАН НА ДВЕ НЕДЕЛИ (может и больше):
// 1. Добавить прыжок (1 день)
// 2. Добавить кактусы (5 дней)
//      2.1. 3 вида
//      2.2. Добавить появление, сдвиг и исчезновение
//      2.3. Обработать соударение
// 3. Добавить птеродактелей (3 дня)
//      3.1. Сделать анимацию
//      3.2. Добавить появление, сдвиг и исчезновение
//      3.3. Обработать соударение
// 4. Добавить счет (2 дня)
// 5. Добавить  неровности земли (2 дня)
// 6. Добавить солнце и луну, реализовать плавную смену дня и ночи (3 дня)
