# My React Portfolio

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

---

## 🤝 Contributions

I welcome contributions from fellow developers! Here's how you can contribute:

1. **Fork the Repository**: Click the 'Fork' button at the top right of the repository page to create a copy in your GitHub account.
2. **Clone the Repository**: Clone the forked repository to your local machine using:
    ```bash
    git clone https://github.com/thegeek36/My-React-Portfolio.git
    ```
3. **Create a Branch**: Create a new branch for your feature or bug fix:
    ```bash
    git checkout -b feature/your-feature-name
    ```
4. **Make Changes**: Make your changes and commit them with a clear message:
    ```bash
    git commit -m "Add your message here"
    ```
5. **Push to GitHub**: Push your changes to your GitHub repository:
    ```bash
    git push origin feature/your-feature-name
    ```
6. **Create a Pull Request**: Go to the original repository and create a new pull request to merge your changes.

## 🛠️ Usage

To get started with this portfolio:

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/thegeek36/My-React-Portfolio.git
    ```
2. **Navigate to the Project Directory**:
    ```bash
    cd My-React-Portfolio
    ```
3. **Install Dependencies**:
    ```bash
    npm install
    ```
4. **Start the Development Server**:
    ```bash
    npm run dev
    ```
5. **Open Your Browser**: Go to `http://localhost:3000` to view the portfolio.

---

