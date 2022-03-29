<h1 align="center">
  Vite Template React
</h1>

<p align="center">
  <a href="https://github.com/SafdarJamal/vite-template-react/releases">
    <img src="https://img.shields.io/github/v/release/SafdarJamal/vite-template-react" alt="GitHub Release (latest by date)" />
  </a>
  <a href="https://github.com/SafdarJamal/vite-template-react/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/SafdarJamal/vite-template-react" alt="License" />
  </a>
</p>

<p align="center">
    A <a href="https://vitejs.dev">Vite</a> + <a href="https://reactjs.org">React</a> starter template.
</p>

## Folder Structure

No configuration or complicated folder structures, just the files you need to build your app:

```
vite-template-react
├── node_modules
├── public
│   ├── favicon.svg
│   └── robots.txt
└── src
    ├── App.css
    ├── App.jsx
    ├── index.css
    ├── index.jsx
    └── logo.svg
├── .gitignore
├── index.html
├── package.json
├── README.md
├── vite.config.js
```

Make it your own:

```
rm -rf .git && git init && npm init
git add .
git commit -m "Initial commit"
```

Install dependencies:

```
npm i
```

Now, you can start a local web server by running:

```
npm start
```

And then open http://localhost:3000 to view it in the browser.

#### Available Scripts

In this project, you can run the following scripts:

| Script        | Description                                         |
| ------------- | --------------------------------------------------- |
| npm run dev   | Runs the app in the development mode.               |
| npm run build | Builds the app for production to the `dist` folder. |
| npm run serve | Serves the production build from the `dist` folder. |
