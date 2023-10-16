# React Advanced Course Project

Welcome to the React Advanced Course project! This application was built using React, React Router Dom, React Redux, and React Redux Toolkit. It also includes authentication functionality and is styled using Bootstrap. In this README, you will find instructions on how to set up and use the application.

## Table of Contents

1. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
2. [Usage](#usage)
3. [Features](#features)
4. [Contributing](#contributing)
5. [License](#license)

## Getting Started

### Prerequisites

Before you begin, make sure you have the following software installed on your system:

- [Node.js](https://nodejs.org/) - The runtime environment for running JavaScript applications.
- [Git](https://git-scm.com/) - Version control system for managing project files.

### Installation

Follow these steps to set up the project:

1. Clone the repository to your local machine using Git:

   ```bash
   git clone https://github.com/nailaphilip/countries_bootstrap.git
   ```

2. Navigate to the project directory:

   ```bash
   cd countries_bootstrap
   ```

3. Install project dependencies using npm or yarn:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Create a `.env` file in the project's root directory with the following environment variables:

   ```env
   REACT_APP_OPENWEATHER_KEY=your_openweather_key
   ```

   Replace `your_openweather_key` with the appropriate values for your API setup.

5. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

6. The application will be accessible at [http://localhost:3000](http://localhost:3000).

## Usage

Once the application is up and running, you can start using it. Here are some of the main features and how to use them:

### Authentication

- The application includes user authentication. You can sign up or log in with your credentials.
- Access to certain features or routes may be restricted based on the user's authentication status.

### Navigation

- The React Router Dom is used for navigation. You can explore different routes and pages of the application.
- Here's an example of navigating to a different route within the application:

  ```javascript
  import { Link } from "react-router-dom";

  // Inside your component
  <Link to="/dashboard">Go to Dashboard</Link>;
  ```

### Redux State Management

- Redux and React Redux Toolkit are used for state management in the application.
- You can access and manage application state using Redux. Example:

  ```javascript
  import { useSelector, useDispatch } from "react-redux";

  // Access state
  const someData = useSelector((state) => state.someSlice.someData);

  // Dispatch actions
  const dispatch = useDispatch();
  dispatch(someAction());
  ```

## Features

- List the key features of your application here.
- Include any additional information about the functionality of your app.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
