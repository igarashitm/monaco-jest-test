# A test project for React + TypeScript + monaco-editor + Jest

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and ejected.

## Points to get monaco-editor work in Jest tests

### Use `jest-esm-transformer`
[package.json](package.json)
```json
    "transform": {
      "<rootDir>/node_modules/monaco-editor": "jest-esm-transformer",
      ...
    },
```
For the toolchain we use in AtlasMap, it seems to be the best ATM. I tried to enable experimental ESM support on node and Jest but it didn't work well. Maybe because the `*.ts` files in the project are transformed to CommonJS, Jest is confused with the monaco-editor ESM and the other CommonJS mixed. Also monaco-editor's package.json doesn't have `"type": "module"`, whick might be required.

### Use `jest-matchmedia-mock`
[src/setupTests.ts](src/setupTests.ts)

Only importing it was not enough, it needed to explicitly instantiate `MatchMediaMock`
```typescript
import MatchMediaMock from "jest-matchmedia-mock";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
var matchMedia = new MatchMediaMock();
```
Without this I got:
```
TypeError: window.matchMedia is not a function
```

### Install `canvas`
[package.json](package.json)

Just add it to devDependencies was enough
```
yarn add --dev canvas
```
Without this I got:
```
TypeError: Cannot read property 'webkitBackingStorePixelRatio' of null
```