import { editor, Position } from "monaco-editor";
import { FunctionComponent, useEffect } from "react";
import React from "react";

export const MonacoEditor: FunctionComponent = () => {
  
  useEffect(() => {
    const p = new Position(1, 1);
    editor.create(document.getElementById("monaco-editor")!, {
      value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
      language: 'javascript'
    });
  });

  return (
    <div id="monaco-editor" style={{width: "800px", height: "300px", border: "1px"}}/>
  );
};
