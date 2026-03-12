# Backend-for-Frontend (BFF) Architecture

## **Project Overview**

**`backend-for-frontend`** is a architecture project structured to implement the **Backend-for-Frontend (BFF)** pattern. This architecture is designed to support separate backends for different frontend clients (web, mobile, etc.), ensuring tailored responses and performance optimization.

This monorepo manages:
- **Web frontend** (`frontend/web`)
- **Mobile frontend** (`frontend/mobileApp`)
- **Web BFF** (`backend/web-bff`)
- **Mobile BFF** (`backend/mobile-bff`)
- **Shared services** (`backend/shared`)

---

## **Setup Instructions**

### 1. Prerequisites
Make sure the following are installed:
- **Node.js** (>= 18.x)
- **Yarn** (1.22.x)
- **Make** (for running commands)

---

### 2. Install Dependencies

Project Clone:
```bash
git clone https://github.com/julianab16/bff-architecture-example.git
cd bff-architecture-example/
   ```
Run the following command to install yarn and dependencies for all projects:
```bash
npm install --global yarn
yarn install:all
```
- Run `yarn add concurrently -D` or `yarn add concurrently --dev`

which installs dependencies for each subproject (web, mobile, shared, etc.).

---

## 🛠 **Development**

### Start All Services

#### 1. Backend Services
```bash
yarn start:backend
```
It starts:
- `shared`
- `web-bff`
- `mobile-bff`

#### 2. Frontend Services
```bash
yarn start:frontend
```
It starts:
- `web`
- `mobile`


##### Special Notes for Android
React Native Debugging with Android

When running the mobile application on an Android device or emulator, API requests might fail due to localhost connectivity issues. To resolve this, you need to set up adb reverse commands.

Run the following commands:

 Instalar Android Studio

```bash
$env:PATH += ";C:\Users\Usuario\AppData\Local\Android\Sdk\platform-tools"

adb devices 

adb reverse tcp:5000 tcp:5000  # Map Shared BFF API
adb reverse tcp:3001 tcp:3001  # Map Mobile BFF API

yarn start:mobile
```

#### Start Specific Services

| Service            | Command                 |
|--------------------|-------------------------|
| Web Frontend       | `yarn start:web`       |
| Mobile Frontend    | `yarn start:mobile`    |
| Web BFF Backend    | `yarn start:wbff`      |
| Mobile BFF Backend | `yarn start:mbff`      |
| Shared Services    | `yarn start:shared`    |

---

## **Cleaning**

| Command         | Description                                  |
|-----------------|----------------------------------------------|
| `yarn clean:all`| Cleans all `node_modules` and resets project |
| `yarn cache:clean` | Cleans the yarn cache                     |

---

## **Troubleshooting**

### Common Issues

1. **`concurrently not found`**
   - Run `yarn add concurrently -D` or `yarn add concurrently --dev` in the root directory.

2. **Missing `node_modules`**
   - Ensure `yarn install:all` was executed.

3. **React Native Build Errors**
   - Ensure the correct setup for React Native by running:
     ```bash
     npx react-native doctor
     ```

4. **`SDK location not found` (Android build error)**
   - Create the file `frontend/mobileApp/android/local.properties` with your local Android SDK path:
     ```properties
     # Windows
     sdk.dir=C\:\\Users\\<YourUsername>\\AppData\\Local\\Android\\Sdk

     # macOS / Linux
     sdk.dir=/Users/<YourUsername>/Library/Android/sdk
     ```
   - This file is listed in `.gitignore` and must be created manually by each developer.

4. **Port Conflicts**
   - Make sure no other process is using the default ports (e.g., 3000, 5000).

---

## **License**

This project is licensed under the MIT License.
