# To do list using React, Storybook, Chromatic, CI and Plop generator:
- Tooling: I used a few tools I've wanted to try out.  Those are LogRocket, Chromatic (see below) and PlopJs.  I can create logins by request.
- Mobile: The responsiveness can be tested within Storybook for each component. Once running, there is a small icon on the top bar of Storybook to adjust viewport.  
- State management: I used redux/toolkit for state management and handling API responses, it's very compact and streamlined compared to Redux original.
- Design-System: I'm very big on component driven development and design-systems, so I built a simple one into this project using Storybook, Chromatic and NPM. On commit to master new components and changes go to Chromatic for review and visual testing.  Once signed off on and merged, the components from the project are shipped to NPM where they can be used like any NPM package for reuse.  You can visit this link to see the Chromatic system I created for this project. It's fully funcional, do what you like in there.
- Here is this project's [Chromatic](https://chromatic.com/library?appId=60263de1aab4a60023ed8d70&branch=master)
- Here is this project's [Storybook published to Chromatic](https://master--60263de1aab4a60023ed8d70.chromatic.com)   


## Instructions:
CD to endpoint-todo-list directory and run the following terminal commands to run app locally:
1. `yarn` - this installs dependencies
2. `yarn start` - to start the project server, which opens the React app in your browser when ready.
3. `yarn build` - to build for production.
4. `yarn storybook` - to start the Storybook isolated dev environment.  Storybook also works as auto-generated documentation for the components.
5. `yarn generate` - to build a template for component, view or hook.  Example: `yarn generate component ComponentName`  

## Tests:
I wrote some smoke tests, but didn't get to test as much as I'd like due to unexpected project maintenance for my employer. However the "stories" for the Storybook components serve as tests.

## Try Storybook:
You'll notice a "storybook" script in package.json.  Open a terminal to the root of the project, run `yarn storybook` to launch an interactive suite for testing components in isolation. This will open on localhost:6006.  All of the components were developed using Storybook, which is part of the simple design-system I created for this project. The collaborative part of the design-system is Chromatic. 

### Chromatic
Chromatic allows sharing and peer review of UI/UX created in Storybook, but accessible on a public or private URL for colleagues to review and accept, deny or request edits to components.  Here are the chromatic links generated from this project's Storybook components:
- Here is this project's [Chromatic](https://chromatic.com/library?appId=60263de1aab4a60023ed8d70&branch=master)
- Here is this project's [Storybook published to Chromatic](https://master--60263de1aab4a60023ed8d70.chromatic.com)

If cloning and planning to run the entire flow locally, a Chromatic token is required:
- Sign up here (free version is fine): https://www.chromatic.com/start
- Upon signup replace instances of "YOUR_TOKEN_HERE" with your new Chromatic token
- Good to go

# Getting Started with Create React App 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
