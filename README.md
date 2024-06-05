# Eventify Client

Welcome to the Eventify client-side repository. This is the frontend part of the Eventify project, an event management platform. It is built using React.js with Vite as the build tool, and various libraries such as React Router Dom, JWT for authentication, Recharts for displaying charts, and Firebase for authentication.

## Features

- User authentication using Firebase
- Dashboard with profile editing, event management, and data visualization
- Home page with banners and event previews
- Secure routes with JWT authentication

## Technologies Used

- React.js
- Vite
- React Router Dom
- JWT (JSON Web Tokens)
- Recharts
- Firebase

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
### Installation
1. **Clone the repository:**
   git clone https://github.com/bhabna01/Eventify-client.git
2. **Navigate to the project directory:**
   cd eventify-client
3. **Install the dependencies:**
   npm install  
###  Configuration
1. **Firebase Authentication:**
   Set up Firebase authentication for project and obtain the Firebase configuration details.
2. **Environment Variables:**
- VITE_FIREBASE_API_KEY=your-api-key
- VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
- VITE_FIREBASE_PROJECT_ID=your-project-id
- VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
- VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
- VITE_FIREBASE_APP_ID=your-app-id
### Running the Client
Start the development server:npm run dev
###  Dependencies

- react: JavaScript library for building user interfaces
- react-router-dom: DOM bindings for React Router, allowing navigation within a React application
- jwt-decode: Library for decoding JWT tokens
- recharts: Library for building charts with React
- firebase: Firebase JavaScript SDK for authentication
### Live Clientsite
https://eventify-client-beta.vercel.app
