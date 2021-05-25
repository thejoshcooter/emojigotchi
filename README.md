# Emojigotchi
## by Josh Cooter
## [Twitter](http://www.twitter.com/thejoshcooter) | [Linked In](https://www.linkedin.com/in/joshcooter/) | [Github](http://www.github.com/thejoshcooter)  
<br />

# Description  
Emojigotchi is a classic tamagotchi style game built in React. You can log in via a demo account which gives you access to a dashboard housing data from a mock API that displays a leaderboard and a tracker for all games that you play. Upon starting a game, you will be given an emoji pet - your just is to take care of the pets needs to keep it alive by feeding it, loving it, and putting it to sleep.

# Installation  
- Clone repo to local machine
- `cd` in terminal to local repo location
- `yarn install` or `npm install` 
- `yarn start` or `npm start`

# Technologies
- React
- React Hooks
- React Router w/Hooks
- Styled Components
- Redux
- Redux Middleware
- Custom Mock API

# Overview
![demo](/src/assets/demo.png)  
You can test out the game with the demo account feature that utilizes the frontend mock API.  

![leaderboard](/src/assets/leaderboard.png)
After authentication the user is taken to a dashboard where they can view the current game leaderboard.  

![mygames](/src/assets/mygames.png)
The dashboard also displays a My Game's tracker that provides a history of the users past games (while logged in).  

![game](/src/assets/game.png)
From the dashboard, press the start or resume game button in order to see your pet and play the game. Use the control button located at the bottom to feed, love on, and put your pet to sleep to take care of its needs.  

# Releases
## [CURRENT] v1.0 Features
- Splash page
- Authentication via login or demo account
- Private routing
- Custom mock API on the frontend
- Leaderboard tracker on dashboard
- My Games tracker to display user games on dashboard
- Functional, repeatable game loop built on cycles
- Ability to feed, love, and put pet to sleep
- Custom in game notifications on current pet status
- Mobile responsive

## v1.1 Features
- Add user account creation
- React-spring animations
- UI bug fixes

## v1.2 Features
- Adjust game loop
- Refactor stat system
- Refactor limiter logic

## v1.3 Features
- Add rng drops to game loop

## v2.0 Features
- Node.js + Express backend

## v3.0 Features
- React native build