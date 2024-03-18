<div align="center">
  <img src="https://img.shields.io/badge/-React_Native-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
  <h3 align="center">FitBuddy</h3>
</div>

## 📋 <a name="table">Table of Contents</a>
1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Quick Start](#quick-start)
4. [How to run the application](#how-to-run)
5. [References](#references)


## <a name="introduction">1. Introduction</a>
Workout application, where users can select various workout types, for different muscle groups divided into multiple difficulty levels. This application can help users stay active, by presenting various exercises.

## <a name="tech-stack">2. Tech Stack</a>

- React Native
- Jest
- Expo

## <a name="quick-start">3. Quick start</a>

**Link to the Expo Snack if you want to test the app externally: [FitBuddy Expo Snack](https://snack.expo.dev/@dayynam/fitbuddy---md-final-project)**

## <a name="how-to-run">4. How to run the application</a>
Here is a small section on how to properly prepare the environment, run the application on both emulated and physical devices and run unit tests. 

### Run the app locally

1. Clone the repo or download the zip file 
2. Open the folder using IDE. I was using VS Code, version 1.81.1
3. Now all Node modules can be installed. To do this, open a new terminal and type: 
`npm i`

**IMPORTANT** - Remember to have Node installed on the system. 

4. Now all packages are installed and we can run the Expo server. I was doing this in two ways:

 - 4.1. Running on a physical device
To do this I entered this command in the terminal:

`npx expo start --tunnel`

 - 4.2. Running on emulator
To do this I entered this command in the terminal:

`npx expo start`

Disclaimer - When using this command, I could not run the application on physical devices. 

5. **Follow the next steps only if you are using emulators!** Now when the server is running we can start the Android Studio and Select “Virtual Device Manager”
6. After that, we can select the device and run it
7. If no devices are present, just click “Create Device” and select any device you want. Creating a new emulator is a simple process, so I will omit explaining it here

### Unit tests
Because Expo Snack does not provide a terminal, unit tests can only be run on a local IDE. The process is simple - follow the steps up to and including point 3. in the “Run the app locally” section. At this stage, all dependencies (Node modules) are installed, and the terminal is opened. To run the tests simply put this command in the terminal:

`npx jest`

Now all tests should run


### The Image Paths Script

**IMPORTANT!** This script does not need to be run in the current version of the application. 
The file from which the application gets all image paths is already generated. 
This instruction is more of a reference on how the file was generated in the first place.

Similarly, follow the steps up to point 3. in the “Run the app locally” section, just as for the Unit tests. 
When being in the terminal you need to run this command:

`node .\generateImagePathArray.js`

Now the file called generatedImagePathArray.js is created and from this file, the App.js takes all image sources/paths.


## <a name="references">5. References</a>

<details>
<summary><code>Images</code></summary>

```images
1. Kunz, M. (2023) 10 best arm workouts with dumbbells to sculpt your arms, Runstreet.
Available at: https://www.runstreet.com/blog/arm-workouts-with-dumbbells

2. 10 best leg exercises, according to experts (2023) Forbes.
Available at:https://www.forbes.com/health/fitness/best-exercises-for-leg-workouts/

3. Dickson, J. (2023) The best bodybuilding AB workout for your experience level, BarBend.
Available at: https://barbend.com/bodybuilding-ab-workout/

4. Pinterest. Available at: https://www.pinterest.co.uk/

5. Health News and advice for healthy living - men’s health.
Available at:https://www.menshealth.com/health/

6. gfycat. Available at: https://gfycat.com/ (Accessed: 14 September 2023).

7. D’Arrigo C. (2023) Feeling tired? Practice these 11 energy-boosting yoga poses, YouAligned.
Available at: https://youaligned.com/yoga/yoga-energy-boost/

8. Download Animated Gif (2022) IceGif. Available at: https://www.icegif.com/

9. Editors, Y. (2021) Legs up the wall pose, Yoga Journal.
Available at:https://www.yogajournal.com/poses/legs-up-the-wall-pose-2/

10. GIPHY. Available at: https://giphy.com/

11. Dhar P. (2021) How to get the most out of the Plank.
Available at: https://lifestyle.livemint.com/health/fitness/how-to-get-the-most-out-of-the-plank-1
11624520534323.html

12. Virabhadrasana II: Warrior II pose - yoga (no date) Gaia.
Available at:https://www.gaia.com/article/virabhadrasana-ii-warrior-ii-pose

13. Yoga, B. (2022) One-legged king pigeon pose, Bodhi School of Yoga.
Available at:https://www.bodhischoolofyoga.com/seated-yoga-pose/one-legged-king-pigeon-pose

```
</details>
