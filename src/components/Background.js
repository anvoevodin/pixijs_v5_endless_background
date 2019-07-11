import { Texture } from '@pixi/core'
import { Sprite } from '@pixi/sprite'

export default class Background extends Sprite {
    constructor() {
        super(Texture.from('bg'))
    }

    onResize(width, height) {
        this.width = width
        this.height = height
    }
}