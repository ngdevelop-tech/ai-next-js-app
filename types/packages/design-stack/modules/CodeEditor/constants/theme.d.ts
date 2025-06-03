declare const editorTheme: {
    base: string;
    inherit: boolean;
    rules: ({
        token: string;
        foreground: string;
        fontStyle: string;
    } | {
        token: string;
        foreground: string;
        fontStyle?: undefined;
    })[];
    colors: {
        'editor.background': string;
        'editor.foreground': string;
        'editor.lineHighlightBackground': string;
        'editor.selectionBackground': string;
        'editorCursor.foreground': string;
        'editorLineNumber.foreground': string;
        'editorLineNumber.activeForeground': string;
        'editor.selectionHighlightBackground': string;
    };
};
export default editorTheme;
