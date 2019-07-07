## Objective   

Create a HTML5 page using a JS framework or other tools of your choosing (for example AngularJS, Angular2, React, etc.) to serve as a visual tool for creating an “expression.” Note that you’re not required to use any particular framework.  

### Inputs

A list of JavaScript functions (for the purposes of this exercise you can assume that the list will be complete and available when the page loads and will not change).   

### Initial Display

For every function in the list, a unique icon will be displayed on screen, captioned with the function name. Additionally, a blank “expression area” will be present on the screen into which the user can drag and drop the name icons   

### Initial user interaction
The user can drag and drop one of the icons into the blank “expression area”. This will trigger additional placeholder areas (a simple &lt;div&gt; with boundary) to appear on the right of the icon. The number of placeholder areas is dependent on the number of arguments that the function represented by the icon is supposed to receive. 

## Framework Used

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Implementation
The project was implemented using the React framework.

Index.js represents the top level object where the Javascript function names are defined and the application model is declared.

MainPage.js is the top level React component called by index.js and accepts the high level model components including the ExpressionArea and FunctionList.

ExpressionArea.js handles the rules for displaying an expression item type that is dropped in the area.

FunctionList.js maps the list of input function names to jsx elements and displays them in a simple div area.

Function.js corresponds to each JS function and enables dragging of the function along with how the function is displayed.

Please see the accompanying readme graphics file for a graphical view of the component hierarchy.

Note: many of the above JS objects have CSS display rules defining display.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
