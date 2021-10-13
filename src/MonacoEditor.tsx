import { editor } from "monaco-editor/esm/vs/editor/editor.api";
import { FunctionComponent, useEffect } from "react";
import React from "react";

export const MonacoEditor: FunctionComponent = () => {
  
  useEffect(() => {
    editor.create(document.getElementById("monaco-editor")!, {
      value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
      language: 'javascript'
    });
  });

  return (
    <div id="monaco-editor" style={{width: "800px", height: "300px", border: "1px"}}/>
  );
};
