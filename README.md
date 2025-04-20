# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

<h2>🚀 Deployment to GitHub Pages</h2>

<p>This project uses <a href="https://pages.github.com/" target="_blank">GitHub Pages</a> for deployment.</p>

<h3>📦 Prerequisites</h3>

<p>Install the <code>gh-pages</code> package as a dev dependency:</p>

<pre><code>npm install gh-pages --save-dev
</code></pre>

<h3>⚙️ Configuration</h3>

<h4>1. Update <code>vite.config.js</code></h4>

<p>Set the correct <code>base</code> path (your repo name):</p>

<pre><code>// vite.config.js
export default {
  base: '/&lt;your-repo-name&gt;/',
}
</code></pre>

<h4>2. Update <code>package.json</code></h4>

<p>Add the following:</p>

<pre><code>
"homepage": "https://&lt;your-username&gt;.github.io/&lt;your-repo-name&gt;",
"scripts": {
  "predeploy": "vite build",
  "deploy": "gh-pages -d dist"
}
</code></pre>

<p>Replace <code>&lt;your-username&gt;</code> and <code>&lt;your-repo-name&gt;</code> accordingly.</p>

<h3>📤 Deployment Steps</h3>

<p>To deploy or update the site on GitHub Pages:</p>

<pre><code>npm run deploy</code></pre>

<p>This will:</p>
<ol>
  <li>Build the app into the <code>dist/</code> directory.</li>
  <li>Push the build output to the <code>gh-pages</code> branch.</li>
</ol>

<h3>🌐 Live URL</h3>

<p>After successful deployment, your site will be available at:</p>

<pre><code>https://&lt;your-username&gt;.github.io/&lt;your-repo-name&gt;/</code></pre>
