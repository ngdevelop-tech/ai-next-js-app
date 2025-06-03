/**
 * @type {import('../types/plugin').EditorPlugin}
 */
declare const autoSavePlugin: {
    id: string;
    name: string;
    description: string;
    initialize(editor: any): void;
    onMount(editor: any, monaco: any): void;
    dispose(): void;
};
export default autoSavePlugin;
