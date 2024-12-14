

# BlogApp

BlogApp is a simple blogging application that allows users to create, edit, and delete blog posts. It is built with modern web technologies and provides a user-friendly interface for managing blog content.

## Features

- Create, edit, and delete blog posts
- User authentication and authorization
- Responsive design
- Rich text editor for blog content

## Installation

Follow these steps to set up the project on your local machine:

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Appwrite (v0.7 or higher)

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/aniketchawardol/blogapp.git
   cd blogapp
   ```

2. **Install dependencies:**

   ```bash
   npm install @reduxjs/toolkit @tinymce/tinymce-react appwrite html-react-parser react react-dom react-hook-form react-redux react-router-dom
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following variables:

   ```env
   APPWRITE_ENDPOINT=your_appwrite_endpoint
   APPWRITE_PROJECT_ID=your_appwrite_project_id
   APPWRITE_API_KEY=your_appwrite_api_key
   VITE_TINYMCE_KEY=your_api_key_for_TINY_MCE
   ```

4. **Install Tailwind CSS:**

   Install Tailwind CSS and set it up with Vite + React:

   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

   Configure `tailwind.config.js`:

   ```js
   module.exports = {
     content: [
       "./index.html",
       "./src/**/*.{js,jsx,ts,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

   Add the following to your CSS file (e.g., `index.css`):

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

5. **Run the application:**

   ```bash
   npm run dev
   ```

   The application will be available at the URL specified in the console output, typically http://localhost:3000 by default.

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Register a new account or log in with an existing account.
3. Start creating, editing, and deleting blog posts.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## Thankyou 
<a href="https://github.com/hiteshchoudhary">@hiteshchoudhary</a> for the amazing tutorial



