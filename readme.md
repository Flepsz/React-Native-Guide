# Commands To TS

Create App with template TS 
```
yarn create expo-app --template 
```

Add types dependencies
```
yarn add --dev @tsconfig/react-native @types/jest @types/react @types/react-test-renderer typescript @types/react@~18.0.27 typescript@^4.9.4
```
```
yarn add expo react-native-web@~0.19.6 react-dom@18.2.0 @expo/webpack-config
```

Run Project
```
yarn expo start --tunnel
```

# Eslint and Prettier

```
yarn expo install eslint eslint-config-prettier eslint-config-universe eslint-plugin-react-hooks
```

On .eslintrc.json file
```
{
  "extends": ["universe", "plugin:react-hooks/recommended"]
}
```

Install prettier
```
expo install prettier
```

# Dimensions css (vw, vh, vmin, vmax)
```
npm install react-native-viewport-units --save
```

Import
```
var {vw, vh, vmin, vmax} = require('react-native-viewport-units');
```
