# Cocktail Order Project

## Overview
The Cocktail Order project is a web application that allows users to order cocktails online. It consists of a frontend application built with HTML, CSS, and JavaScript, and a backend server built with Node.js and Express.

## Project Structure
The project is organized into two main directories: `frontend` and `backend`.

### Frontend
- **index.html**: The main HTML document for the frontend application.
- **scripts/main.js**: JavaScript code that handles user interactions and communicates with the backend.
- **styles/main.css**: CSS styles that define the layout and appearance of the application.
- **assets/cocktails/**: Directory containing images of cocktails, including:
  - mojito.png
  - pina-colada.png
  - Additional cocktail images.
- **logo.png**: The logo image for the application.

### Backend
- **app.js**: The entry point of the backend application, setting up the Express server and middleware.
- **routes/orderRoutes.js**: Defines routes related to cocktail orders.
- **controllers/orderController.js**: Contains methods for processing orders.
- **services/pushService.js**: Handles notifications or messaging related to orders.
- **.env**: Contains environment variables for the backend application.
- **package.json**: Configuration file for npm, listing dependencies and scripts.

## Setup Instructions
1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd cocktail-order
   ```

2. **Frontend Setup**:
   - Navigate to the `frontend` directory.
   - Open `index.html` in a web browser to view the application.

3. **Backend Setup**:
   - Navigate to the `backend` directory.
   - Install dependencies:
     ```
     npm install
     ```
   - Create a `.env` file with the necessary environment variables.
   - Start the server:
     ```
     node app.js
     ```

## Usage
- Access the frontend application through your web browser.
- Use the interface to select and order cocktails.
- The backend will handle the order processing and notifications.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License.