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
git clone https://github.com/jsdeveloperr/backend-for-frontend-architecture.git
cd backend-for-frontend-architecture
   ```
Run the following command to install dependencies for all projects:
```bash
yarn install:all
```
This executes:
```bash
make install
```
which installs dependencies for each subproject (web, mobile, shared, etc.).

---

### 3. Clean Project

To clean all `node_modules` and reset the project:
```bash
yarn clean:all
```
This runs:
```bash
make clean
```

To clean the yarn cache:
```bash
yarn cache:clean
```

---

## 🛠 **Development**

### Start All Services

#### 1. Backend Services
```bash
yarn start:backend
```
This runs:
```bash
make start-backends
```
It starts:
- `shared`
- `web-bff`
- `mobile-bff`

#### 2. Frontend Services
```bash
yarn start:frontend
```
This runs:
```bash
make start-frontends
```
It starts:
- `web`
- `mobile`


##### Special Notes for Android
React Native Debugging with Android

When running the mobile application on an Android device or emulator, API requests might fail due to localhost connectivity issues. To resolve this, you need to set up adb reverse commands.

Run the following commands:

```bash
adb reverse tcp:5000 tcp:5000  # Map Shared BFF API
adb reverse tcp:3001 tcp:3001  # Map Mobile BFF API
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

4. **Port Conflicts**
   - Make sure no other process is using the default ports (e.g., 3000, 5000).

---

## **License**

This project is licensed under the MIT License.