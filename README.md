Online Book Store Application
Description
The Online Book Store Application is an e-commerce platform built using the MERN stack (MongoDB, Express.js, React, Node.js). It provides users with a seamless experience to browse, search, and purchase books while offering an efficient management interface for administrators.

This application bridges the gap between traditional bookstores and digital convenience, empowering book lovers and administrators alike with a modern, scalable, and user-friendly solution.
Features
For Users
- Secure Authentication: JWT-based login and registration with secure password hashing.
- Book Browsing: Search and filter books by genre, author, and ratings.
- Wishlist & Cart: Save books for future purchases and manage shopping carts.
- Order Tracking: View order history and current status.
For Admins
- Inventory Management: Add, update, or delete book listings.
- Order Management: Monitor and update order statuses.
- User Management: Oversee user accounts.
Technologies Used
- Frontend: React.js
- Backend: Node.js with Express.js
- Database: MongoDB
- Authentication: JSON Web Tokens (JWT)
Installation
Prerequisites
- Node.js (20.x or higher)
- MongoDB (Compass or Atlas)
- Git
Setup Steps
1.	Clone the repository:
   

   git clone https://github.com/Sashong17/Naan_Mudhalvan_MERN_Book_Store.git
   cd Naan_Mudhalvan_MERN_Book_Store
   
2. Install dependencies for both frontend and backend:
   
   cd frontend
   npm install
   cd ../backend
   npm install
   
3. Configure environment variables:
   Create a `.env` file in the backend folder with the following:

   PORT=3001
   MONGO_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>

4. Run the application:
   - Start the frontend:

     cd frontend
     npm start

   - Start the backend:
     
     cd backend
     node index.js
     
Access the application at: `http://localhost:3000`.
Future Enhancements
- AI-driven book recommendations.
- Augmented Reality (AR) features for book previews.
- Subscription-based book delivery services.
License
This project is licensed under the MIT License.






# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
