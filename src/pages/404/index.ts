import { html, useTSElements, useTSEvent, useTSMetaData } from '@devwareng/vanilla-ts'
import notfoundGIF from "/notfound.gif"

export default function NotFound(DOM: HTMLElement, websiteName: string) {

    document.title = websiteName + ' | 404'

    useTSMetaData({
        name: 'NotFound',
        description: '',
        author: ''
    });

    const ui = useTSElements(
        DOM,
        html`
        <div class="min-h-screen w-full grid place-items-center bg-white">
            <div>
                <div class="relative w-full">
                    <img src=${notfoundGIF} loading="lazy" alt="404" />
                    <div class="text-center absolute bottom-[-10%] left-0 right-0">
                        <p class="text-5xl font-bold">404</p>
                        <h1>Page Not Found</h1>
                        <p class="text-sm text-gray-600">It looks like the page you're looking for doesn't exist.</p>
                        <button id="go-home"
                            class="px-4 py-2 bg-blue-600 text-white inline-flex gap-4 items-center my-2 rounded cursor-pointer hover:bg-blue-500"><a
                                href="/" class="bx bx-arrow-back"></a><span>Back to
                                Home</span></button>
                    </div>
                </div>
            </div>
        </div>
    `,
    );

    useTSEvent("go-home", "click", () => window.location.href = "/")

    return ui
}