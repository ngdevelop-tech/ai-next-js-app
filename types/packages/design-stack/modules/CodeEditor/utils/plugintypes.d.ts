/**
 * @typedef {Object} EditorPlugin
 * @property {string} id - Unique identifier for the plugin
 * @property {string} name - Display name of the plugin
 * @property {string} [description] - Optional description of the plugin
 * @property {function(Object, Object): void} [initialize] - Called when plugin is first registered
 * @property {function(): void} [dispose] - Cleanup function called when plugin is unregistered
 * @property {function(Object): void} [onBeforeMount] - Called before editor is mounted
 * @property {function(Object, Object): void} [onMount] - Called when editor is mounted
 * @property {function(string, Object): void} [onChange] - Called when editor content changes
 * @property {function(Array): void} [onValidate] - Called when validation markers change
 * @property {function(Object, Object): void} [contributeCommands] - Add custom commands
 * @property {function(Object): void} [contributeLanguage] - Add language support
 * @property {function(Object): void} [contributeTheme] - Add custom themes
 */
/**
 * @typedef {Object} PluginManagerConfig
 * @property {EditorPlugin[]} [plugins] - Array of plugins to register
 * @property {Object} editor - Monaco editor instance
 * @property {Object} monaco - Monaco API instance
 */
