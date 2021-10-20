import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Position } from 'monaco-editor';

describe("App should", () => {
  beforeAll(() => {
  })
  test('renders learn react link', () => {
    render(<App />);
    const p = new Position(1, 1);
    const div = document.getElementById("monaco-editor");
    expect(div).toBeTruthy();
    const canvas = div?.getElementsByTagName("canvas");
    expect(canvas).toBeTruthy();
    expect(canvas?.length).toBe(3);
    expect(canvas![0].className).toBe("decorationsOverviewRuler");
    const textarea = div?.getElementsByTagName("textarea");
    expect(textarea).toBeTruthy();
    expect(textarea?.length).toBe(1);
    expect(textarea![0].className).toBe("inputarea monaco-mouse-cursor-text");
  });
})
  
