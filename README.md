# React + TypeScript Project

This is a starter template for a React project bootstrapped with Vite and configured to use TypeScript. It follows a scalable folder structure for organizing components, hooks, services, and more.

## Project Structure

Here is an overview of the key files and folders in this project:

```
.
├── public/
│   └── vite.svg        # Static assets placed here are served as-is
├── src/
│   ├── assets/         # Module assets (images, fonts, etc.)
│   ├── components/     # Reusable React components (e.g., Button, Modal)
│   ├── hooks/          # Custom React hooks (e.g., useFetch, useLocalStorage)
│   ├── pages/          # Page-level components (e.g., HomePage, ProfilePage)
│   ├── services/       # API calls, external service logic (e.g., api.ts)
│   ├── styles/         # Global styles, variables, mixins (e.g., main.scss)
│   ├── types/          # Global TypeScript types and interfaces (e.g., index.d.ts)
│   ├── utils/          # Utility functions (e.g., formatters, validators)
│   ├── App.tsx         # Main application component (handles routing)
│   ├── main.tsx        # Entry point for the React application
│   ├── index.css       # Global stylesheet (often imports from /styles)
│   └── vite-env.d.ts   # TypeScript definitions for Vite
├── .gitignore          # Files and folders to be ignored by Git
├── eslint.config.js    # ESLint configuration
├── index.html          # The HTML template entry point
├── package.json        # Project metadata and dependencies
├── README.md           # This file
├── tsconfig.json       # Base TypeScript configuration
├── tsconfig.app.json   # TypeScript configuration for the application
├── tsconfig.node.json  # TypeScript configuration for Node.js scripts (like vite.config.ts)
└── vite.config.ts      # Vite build tool configuration
```

## Key Folders & Files

* public/: Contains static assets that don't need to be processed by the build tool. Files here are copied to the root of the dist folder on build.

* src/: Contains all the application's source code. This is where you'll spend most of your time.

* main.tsx: The main entry point of the application. It finds the root DOM element and renders the <App /> component into it.

* App.tsx: The root React component for the application. Often used for setting up routing.

* assets/: A folder for assets like images, fonts, and SVGs that are imported directly into your components or CSS.

* components/: Contains reusable UI components. These are typically "dumb" components that receive props and render UI (e.g., Button.tsx, Card.tsx).

* hooks/: For custom React hooks that encapsulate reusable stateful logic (e.g., useApi.ts, useTheme.ts).

* pages/: Contains top-level components that represent a page or view in your application (e.g., HomePage.tsx, UserSettingsPage.tsx). These components often compose smaller components from the components/ directory.

* services/: Used for abstracting logic that communicates with external resources, like backend APIs. (e.g., apiClient.ts, userService.ts).

* styles/: Holds global styles, CSS variables, SASS/LESS mixins, or theme definitions.

* types/: For defining shared TypeScript types and interfaces that are used across the application (e.g., user.types.ts, api.types.ts).

* utils/: A place for pure helper functions that can be reused anywhere, such as date formatters, validators, or calculation helpers.

* index.html: The main HTML page for your single-page application (SPA). Vite injects your scripts into this file.

* vite.config.ts: Configuration file for Vite. You can configure plugins, server options, build options, etc.

* tsconfig.json / tsconfig.app.json: TypeScript configuration files that define how the compiler should check your code.
