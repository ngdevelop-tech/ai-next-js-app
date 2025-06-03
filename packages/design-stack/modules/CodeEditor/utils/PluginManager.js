/**
 * Manages the lifecycle and execution of editor plugins
 */
class PluginManager {
  /**
   * @param {PluginManagerConfig} config
   */
  constructor({ plugins = [], editor, monaco }) {
    this.plugins = new Map();
    this.editor = editor;
    this.monaco = monaco;
    plugins.forEach((plugin) => this.register(plugin));
  }

  /**
   * Register a new plugin
   * @param {EditorPlugin} plugin
   */
  register(plugin) {
    if (this.plugins.has(plugin.id)) {
      // console.warn(`Plugin with id ${plugin.id} is already registered.`);
      return;
    }
    this.plugins.set(plugin.id, plugin);
    this.initializePlugin(plugin);
  }

  /**
   * Unregister a plugin by ID
   * @param {string} pluginId
   */
  unregister(pluginId) {
    const plugin = this.plugins.get(pluginId);
    if (plugin?.dispose) {
      plugin.dispose();
    }
    this.plugins.delete(pluginId);
  }

  /**
   * Initialize a single plugin
   * @private
   * @param {EditorPlugin} plugin
   */
  initializePlugin(plugin) {
    if (plugin.initialize) {
      plugin.initialize(this.editor, this.monaco);
    }
  }

  /**
   * Handle editor before mount event
   */
  handleBeforeMount() {
    this.plugins.forEach((plugin) => {
      if (plugin.onBeforeMount) {
        plugin.onBeforeMount(this.monaco);
      }
    });
  }

  /**
   * Handle editor mount event
   * @param {Object} editor
   * @param {Object} monaco
   */
  handleMount(editor, monaco) {
    this.editor = editor;
    this.monaco = monaco;
    this.plugins.forEach((plugin) => {
      if (plugin.onMount) {
        plugin.onMount(editor, monaco);
      }
      if (plugin.contributeCommands) {
        plugin.contributeCommands(editor, monaco);
      }
      if (plugin.contributeLanguage) {
        plugin.contributeLanguage(monaco);
      }
      if (plugin.contributeTheme) {
        plugin.contributeTheme(monaco);
      }
    });
  }

  /**
   * Handle editor content change
   * @param {string} value
   */
  handleChange(value) {
    this.plugins.forEach((plugin) => {
      if (plugin.onChange) {
        plugin.onChange(value, this.editor);
      }
    });
  }

  /**
   * Handle validation markers change
   * @param {Array} markers
   */
  handleValidation(markers) {
    this.plugins.forEach((plugin) => {
      if (plugin.onValidate) {
        plugin.onValidate(markers);
      }
    });
  }

  /**
   * Cleanup all plugins
   */
  dispose() {
    this.plugins.forEach((plugin) => {
      if (plugin.dispose) {
        plugin.dispose();
      }
    });
    this.plugins.clear();
  }
}

export default PluginManager;
