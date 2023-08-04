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
```
yarn add nativewind
yarn add --dev tailwindcss
```

```
yarn tailwind init
```

On tailwind.config.js
```
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [],
};
```

