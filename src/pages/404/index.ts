import { html, useTSElements, useTSMetaData } from '@devwareng/vanilla-ts'

export default function NotFound(DOM: HTMLElement) {
    useTSMetaData({
        name: 'index',
        description: '',
        author: ''
    });

    const ui = useTSElements(
        DOM,
        html`
<div>
    <h1>index</h1>
</div>
`
    );
    return ui
}