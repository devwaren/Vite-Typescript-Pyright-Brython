import { html, loadPyFiles, useTSElements, useTSMetaData } from '@devwareng/vanilla-ts';

export default function Home(DOM: HTMLElement) {
    useTSMetaData({
        name: 'Home Page',
        description: 'A Vite + TypeScript + Brython + Pyright project',
        author: 'Your Name'
    });

    const ui = useTSElements(
        DOM,
        html`
        <div
            class="grid gap-4 p-4 place-items-center min-h-svh md:min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-teal-100">
            <div class="grid place-items-center">
                <div class="flex gap-4 my-8">
                    <img src="/vite.webp" alt="Vite Logo" width="100" loading="lazy">
                    <img src="/brython.webp" alt="Brython Logo" width="100" loading="lazy">
                    <img src="/typescript.webp" alt="TypeScript Logo" width="100" class="rounded-xl" loading="lazy">
                    <img src="/pyright.webp" alt="Pyright Logo" width="100" loading="lazy">
                </div>
                <button id="btn" aria-label="Counter Button"
                    class="px-4 py-2 bg-blue-200 w-fit rounded hover:scale-110 hover:bg-teal-400 duration-500 cursor-pointer">
                    Counter: 0
                </button>
            </div>
        </div>
        `
    );

    loadPyFiles("main.py");

    return ui;
}
