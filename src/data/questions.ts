import type { Question } from "../types/quiz";

const questions: Question[] = [
  {
    id: 1,
    question: "What does `git clone` do?",
    options: [
      "Creates a new branch",
      "Deletes a repository",
      "Downloads a repository from GitHub to your machine",
      "Uploads your code to GitHub",
    ],
    correctAnswer: 2,
    category: "git",
    explanation:
      "git clone creates a local copy of a remote repository, including its full commit history.",
  },
  {
    id: 2,
    question: "What does `git status` show you?",
    options: [
      "Which files are modified, staged, or untracked in your working directory",
      "A list of all past commits",
      "The remote URL of your repository",
      "Your GitHub username",
    ],
    correctAnswer: 0,
    category: "git",
    explanation:
      "git status is the command you run constantly to check what's changed before staging or committing.",
  },
  {
    id: 3,
    question: "What does `git add .` do?",
    options: [
      "Commits all changes",
      "Pushes changes to GitHub",
      "Stages all changed files in the current directory for the next commit",
      "Creates a new file called '.'",
    ],
    correctAnswer: 2,
    category: "git",
    explanation:
      "git add . stages everything that's changed so it will be included in your next git commit.",
  },
  {
    id: 4,
    question: "What does `git commit -m \"message\"` do?",
    options: [
      "Creates new branch",
      "Saves your staged changes as a new snapshot in the repo's history, with a message describing them",
      "Uploads your code to GitHub",
      "Deletes the staging area",
    ],
    correctAnswer: 1,
    category: "git",
    explanation:
      "A commit is a saved snapshot of staged changes; -m lets you attach a message directly instead of opening an editor.",
  },
  {
    id: 5,
    question: "What does `git checkout -b quiz` do?",
    options: [
      "Deletes the quiz branch",
      "Merges quiz into master",
      "Switches to a branch called quiz that already exists",
      "Creates a new branch called quiz and switches to it immediately",
    ],
    correctAnswer: 3,
    category: "git",
    explanation:
      "The -b flag tells checkout to create the branch first, then switch to it in one step.",
  },
  {
    id: 6,
    question: "What does `git push -u origin quiz` do?",
    options: [
      "Merges quiz into master remotely",
      "Deletes the quiz branch on GitHub",
      "Pushes your local quiz branch to GitHub and links it for future pushes",
      "Downloads the quiz branch from GitHub",
    ],
    correctAnswer: 2,
    category: "git",
    explanation:
      "-u (--set-upstream) links your local branch to the remote one, so future git push commands on this branch don't need extra arguments.",
  },
  {
    id: 7,
    question: "What triggers a React component to re-render?",
    options: [
      "Writing a comment in the code",
      "Saving the file",
      "Refreshing the browser manually",
      "State or props changing",
    ],
    correctAnswer: 3,
    category: "react",
    explanation:
      "React re-renders a component whenever its state changes or the props passed to it change.",
  },
  {
    id: 8,
    question: "What is a 'prop' in React?",
    options: [
      "Data passed from a parent component to a child component",
      "A CSS property",
      "A built-in HTML tag",
      "A type of hook",
    ],
    correctAnswer: 0,
    category: "react",
    explanation:
      "Props are read-only inputs passed into a component from its parent, similar to function arguments.",
  },
  {
    id: 9,
    question: "In TypeScript, what does `interface Question { id: number }` define?",
    options: [
      "A CSS class",
      "A React component",
      "A shape that an object must follow, with a numeric id field",
      "A function",
    ],
    correctAnswer: 2,
    category: "typescript",
    explanation:
      "An interface describes the required shape of an object — here, any Question object must have a numeric id property.",
  },
  {
    id: 10,
    question: "What does `string[]` mean in TypeScript?",
    options: [
      "A string with a fixed length",
      "A single string",
      "An array of strings",
      "A string that can be null",
    ],
    correctAnswer: 2,
    category: "typescript",
    explanation:
      "Square brackets after a type indicate an array of that type — string[] is an array of string values.",
  },
  {
    id: 11,
    question: "What is a union type in TypeScript, e.g. `\"git\" | \"react\"`?",
    options: [
      "A type that combines two objects into one",
      "A way to import two modules at once",
      "A type only used for numbers",
      "A value that must be exactly one of the listed options",
    ],
    correctAnswer: 3,
    category: "typescript",
    explanation:
      "A union type restricts a value to one of a fixed set of options, which is why misspelling a category shows an error.",
  },
  {
    id: 12,
    question: "What package manager command installs project dependencies listed in package.json?",
    options: [
      "npm start",
      "npm build",
      "npm install",
      "npm run dev"
    ],
    correctAnswer: 2,
    category: "tooling",
    explanation:
      "npm install reads package.json and downloads all listed dependencies into node_modules.",
  },
  {
    id: 13,
    question: "What is Vite primarily used for in this project?",
    options: [
      "Styling components",
      "Writing unit tests",
      "A fast development server and build tool for frontend projects",
      "Managing Git branches",
    ],
    correctAnswer: 2,
    category: "tooling",
    explanation:
      "Vite provides a fast local dev server with instant updates and bundles the app for production.",
  },
  {
    id: 14,
    question: "What is ESLint used for?",
    options: [
      "Catching code style issues and potential bugs automatically",
      "Compiling TypeScript to JavaScript",
      "Managing environment variables",
      "Deploying the app",
    ],
    correctAnswer: 0,
    category: "tooling",
    explanation:
      "ESLint analyzes your code for problematic patterns and style issues without actually running it.",
  },
  {
    id: 15,
    question: "What does 'deploying' an app mean?",
    options: [
      "Running tests locally",
      "Deleting old code",
      "Making the app publicly accessible on the internet",
      "Writing the first line of code",
    ],
    correctAnswer: 2,
    category: "deployment",
    explanation:
      "Deployment is the process of publishing your app to a server so others can access it via a URL.",
  },
  {
    id: 16,
    question: "What is Vercel commonly used for?",
    options: [
      "Managing DNS only",
      "Writing SQL queries",
      "Version control",
      "Hosting and deploying frontend web apps",
    ],
    correctAnswer: 3,
    category: "deployment",
    explanation:
      "Vercel is a hosting platform that builds and deploys frontend projects directly from a Git repository.",
  },
  {
    id: 17,
    question: "What does `npm run build` typically produce?",
    options: [
      "A backup of node_modules",
      "An optimized, production-ready version of your app",
      "A test report",
      "A new Git branch",
    ],
    correctAnswer: 1,
    category: "deployment",
    explanation:
      "The build command compiles and optimizes your app into static files ready to be deployed to a server.",
  },
  {
    id: 18,
    question: "What does the CSS property `display: flex` do?",
    options: [
      "Changes text color",
      "Adds a border",
      "Hides an element",
      "Turns an element into a flexible layout container for its children",
    ],
    correctAnswer: 3,
    category: "html-css",
    explanation:
      "display: flex makes an element a flex container, making it easy to align and distribute its children.",
  },
  {
    id: 19,
    question: "What is the purpose of the `<div>` element in HTML?",
    options: [
      "It defines a table row",
      "It's a generic block-level container with no inherent meaning",
      "It plays audio",
      "It creates a hyperlink",
    ],
    correctAnswer: 1,
    category: "html-css",
    explanation:
      "A div is a generic container used to group content for styling or layout purposes; it carries no semantic meaning on its own.",
  },
  {
    id: 20,
    question: "What does the CSS `className` attribute do in a React component (JSX)?",
    options: [
      "Names the component itself",
      "Sets inline styles directly",
      "Applies a CSS class to the element (JSX's version of HTML's `class`)",
      "Sets the element's id",
    ],
    correctAnswer: 2,
    category: "html-css",
    explanation:
      "JSX uses className instead of class because class is a reserved word in JavaScript.",
  },
];

export default questions;