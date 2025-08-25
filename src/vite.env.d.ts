interface ImportMeta {
    readonly env: ImportMetaEnv;
}

interface TrustedTypePolicyFactory {
    getPolicy?(name: string): TrustedTypePolicy | undefined;
}

