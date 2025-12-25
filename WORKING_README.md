# Firebase DataConnect Quickstart - Working Guide

## Introduction

This is a working guide for setting up the Firebase DataConnect project. This service is currently in **Private Preview at no cost** for a limited time.

## Prerequisites

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **Git** - [Download here](https://git-scm.com/downloads)
- **Firebase Account** - Sign up at [Firebase Console](https://console.firebase.google.com/)
- **Firebase Data Connect Preview Access** - Sign up at [Firebase Data Connect](https://firebase.google.com/products/data-connect)
- **VS Code** (Recommended) - [Download here](https://code.visualstudio.com/)

---

## Step-by-Step Setup Guide

### 1. Create Firebase Project and Data Connect Service

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select an existing one
3. Enable Blaze plan (Data Connect is free during preview, but requires Blaze plan)
4. Navigate to [Firebase Data Connect](https://console.firebase.google.com/project/_/dataconnect)
5. Click "Get Started"
6. Create a new Data Connect service and Cloud SQL instance
7. Select your server region (e.g., europe-central2, us-central1)
8. Wait for the Cloud SQL instance to be provisioned

### 2. Clone and Initialize the Project

```bash
# Clone the repository
git clone <repository-url>
cd gdg-firebase-data-connect

# Install Firebase CLI globally
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase Data Connect
firebase init dataconnect
```

**During `firebase init dataconnect`:**
- Select your Firebase project
- Select your existing Data Connect service
- When prompted to overwrite files, say **Yes** to `dataconnect.yaml` only
- Say **No** to all other files

### 3. Configure Environment Variables

#### 3.1 Get Firebase Configuration

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click the gear icon  → **Project settings**
3. Scroll to "Your apps" section
4. If no web app exists, click "Add app" → select Web (</> icon)
5. Copy your Firebase configuration values

#### 3.2 Create `app/.env` file

Copy the configuration values into `app/.env`:

```env
VITE_FIREBASE_API_KEY=your-api-key-here
VITE_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project-id.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
VITE_FIREBASE_MEASUREMENT_ID=your-measurement-id
```

#### 3.3 Create `dataconnect/.env` file

Get these values from [Firebase Data Connect Console](https://console.firebase.google.com/project/_/dataconnect):

```env
DATACONNECT_SERVICE_ID=your-service-id
DATACONNECT_LOCATION=europe-central2
DATACONNECT_DATABASE=your-database-name
DATACONNECT_INSTANCE_ID=your-instance-id
```

#### 3.4 Generate dataconnect.yaml

```bash
cd dataconnect
npm install
npm run generate-config
cd ..
```

### 4. Allow Authentication Domains

1. Go to [Firebase Console Authentication Settings](https://console.firebase.google.com/project/_/authentication/settings)
2. Scroll to "Authorized domains"
3. Add `127.0.0.1` and `localhost`
4. Click "Add"

### 5. Uncomment Schema Definitions

The schema file needs to be uncommented:

**File: `dataconnect/schema/schema.gql`**

Uncomment all type definitions (remove the `#` at the start of lines):
- `type Movie @table { ... }`
- `type MovieMetadata @table { ... }`
- `type Actor @table { ... }`
- `type MovieActor @table { ... }`
- `type User @table { ... }`
- `type FavoriteMovie @table { ... }`
- `type Review @table { ... }`

### 6. Migrate Database Schema

```bash
# Migrate the database to match the schema
firebase dataconnect:sql:migrate
```

This will create all necessary tables in your Cloud SQL database.

### 7. Deploy Schema and Connectors

```bash
# Deploy the schema to Firebase Data Connect
firebase deploy --only dataconnect --force
```

The `--force` flag acknowledges the public operations (required for first deployment).

### 8. Uncomment Queries and Mutations

**File: `dataconnect/movie-connector/queries.gql`**

Uncomment these queries:
- `query ListMovies(...) { ... }`
- `query GetMovieById(...) { ... }`
- `query GetActorById(...) { ... }`
- `query GetCurrentUser(...) { ... }`
- `query GetIfFavoritedMovie(...) { ... }`
- `query SearchAll(...) { ... }`

**File: `dataconnect/movie-connector/mutations.gql`**

Uncomment these mutations:
- `mutation UpsertUser(...) { ... }`
- `mutation AddFavoritedMovie(...) { ... }`
- `mutation DeleteFavoritedMovie(...) { ... }`
- `mutation AddReview(...) { ... }`
- `mutation DeleteReview(...) { ... }`

### 9. Deploy Updated Queries and Mutations

```bash
firebase deploy --only dataconnect --force
```

### 10. Generate SDK

```bash
# Generate the TypeScript SDK for your app
firebase dataconnect:sdk:generate
```

This creates the SDK files in `app/src/lib/dataconnect-sdk/`

### 11. Uncomment Application Code

**File: `app/src/lib/MovieService.tsx`**

Uncomment all imports at the top:
```typescript
import { listMovies, ListMoviesData, OrderDirection } from "@movie/dataconnect";
import { getMovieById } from "@movie/dataconnect";
import { GetActorByIdData, getActorById } from "@movie/dataconnect";
import { upsertUser } from "@movie/dataconnect";
import { getCurrentUser, GetCurrentUserData } from "@movie/dataconnect";
import { addFavoritedMovie, deleteFavoritedMovie, getIfFavoritedMovie } from "@movie/dataconnect";
import { addReview, deleteReview } from "@movie/dataconnect";
import { searchAll, SearchAllData } from "@movie/dataconnect";
```

Uncomment all function implementations (remove the `//` from the function bodies).

### 12. Populate Database with Sample Data

Using the Firebase VS Code Extension:

1. Install the [Firebase VS Code Extension](https://marketplace.visualstudio.com/items?itemName=firebase.firebase-vscode)
2. Open `dataconnect/moviedata_insert.gql` in VS Code
3. Click "Run (local)" or "Run (production)" button above the mutation
4. Wait for the mutation to complete successfully

**OR** use the Firebase console to run the mutation manually.

### 13. Start the Emulators

```bash
# Start Firebase emulators (Auth and Data Connect)
firebase emulators:start
```

This will start:
- **Emulator UI**: http://127.0.0.1:4000/
- **Authentication**: 127.0.0.1:9099
- **Data Connect**: 127.0.0.1:9399
- **Hosting**: http://127.0.0.1:5059

### 14. Install App Dependencies and Start Development Server

In a **new terminal** (keep emulators running):

```bash
cd app
npm install
npm run dev
```

The app will be available at **http://localhost:5173**

---

## Common Issues

### Movies not displaying
- Check browser console for errors
- Verify emulators are running (`firebase emulators:start`)
- Verify the app is connecting to emulators (check `app/src/lib/firebase.tsx`)
- Ensure database was populated (run `moviedata_insert.gql`)

### Authentication errors
- Verify `127.0.0.1` is in authorized domains
- Check that emulators are running
- Clear browser cache and cookies

### SDK import errors
- Run `firebase dataconnect:sdk:generate` again
- Check that queries/mutations are uncommented
- Restart the dev server (`npm run dev`)


## Using in Production

1. **Deploy Data Connect schema:**
   ```bash
   firebase deploy --only dataconnect --force
   ```

2. **Run the insert mutation against production** (via Firebase console or VS Code extension with "Run (production)")

3. **Build and deploy the app:**
   ```bash
   cd app
   npm run build
   firebase deploy --only hosting
   ```



