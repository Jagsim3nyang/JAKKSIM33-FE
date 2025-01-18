import { useRef, useEffect } from "react";
import * as monaco from "monaco-editor";
import { LANGUAGE } from "@/constants/code-editor";

interface CodeEditorProps {
  language: LANGUAGE;
  value: string;
  onChange: (value: string) => void;
}

function CodeEditor({ language, value, onChange }: CodeEditorProps) {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const monacoEditorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  useEffect(() => {
    if (!editorRef.current) return;

    if (!monacoEditorRef.current) {
      monacoEditorRef.current = monaco.editor.create(editorRef.current, {
        value,
        language,
        theme: "vs-light",
        automaticLayout: true,
      });

      monacoEditorRef.current.onDidChangeModelContent(() => {
        const currentValue = monacoEditorRef.current?.getValue() || "";
        onChange(currentValue);
      });
    } else {
      const model = monaco.editor.createModel(value, language);
      monacoEditorRef.current.setModel(model);
    }

    return () => {
      monacoEditorRef.current?.dispose();
      monacoEditorRef.current = null;
    };
  }, [language]);

  useEffect(() => {
    if (monacoEditorRef.current && monacoEditorRef.current.getValue() !== value) {
      monacoEditorRef.current.setValue(value);
    }
  }, [value]);

  return <div ref={editorRef} style={{ height: "300px", width: "100%" }} />;
}

export default CodeEditor;
