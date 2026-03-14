This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) before proceeding. You need: Node.js >= 18, Android Studio, and an AVD emulator configured.

---

## Setup & Run (Windows)

### 1. Habilitar Long Paths en Windows (solo una vez, requiere Administrador)
Abre PowerShell como **Administrador** y ejecuta:
```powershell
New-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\FileSystem" -Name "LongPathsEnabled" -Value 1 -PropertyType DWORD -Force
```

### 2. Instalar dependencias (desde la raíz del monorepo)
```bash
npm install --global yarn
yarn install:all
yarn add concurrently -D
```

### 3. Crear archivo local.properties para Android SDK
Crea el archivo `frontend/mobileApp/android/local.properties`:
```properties
sdk.dir=C\:\\Users\\Usuario\\AppData\\Local\\Android\\Sdk
```

### 4. Iniciar el backend (Terminal 1)
```bash
yarn start:backend
```
Esto levanta:
- **Shared backend** en puerto `5000`
- **Mobile BFF** en puerto `3001`
- **Web BFF** en puerto `3000`

### 5. Configurar adb reverse para el emulador (Terminal 2)
```powershell
$env:PATH += ";C:\Users\Usuario\AppData\Local\Android\Sdk\platform-tools"

adb reverse tcp:3001 tcp:3001
adb reverse tcp:5000 tcp:5000
adb reverse tcp:8081 tcp:8081
```

### 6. Lanzar el emulador
Abre **Android Studio → Device Manager** y lanza el emulador `Pixel_9_2` (o el que tengas configurado).

### 7. Ejecutar la app (Terminal 3)
```bash
cd frontend/mobileApp
npx react-native run-android
```

---

## Si el build falla por rutas largas (CMake error)
Limpia el caché de Gradle y CMake:
```powershell
Remove-Item -Recurse -Force android\.gradle -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force android\app\.cxx -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force android\app\build -ErrorAction SilentlyContinue
```
Luego vuelve a ejecutar `npx react-native run-android`.

## Si el puerto 3001 ya está en uso
```powershell
$p = (Get-NetTCPConnection -LocalPort 3001 -ErrorAction SilentlyContinue).OwningProcess
if ($p) { Stop-Process -Id $p -Force }
```

---

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
