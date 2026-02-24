# Movie_App

## Description

A web application for managing movies with an advanced filtering system. Users can create an account, search for movies by actor, year, and genre, and save their favorite films. They can also add reviews to movies and give them scores.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [License](#license)

---

## Features

- **User Authentication** — Create an account and log in securely via Firebase Authentication.
- **Movie Browsing** — Browse the full movie catalog from the home page.
- **Movie Details** — View detailed information about each film including cast, release year, and genre.
- **Advanced Filtering** — Filter movies by actor name, release year, and genre simultaneously.
- **Reviews and Ratings** — Authenticated users can post reviews and assign a score to any movie.
- **Favorites** — Save movies to a personal favorites list for quick access later.
- **User Profile** — View all submitted reviews and saved favorites in one place.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | TypeScript, JavaScript, HTML, CSS |
| Backend / Database | Firebase (Firestore / Data Connect) |
| Authentication | Firebase Authentication |
| Hosting | Firebase Hosting |

Language breakdown: TypeScript (66%), JavaScript (30%), CSS (2.4%), HTML (1.4%)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [Firebase CLI](https://firebase.google.com/docs/cli) — install with `npm install -g firebase-tools`
- A Firebase project with Firestore and Authentication enabled

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/Adriana46Z/Movie_app--Firebase.git
   cd Movie_app--Firebase
   ```

2. Install dependencies

   ```bash
   cd app
   npm install
   ```

3. Configure Firebase

   Create a `.env` file with your Firebase project credentials:

   ```
   FIREBASE_API_KEY=your_api_key
   FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   FIREBASE_PROJECT_ID=your_project_id
   FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   FIREBASE_APP_ID=your_app_id
   ```

4. Start the development server

   ```bash
   npm run dev
   ```

5. Deploy to Firebase Hosting (optional)

   ```bash
   firebase deploy
   ```

---

## Project Structure

```
Movie_app--Firebase/
├── app/                  # Main application source code
│   ├── src/              # TypeScript/JavaScript source files
│   └── ...
├── dataconnect/          # Firebase Data Connect configuration
├── firebase.json         # Firebase project configuration
├── .gitignore
├── CONTRIBUTING.md
├── LICENSE               # Apache-2.0
└── README.md
```

---

## Screenshots

### 1. Home Page

<img width="1920" height="1043" alt="image" src="https://github.com/user-attachments/assets/9f0227ce-2883-4acf-a97c-d539e0f06668" />

### 2. Movie Details

<img width="1920" height="1018" alt="image" src="https://github.com/user-attachments/assets/4d9c9a57-e1ad-4724-ac88-3a1b3176b775" />

### 3. Reviews

<img width="1910" height="746" alt="image" src="https://github.com/user-attachments/assets/58d874f9-5246-4c2a-91c2-9c5871f0b7ac" />

### 4. Advanced Filtering

<img width="1920" height="931" alt="image" src="https://github.com/user-attachments/assets/81cb2046-0444-43fc-b994-9eaf73d31e50" />

### 5. User Profile

<img width="1915" height="940" alt="image" src="https://github.com/user-attachments/assets/7d289b3a-b651-451c-8aa2-88c89bc2d4a6" />

---

## Contributing

Contributions are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to get started.

---

## License

This project is licensed under the [Apache-2.0 License](LICENSE).
