import { Texture } from '@pixi/core'
import { Sprite } from '@pixi/sprite'
import anime from 'animejs'

export default class Background extends Sprite {
    constructor() {
        super(Texture.EMPTY)
        
        this.sprite = Sprite.from('player')
        this.sprite.anchor.set(0.5)
        this.addChild(this.sprite)

        this.animate()
    }

    animate() {
        anime({
            targets: this.sprite,
            x: {
                value: 25,
                duration: 2000,
                easing: 'easeInOutCubic'
            },
            loop: true,
            direction: 'alternate'
        })

        anime({
            targets: this.sprite,
            duration: 750,
            y: {
                value: 10,
                easing: 'easeInOutQuad'
            },
            loop: true,
            direction: 'alternate'
        })

        const angle = 0.02
        this.sprite.rotation = angle
        anime({
            targets: this.sprite,
            duration: 1000,
            rotation: {
                value: -angle,
                easing: 'easeInOutQuad'
            },
            loop: true,
            direction: 'alternate'
        })
    }

    onResize(width, height) {
        this.x = width * 0.2
        this.y = height * 0.5
    }
}