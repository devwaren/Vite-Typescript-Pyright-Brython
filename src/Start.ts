
import { html, useTSAnchorMount, useTSComponent, useTSElements } from '@devwareng/vanilla-ts'
import { Router } from './routes/router'

export default function Start(DOM: HTMLElement) {

    const ui = useTSElements(DOM, html`
    <div id="router"></div>
        `)

    useTSComponent("router", DOM, Router)
    useTSAnchorMount()
    return ui
}