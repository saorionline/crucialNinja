# New Project Creation:

There's no specific command to recreate a folder based on a package.json. However, you can achieve this by:
Creating a new directory for your project using 

mkdir <project_name>

Navigate to the new directory using 
```javascript
cd <project_name>
```
Initialize a new npm project using 
```javascript
npm init -y 
```
(This creates a basic package.json file with defaults).
Installing Dependencies:

The **package.json** file lists dependencies under two sections:

## dependencies: 

> These are packages required for the  application to run.

## devDependencies: 

> These are packages needed for development tasks like building or testing and are not included in the final production build.
 
Run two separate commands in your terminal:

```javascript
npm install autoprefixer postcss-cli tailwindcss
```
```javascript
npm install --save-dev @fullhuman/postcss-purgecss cssnano
```

# Next Steps

> tailwind.config.js: 

This command will create a configuration file named tailwind.config.js in the root directory of your project. This file allows you to customize various aspects of Tailwind CSS, like the color palette, font families, and utility classes generated.

```javascript
npx tailwindcss init
touch postcss.config.js
```

PostCSS: It's a CSS processor, not a build tool. It transforms and manipulates CSS code before it's included in your final application bundle. PostCSS can add features like variables, mixins, nesting, and future CSS syntax support to your CSS code.

#### Create a folder css>tailwind.css this code:
```javascript
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### Insert this content in >postcss.config.js:
```javascript
module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
    ]
}
```
# Install Save Dev Parcel

Use npm to install Parcel as a development dependency:

```javascript
npm install --save-dev parcel
```
### Development Server

```javascript
npm run start
```
## Parcel

1. Open your project's package.json file in a text editor.

2. Locate the scripts section. If it doesn't exist, add the following section:
```javascript
"scripts": {
  "start": "parcel ./public/index.html"
}
```

#### Create a folder public>index.html this code:
```html
HTML
```

Insert the CSS Path and run
```javascript
npm run build
```

# Colores

```javascript
npx tailwindcss init tailwind.config.full.js --full
```
