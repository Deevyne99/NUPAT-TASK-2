<h1>Introduction</h1>
<p>This is a simple design of a dashboard landing page, which acts as a project management tool in order to keep track for progress of teams. </p>

<h2>Technologies used</h2>
<ul>
<li>Vite
<ul>
# installation guide for react using vite  
#documentation : https://vitejs.dev/guide/
<li>npm create vite@latest</li>
<li>it would ask you for the project name  just put . to stay in that project folder</li>
# example:npm create vite@latest my-react-app -- --template . 
#a list of options will pop up 
#example
# Reactjs javascript
# Reactjs typescript ...etc
<li>click on javascript</li>
<li>npm install</li>
# to install node modules 
<li>npm run dev</li>
# to kick start your application
</ul>
</li>
<li>React</li>
<li>Tailwind Css
<ul>
<li>Delete App.css from the src folder it will not be needed</li>
<li>you can read the documentation here <a href="https://tailwindcss.com/docs">tailwindcss</a></li>
#To install tailwind css first navigate to frame work on the home page of the documentation.
<li>click on vite</li>
#then navigate to your project folder
#cd myProject 
#then run
<li>npm install -D tailwindcss postcss autoprefixer </li>
<li>npx tailwindcss init -p </li>
#this will generate a post.config.js and a tailwind.config.js file
<li>in your tailwind.config file enter content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ] in the content</li>
  <li>
  in your index.css file located in the src folder delete everything and enter @tailwind base;
@tailwind components;
@tailwind utilities;
  </li>
  #test the code if its working by going to any html element and giving it a className bg-red-600
  <li>npm run dev </li>
</ul>
</li>

</ul>

<h2>folder structure</h2>
<ul>
<ul>
<li>Public </li>
</ul>
<ul>
<li>src</li>
<ul>
<li>assets folder</li>
<li>components folder eg. sidebar
<ul>
<li>Sidebar.jsx</li>
</ul>
</li>
</ul>
<li>App.jsx</li>
<li>index.css</li>
<li>main.jsx</li>
</ul>
<li>index.html</li>
<li>package-lock.json</li>
<li>package.json</li>
<li>postcss.config.js</li>
<li>Readme.MD</li>
<li>tailwind.config.js</li>
<li>vite.config.js</li>
</ul>

<h2>component description</h2>
<ul>
<li> Sidebar.jsx 
<p>This  defines a React component  that represents a sidebar navigation menu for the dashboard. The sidebar contains various menu items with icons and links, and it is styled using Tailwind CSS classes. The Sidebar component is exported as a default export, It is then imported to the App.jsx as a Component.</p>
</li>
</ul>
