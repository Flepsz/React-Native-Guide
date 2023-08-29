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
```
yarn add tailwind-rn
```
```
npx setup-tailwind-rn
```

Siga todos os passos de configuração que estão descritos no terminal e logo execute
```
yarn dev:tailwind
```
**Obs: Deixe ele sempre executando**

Em `input.css` adicione:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Em `tailwind.config.js`:
```
content: [
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
  "./screens/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}"
],
```

