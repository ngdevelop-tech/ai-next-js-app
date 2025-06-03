/**
 * @type {import('../types/plugin').EditorPlugin}
 */
const autoSavePlugin = {
  id: 'auto-save',
  name: 'Auto Save',
  description: 'Automatically saves editor content periodically',

  initialize(editor) {
    this.saveInterval = null;
    this.lastContent = editor.getValue();
  },

  onMount(editor, monaco) {
    // Auto-save every 30 seconds
    this.saveInterval = setInterval(() => {
      const content = editor.getValue();
      if (content !== this.lastContent) {
        this.lastContent = content;
        localStorage.setItem('editor-content', content);
      }
    }, 30000);

    // Create save command using KeyMod constants
    const SAVE_COMMAND_KEY = [
      monaco.KeyMod.CtrlCmd,
      monaco.KeyCode.KEY_S
    ].reduce((a, b) => a + b, 0);

    // Add save command
    editor.addCommand(SAVE_COMMAND_KEY, () => {
      localStorage.setItem('editor-content', editor.getValue());
    });
  },

  dispose() {
    if (this.saveInterval) {
      clearInterval(this.saveInterval);
    }
  }
};

export default autoSavePlugin;
