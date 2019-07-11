import { Application } from '@pixi/app'

import Background from './components/Background'
import Ground from './components/Ground'
import Clouds from './components/Clouds'
import Player from './components/Player'

export default class App extends Application {
    constructor() {
        super({
            width: window.innerWidth,
            height: window.innerHeight
        })
        document.body.appendChild(this.view) // Create Canvas tag in the body

        this.init()

        window.addEventListener('resize', this.onResize.bind(this))
    }

    init() {
        // Load the logo
        this.loader.add('bg', './assets/bg.png')
        this.loader.add('ground', './assets/ground.png')
        this.loader.add('player', './assets/player.png')
        this.loader.add('clouds', './assets/clouds.png')
        this.loader.load(this.draw.bind(this))
    }

    draw() {
        this.background = new Background()
        this.ground = new Ground()
        this.clouds = new Clouds()
        this.player = new Player()

        this.stage.addChild(this.background, this.ground, this.clouds, this.player)

        this.onResize()
        
        // Create an update loop
        this.ticker.add(this.onUpdate.bind(this))
    }

    onUpdate(delta) {
        this.ground.onUpdate(delta)
        this.clouds.onUpdate(delta)
    }

    onResize() {
        this.renderer.resize(window.innerWidth, window.innerHeight)
        const width = this.renderer.width, height = this.renderer.height
        this.background.onResize(width, height)
        this.ground.onResize(width, height)
        this.clouds.onResize(width, height)
        this.player.onResize(width, height)
    }
}