import { Texture } from '@pixi/core'
import { TilingSprite } from '@pixi/sprite-tiling'

export default class Clouds extends TilingSprite {
    constructor() {
        const texture = Texture.from('clouds')
        super(texture, 1, texture.height) //width 1 because we will call onResize from App anyway
    }

    onResize(width, height) {
        this.width = width
    }

    onUpdate(delta) {
    	this.tilePosition.x -= delta * 4
    }
}