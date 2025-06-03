/**
 * @type {import('../types/plugin').EditorPlugin}
 */
declare const gherkinPlugin: {
    id: string;
    name: string;
    description: string;
    storage: WeakMap<object, any>;
    initialize(editor: any, monaco: any): void;
    setupLanguage(monaco: any): void;
    registerCompletionProvider(monaco: any): void;
    onMount(editor: any): void;
    dispose(): void;
    toJSON(): {
        id: any;
        name: any;
        description: any;
    };
};
export default gherkinPlugin;
