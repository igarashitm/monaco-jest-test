import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe("App should", () => {
  beforeAll(() => {
  })
  test('renders learn react link', () => {
    render(<App />);
    const div = document.getElementById("monaco-editor");
    expect(div).toBeTruthy();
  });
})
  
