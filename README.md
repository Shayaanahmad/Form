
# Project Title

Authentication Form

# Description

Build a mobile application using React Native with two forms: Sign Up and Login, using Formik for form handling and validation.
## Installation

Ensure Node.js and npm are installed. Check in cmd using:

```bash
 node -v
 npm -v

```
Create a New Expo App with TypeScript
```bash
npx create-expo-app BetterSoftwareApp --template

During the prompt, select TypeScript as the template.
 ```
 Navigate to the Project Directory
```bash
cd BetterSoftwareApp

```
Install Required Dependencies
```bash
npm install formik yup @react-native-async-storage/async-storage @react-navigation/native @react-navigation/stack react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
```
Start the Development Server
```bash
npm start
```
## How To Run

Start Development Server
* Use CMD to start the development server
```bash
npm start
```
Open the App on a Device:

* Open Expo Go on your mobile device (available on App Store/Play Store).
* Scan the QR code displayed in the terminal or the web browser.
## Design Choices

* Modularization: The app is designed with a component-based architecture where each screen (Sign Up and Login) is a separate component.

* Form Handling: Formik was used to manage the form state and validation.

* Yup: Yup was used for schema-based validation.In this case, it was used to validate the email format and password requirements (minimum length, etc.).

* Global State with AsyncStorage: AsyncStorage is used to store the user's email.
## Release History

* 0.0.1
    * The First Release
