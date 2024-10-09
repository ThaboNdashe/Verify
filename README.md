# VERIFYNOW

VERIFYNOW is a web application designed to streamline the verification process for users. It allows users to submit their information through a contact form, which is then sent directly to an email address for processing. The application is built using React for the frontend and Node.js with Express for the backend, utilizing Nodemailer for email functionality.

## Features

- User-friendly contact form for verification requests
- Real-time form validation to ensure all required fields are filled out correctly
- Sends verification requests directly to an email address using Nodemailer
- Responsive design for optimal viewing on various devices

## Technologies Used

- **Frontend**: React
- **Backend**: Node.js, Express
- **Email Service**: Nodemailer
- **Styling**: Tailwind CSS (or any other CSS framework you are using)
- **JavaScript**: ES6+

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- A Gmail account (or any other email service that supports SMTP).

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/VERIFYNOW.git
   cd VERIFYNOW
   ```

2. **Set up the backend**:

   - Navigate to the backend directory (if applicable) and install the dependencies:

   ```bash
   cd backend
   npm install
   ```

3. **Create a `.env` file** in the backend directory and add your email credentials:

   ```plaintext
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-email-password-or-app-password
   ```

   **Note**: If you are using Gmail, consider using an [App Password](https://support.google.com/accounts/answer/185201) for better security.

4. **Set up the frontend**:

   - Navigate to the frontend directory (if applicable) and install the dependencies:

   ```bash
   cd frontend
   npm install
   ```

### Running the Application

1. **Start the backend server**:

   ```bash
   cd backend
   node server.js
   ```

   The server will run on `http://localhost:3001`.

2. **Start the frontend application**:

   ```bash
   cd frontend
   npm start
   ```

   The React app will run on `http://localhost:3000`.

3. **Open your browser** and navigate to `http://localhost:3000` to view the application.

## Usage

Fill out the contact form with your details and verification request, then click "Submit." You should receive an email with the submitted information for processing.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Nodemailer](https://nodemailer.com/) for providing a simple way to send emails from Node.js applications.
- [React](https://reactjs.org/) for the powerful front-end library.
- [Express](https://expressjs.com/) for the web framework for Node.js.
