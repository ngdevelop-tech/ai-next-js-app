/**
 * Manages the lifecycle and execution of editor plugins
 */
declare class PluginManager {
    /**
     * @param {PluginManagerConfig} config
     */
    constructor({ plugins, editor, monaco }: {
        plugins?: any[];
        editor: any;
        monaco: any;
    });
    /**
     * Register a new plugin
     * @param {EditorPlugin} plugin
     */
    register(plugin: any): void;
    /**
     * Unregister a plugin by ID
     * @param {string} pluginId
     */
    unregister(pluginId: any): void;
    /**
     * Initialize a single plugin
     * @private
     * @param {EditorPlugin} plugin
     */
    initializePlugin(plugin: any): void;
    /**
     * Handle editor before mount event
     */
    handleBeforeMount(): void;
    /**
     * Handle editor mount event
     * @param {Object} editor
     * @param {Object} monaco
     */
    handleMount(editor: any, monaco: any): void;
    /**
     * Handle editor content change
     * @param {string} value
     */
    handleChange(value: any): void;
    /**
     * Handle validation markers change
     * @param {Array} markers
     */
    handleValidation(markers: any): void;
    /**
     * Cleanup all plugins
     */
    dispose(): void;
}
export default PluginManager;
