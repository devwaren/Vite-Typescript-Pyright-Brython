declare module "path" {
    export function join(...args: string[]): string;
}

declare module "*.css" {
    const styles: { [key: string]: string };
    export default styles;
}

declare module "*" {
    const value: string;
    export default value;
}