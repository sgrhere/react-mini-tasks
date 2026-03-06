# Task Based Learning
In this repo, I will be exploring the mostly used react concepts. We will begin from simple UI concepts to backend connections in this journey.

## Tailwind Setup in React using Vite
1) `npm create vite@latest`
    set project name as './' to do setup in same directory. <br>
    Choose: React as framework & JS as variant as per now
    
2) `npm install` - to install required packages

3) `npm run dev` - to run the project <br>
    This can be changed to npm start by changing dev script to start.

4) `npm install tailwindcss @tailwindcss/vite';` - to install tailwind css
   
5) Now, open the `vite.config.js` file and add these:-
    * `import tailwindcss from '@tailwindcss/vite';`
    * `plugins : [tailwindcss(), react()]`
    
6) In `index.css` add tailwind css import and remove other CSS codes 
   * `@import "tailwindcss";`
   * Remove `app.css` and  its import from `app.js` file - This file is our entry point.
   * Ensure `index.css` is imported in `main.js`

7) `npm i react-router-dom`  - to install react router & follow router steps in app.js

## Router Steps:-
* import required component using: `import {BrowserRouter, Routes, Route} from 'react-router-dom'`

* Inside return statement, `<BrowserRouter>..<Routes>. <Route>...<Route/>.<Routes/>..<BrowserRouter/>`

* Instead of writing full code for any page, we will make a jsx file for each page component and then link it into `<Route/>` for better visibility and readability. It is also the best practice to perform.

* Make new component, export it, import to App.jsx then set the routing as `<Route path='/' element= {<Home/>} />`. Better to use PascalCase while naming the component and file name.

* Keep path's name in kebab-case `/pathname = /path-name`