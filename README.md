# Notes App

<a href="https://danial-notes-app.vercel.app/" target="_blank"><img src="https://github.com/Danielkhakbaz/Danielo-Portfolio/blob/master/public/images/projects/notes-app/screen-shot.png" alt="The screen-shot of the notes app" /></a>

A simple, elegant Notes application built with [Next.js](https://nextjs.org/), providing a smooth and interactive user experience for managing notes. This app utilizes modern frontend technologies like Tailwind CSS and DaisyUI for styling and React Icons for visual consistency.

## Project Overview

The Notes App is designed for users who want a simple yet effective way to organize their notes. With a responsive interface, this app works well on both desktop and mobile devices.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Development Scripts](#development-scripts)
- [Folder Structure](#folder-structure)

## Features

- **Create, Edit, and Delete Notes**: Full CRUD functionality for managing notes.
- **Unique Identifiers**: Each note has a unique ID, powered by `uuid`.
- **Responsive Design**: Adapts seamlessly to any screen size.
- **DaisyUI**: Simplifies component styling with Tailwind integration.
- **Linting and Formatting**: Ensures consistent code style with ESLint and Prettier.

## Technologies Used

- **[Next.js](https://nextjs.org/)** - Framework for React with server-side rendering and static generation.
- **[React](https://reactjs.org/)** - JavaScript library for building user interfaces.
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework.
- **[DaisyUI](https://daisyui.com/)** - Tailwind CSS components library for rapid UI development.
- **[React Icons](https://react-icons.github.io/react-icons/)** - Popular icons for React applications.
- **[uuid](https://www.npmjs.com/package/uuid)** - Generates unique identifiers.
- **[Husky](https://typicode.github.io/husky/)** - Git hooks for automated workflows.

## Folder Structure

Here's an overview of the project structure:

```plaintext
notes-app/
├── public/                    
├── app/                       
│   ├── components/            # Reusable components
│   ├── notes/                 # Notes page with all its components
│   └── styles/                # Global CSS and Tailwind configurations
│
├── .eslintrc.json             # ESLint configuration for code quality
├── .prettierrc                # Prettier configuration for code formatting
├── next.config.js             # Next.js configuration
├── package.json               # Project metadata, scripts, and dependencies
└── README.md                  # Project documentation
```

## Installation

To set up this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Danielkhakbaz/Notes-App
   cd danielo-portfolio

2. **Install dependencies**:
   ```tsx
   yarn

3. **Run the development server**:
   ```tsx
   yarn dev

4. **Open http://localhost:3000 in your browser to see the project**.

## Development Scripts

Here are some helpful scripts to assist in the development and maintenance of this project:

```dev```: Runs the app in development mode. <br/><br/>
```build```: Compiles the app for production. <br/><br/>
```start```: Starts the production server. <br/><br/>
```lint```: Lints and fixes files using ESLint. <br/><br/>
```fix```: Formats files using Prettier. <br/><br/>
```check-prettier```: Checks the code format without making changes.
