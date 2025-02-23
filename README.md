# My React Portfolio
[![Deploy on Vercel](https://img.shields.io/badge/Live%20Demo-Vercel-blue)](https://my-portfolio-swart-five-82.vercel.app/)
Welcome to my portfolio! This project showcases my skills and experience in web development and design. It includes various sections that highlight my professional background, projects, and ways to connect with me.

## 🚀 Features

- **Navigation Bar**: A sleek and responsive nav bar.
- **Hero Section**: A visually appealing introduction to capture attention.
- **About Us**: Information about who I am and what I do.
- **Experience**: A detailed overview of my professional journey.
- **Technologies**: The tech stack and tools I work with.
- **Projects**: Showcase of my key projects.
- **Contact Us**: A section for getting in touch with me.
- **Social Links**: Includes links to my GitHub, LeetCode, LinkedIn, and more.
- **Animations**: Smooth and engaging animations using FramerMotion.

## 🛠️ Built With

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that provides a fast development environment.
- **FramerMotion**: A library for creating animations and interactions.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.

## 📨 Setting Up the Contact Form

This portfolio uses **EmailJS** for the contact form functionality. Follow these steps to set it up:

1. **Create an Account on EmailJS**:
   - Go to [EmailJS](https://www.emailjs.com) and sign up for an account.

2. **Create a Template**:
   - After signing in, create a new email template under the "Email Templates" section.

3. **Create a Service**:
   - Set up a new service under the "Email Services" section. Connect it to your email provider.

4. **Get Your IDs**:
   - Obtain your **Service ID**, **Template ID**, and **Public Key** from EmailJS.

5. **Update the Code**:
   - Navigate to `components/Contacts.jsx` in the project and locate **line 56**. Update the parameters of `emailjs.send()` with your IDs to make the form work.
  
### Steps to Run the Project

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/mern-hotel-management.git
   cd mern-hotel-management
   
2. Install dependencies for frontend:
   ```sh
   cd /frontend
   npm install
   
3. Start the frontend:
   ```sh
   cd frontend
   npm run dev
   ```
6. Open the application in your browser:
   ```
   http://localhost:3000
   ```
## Contact
For any queries, feel free to reach out:
- **Email:** hadiyal123vvv@gmail.com
- **LinkedIn:** [Vishal Hadiyal](https://www.linkedin.com/in/vishal-hadiyal/)
