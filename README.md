# Notes by client and category

> **Note**: Was built with node 20 and ruby 3.1.4

## install/run

```bash
# using npm
npm install

# for IOS install
cd ios && pod install

# for Android install
# you may need to add a local.properties file
# in the android folder
# in the case you do the line its something like
# sdk.dir = /Users/<USERNAME>/Library/Android/sdk


# run ios
npm run ios

# run android
npm run android
```

## Task

- Create a simple note-taking app in roughly 2 hours ✅
- Users should be able to create different notes and link them to a client and a category. ✅
- The client and category data should be stored in a JSON file. ✅
- The main page of the app should display a FlatList of all existing notes or show a message if there are none. ✅
- The available categories to choose from are "Goal Evidence," "Support Coordination," and "Active Duty." ✅
- The app should have a button to add new notes. When adding a new note, the user should be able to select a client, choose a category, and enter the note text. ✅
- All notes should be stored in local memory and persisted so that they are not lost when the user closes and reopens the app. ✅
- Users should be able to edit and delete notes as needed. ✅

<img src="https://github.com/right4mat/notes/assets/55075658/f2054b8d-0040-47e5-9571-51368f0aad5a"  width="23%"/>
<img src="https://github.com/right4mat/notes/assets/55075658/ad0699fc-bf00-459e-9fba-c3d313d6c20d"  width="23%"/>
<img src="https://github.com/right4mat/notes/assets/55075658/6c129470-560e-4740-ad67-c838cf664a70" width="23%"/>
<img src="https://github.com/right4mat/notes/assets/55075658/3d752468-91c9-41bc-b63f-d9e654945452" width="23%"/>


- Dark mode

<img src="https://github.com/right4mat/notes/assets/55075658/52176575-c866-46cd-ba7a-a06a3515a175" width="23%"/>
<img src="https://github.com/right4mat/notes/assets/55075658/2fcae40e-ed5c-4fb7-9a87-a8bbaede7afa" width="23%"/>
<img src="https://github.com/right4mat/notes/assets/55075658/d825f78b-1438-461d-853f-d5beccf146d8" width="23%"/>

## Todo (tried to keep to the 2 hours)

- Should have delete function on both edit and list screens
- Should have some simple filtering
- Splash screen
- App icon
- general clean up of the code
