# Firebase DataConnect Quickstart

## Introduction

This repository is a slight adaption of the Google codelab for Firebase to follow along for the GDGoC UTCN presentation, link here:

https://firebase.google.com/codelabs/firebase-dataconnect-web#0

This codelab is a sample app for the preview version of the Firebase DataConnect.
This service is currently in Private Preview at no cost for a limited time. Sign up for the program at [Firebase Data Connect](https://firebase.google.com/products/data-connect).
This quickstart will not work if you don't have access to the preview.

## Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (v18 or higher recommended) - [Download here](https://nodejs.org/)

  - This includes `npm` (Node Package Manager) which is required for installing dependencies
  - Verify installation: `node --version` and `npm --version`

- **Git** - [Download here](https://git-scm.com/downloads)

  - Required for cloning the repository
  - Verify installation: `git --version`

- **Firebase Account** - Sign up at [Firebase Console](https://console.firebase.google.com/)

  - Access to Firebase Data Connect preview (currently in Private Preview)
  - A Firebase project with Blaze plan enabled

- **VS Code** (Optional but recommended) - [Download here](https://code.visualstudio.com/)
  - For running queries/mutations and deploying with the Firebase extension

# Getting Started with Firebase Data Connect

---

Follow these steps to get up and running with Firebase Data Connect. For more detailed instructions, check out the [official documentation](https://firebase.google.com/docs/data-connect/quickstart).

### 1. Create a New Data Connect Service and Cloud SQL Instance

1. Open [Firebase Data Connect](https://console.firebase.google.com/u/0/project/_/dataconnect) in your project in Firebase Console and select Get Started.
2. Create a new Data Connect service and a Cloud SQL instance. Ensure the Blaze plan is active. Pricing details can be found at [Firebase Pricing](https://firebase.google.com/pricing).
3. Select your server region.
4. Allow some time for the Cloud SQL instance to be provisioned. After it's provisioned, the instance can be managed in the [Cloud Console](https://pantheon.google.com/sql).

### 2. Set Up Firebase CLI

Ensure the Firebase CLI is installed and up to date:

```bash
npm install -g firebase-tools
```

### 3. Cloning the repository

This repository contains the quickstart to get started with the functionalities of Data Connect.

1. Clone this repository to your local machine:
   ```bash
   git clone <repository-url>
   cd codelab-dataconnect-web
   ```
2. Initialize your Firebase project with `firebase init dataconnect`. Overwrite only dataconnect.yaml when prompted, do not overwrite any other dataconnect files.
   (Optional): If you intend on using other Firebase features, run `firebase init` instead, and select both DataConnect options as well as any feature you intend to use.
3. Set up environment variables:
   - Copy `app/.env.example` to `app/.env` and fill in your Firebase configuration values.
   - Copy `dataconnect/.env.example` to `dataconnect/.env` and fill in your Data Connect configuration values (serviceId, location, database, instanceId).
   - Run `cd dataconnect && npm install` to install dependencies.
   - Run `cd dataconnect && npm run generate-config` to generate `dataconnect.yaml` from your `.env` file.
4. Allow domains for Firebase Auth in your [project console](https://console.firebase.google.com/project/_/authentication/settings) (e.g. http://127.0.0.1).

### 4. Running queries and mutations in VS Code

The VSCode Firebase Extension allows you to generate Firebase Data Connect SDK code, run queries/mutations, and deploy Firebase Data Connect with a click. Alternatively, see below for CLI commands.

1. Install [VS Code](https://code.visualstudio.com/).
2. Download the [Firebase extension](https://firebasestorage.googleapis.com/v0/b/firemat-preview-drop/o/vsix%2Ffirebase-vscode-latest.vsix?alt=media) and [install](https://code.visualstudio.com/docs/editor/extension-marketplace#_install-an-extension) it.
3. Open this quickstart in VS code, and in the left pane of the Firebase extension, and log in with your Firebase account.
   (Optional): If your Firebase project was not initialized in the last section, you can click `Run firebase init` and select `Data Connect` to initialize.
4. Click on deploy to deploy your schema to your cloud SQL instance. Or run `firebase deploy --only dataconnect`.
5. Running the VSCode extension should automatically start the DataConnect emulators. If you see an emulators error, try running `firebase emulators:start dataconnect` manually.

Now you should be able to deploy your schema, run mutations/queries, generate SDK code, and view your application locally.

### 5. Populating the database

1. Run `1_movie_insert.gql`, `2_actor_insert.gql`, `3_movie_actor_insert.gql`, and `4_user_favorites_review_insert.gql` files in the `./dataconnect` directory in order using the VS code extension,

### 6. Running the app

1. Install app dependencies:

   ```bash
   cd app
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`

3. (Optional): To use Firebase emulators locally, in a separate terminal run:
   ```bash
   firebase emulators:start
   ```
   The app will automatically connect to emulators when running in development mode.

## License

© Google, 2024. Licensed under an [Apache-2](../../LICENSE) license.
