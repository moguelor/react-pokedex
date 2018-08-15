# Apply interview yellowme

Yellowme project (pokeapi) interview, to apply frontend developer job [apply-frontend](https://github.com/yellowme/interview/tree/master/front_end).

Get Started
====
Starter kit for react applications, see [react-slingshot](https://github.com/coryhouse/react-slingshot)

1. `npm install`
2. `npm start`

Structure Folder
===

I use a feature pattern.

```bash
.
├── .editorconfig             # Configures editor rules
├── .gitignore                # Tells git which files to ignore
├── .istanbul.yml             # Configure istanbul code coverage
├── .npmrc                    # Configures npm to save exact by default
├── README.md                 # This file.
├── dist                      # Folder where the build script places the built app. Use this in prod.
├── package.json              # Package configuration. The list of 3rd party libraries and utilities
├── src                       # Source code
│   ├── common                # Common code reusable.
│       ├── components        # Reusable react components.
├── pages                     # Each page of applicatión. Is commonly defined by the react/route path.
│   ├── main                  # Main page.
│       ├── components        # Page components.
│           ├── index.js      # Point entry for expose all components by page.
│       ├── actions.js        # Flux/Redux actions. List of distinct actions that can occur in the app.
│       ├── actionTypes.js    # Redux constants.
│       ├── constants.js      # Application constants including constants for Redux.
│       ├── Container.js      # Top-level React components that interact with Redux.
│       ├── index.js          # Point entry for expose the content of page (actions, actionTypes, etc).
│       ├── reducer.js        # Redux reducers. Your state is altered here based on actions.
│       ├── selectors.js      # Selectors for redux.
│   ├── favicon.ico           # favicon to keep your browser from throwing a 404 during dev. Not actually used in prod build.
│   ├── index.ejs             # Template for homepage
│   ├── index.js              # Entry point for your app
│   ├── store                 # Redux store configuration
├── tools                     # Node scripts that run build related tools
│   └── analyzeBundle.js      # Analyzes the webpack bundle
│   ├── assetsTransformer.js  # Fix for jest handling static assets like imported images
│   ├── setup                 # Scripts for setting up a new project using React Slingshot
│   │   ├── setup.js          # Configure project set up
│   │   ├── setupMessage.js   # Display message when beginning set up
│   │   └── setupPrompts.js   # Configure prompts for set up
│   ├── build.js              # Runs the production build
│   ├── chalkConfig.js        # Centralized configuration for chalk (adds color to console statements)
│   ├── distServer.js         # Starts webserver and opens final built app that's in dist in your default browser
│   ├── nodeVersionCheck.js   # Confirm supported Node version is installed
│   ├── removeDemo.js         # Remove demo app
│   ├── srcServer.js          # Starts dev webserver with hot reloading and opens your app in your default browser
│   ├── startMessage.js       # Display message when development build starts
│   ├── testCi.js             # Configure Jest to run on a CI server
├── webpack.config.dev.js     # Configures webpack for development builds
└── webpack.config.prod.js    # Configures webpack for production builds
```

Technologies
===
[react-slignshot](https://github.com/coryhouse/react-slingshot) Starter kit for projects in react fully of good practices.


