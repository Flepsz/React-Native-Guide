# Commands To TS

Create App with template TS 
```
yarn create expo-app --template 
```

Add types dependencies
```
yarn add --dev @tsconfig/react-native @types/jest @types/react @types/react-test-renderer typescript
```
```
yarn add expo react-native-web react-dom @expo/webpack-config
```

Run Project
```
yarn expo start --tunnel
```

# Navigation
```
yarn add @react-navigation/native
```
```
yarn add react-native-screens react-native-safe-area-context @react-navigation/native-stack @react-navigation/stack
```

## Bottom Tabs
```
yarn add @react-navigation/bottom-tabs
```

# Eslint and Prettier

```
yarn add -D expo eslint eslint-config-prettier eslint-config-universe eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

On package.json
```
{
  "eslintConfig": {
    "extends": "universe/native"
  }
}
```

On .eslintrc.json file
```
{
  "extends": ["universe", "plugin:react-hooks/recommended"]
}
```

Install prettier
```
yarn add expo prettier
```

# CSS Config

## Dimensions css (vw, vh, vmin, vmax)
```
yarn add react-native-viewport-units --save
```

Import
```
var {vw, vh, vmin, vmax} = require('react-native-viewport-units');
```

# Tailwind
**Choose which Tailwind to use: Nativewind or Tailwind-RN**<br>
Nativewind is better, but sometimes it may not work, so there is an alternative.

## Nativewind
Install the dependencies:
```
yarn add nativewind postcss autoprefixer
yarn add --dev tailwindcss@3.3.2
```

Run this command to initialize Tailwind and create the `tailwind.config.js` file:
```
npx tailwindcss init
```

Add the paths to all your component files in the `tailwind.config.js`:
```diff
// tailwind.config.js

module.exports = {
- content: [],
+ content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}" "./<custom directory>/**/*.{js,jsx,ts,tsx}", ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Modify your `babel.config.js`:
```diff
// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
+   plugins: ["nativewind/babel"],
  };
};
```

Create `postcss.config.js` and add
```
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```

Create `metro.config.js` and add
```
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
  // [Web-only]: Enables CSS support in Metro.
  isCSSEnabled: true,
});

module.exports = config;
```

Finally, create `globals.css` and import in `StackNavigator`
```
// globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
**Recommended to put in the root of your project**

Example of import
```
// RootNavigator.tsx
import "./globals.css"
```
If you are using typescript, create `globals.d.ts` and add
```
/// <reference types="nativewind/types" />
```


## Tailwind-RN
```
yarn add tailwind-rn
```

```
npx setup-tailwind-rn
```

Follow all the configuration steps as described in the terminal, and then execute:
```
yarn dev:tailwind
```

**Note: Keep it running at all times.**

In `input.css`, add:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

In `tailwind.config.js`:
```
content: [
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
  "./screens/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}"
],
```



