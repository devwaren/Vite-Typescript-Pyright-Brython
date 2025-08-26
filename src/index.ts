import "./css/index.css"
import { useInitialDOM, useTSloadBrython } from "@devwareng/vanilla-ts"
import Start from "./Start";

async function main() {
    await useTSloadBrython();
    useInitialDOM("app", Start);

    // Disable all uncaught errors in production
    if (import.meta.env.ENV === "prod") {
        window.onerror = () => true;
    }

}

main();





