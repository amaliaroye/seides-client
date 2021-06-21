![Switching SEIdes](https://i.imgur.com/vljwNkr.png)

# Switching SEIdes

This was the final [Capsone Project](https://git.generalassemb.ly/ga-wdi-boston/capstone-project) inspired by our cohort name the "SEI-des of March," I made a text-based RPG in React that randomly generates a game where you can talk to and interact with other cohort members as well as the instructors!

The name was supposed to be a pun involving career changes and major life decisions through the SEI program, so maybe I will explore that more in the future.

## 🔗 Links

[Deployed Client](https://amaliaroye.github.io/seides-client/)

[Server Repo](https://github.com/amaliaroye/seides-server)
[Deployed Server](https://seides-server.herokuapp.com/)

## 🛸 Technologies

### 💻 Client

- React
- SCSS

### 📡 Server

- Node.js
- Express
- Mongoose
- MongoDB

## 📝 Problems and Planning

- I had a HUGE issue with scope creep before the project began that made the whole project extremely chaotic. In the future, I would like to spend more time planning and making concrete decisions to flesh out ideas before I start hacking at them.

- By far the problem that ate up most of my time spent on this project was on learning how to manage updating state and sending axios calls asynchronously since I learned a state does not update immediately, but in batches. I have not found a proper solution yet, but I did learn much more about React.

## 🔮 Future Features

- I want to implement a very simple css-based side-scroller platform engine I've been working on with animated sprites.

## 📦 Installation

- Fork and clone this repository as well as the [back-end API](https://github.com/amaliaroye/seides-server).
- Make sure you have node and npm installed on your computer
- Run `npm install` in the project directory to install dependencies
- Run `npm start` to start the server on `localhost:7165`

## 🚀 Routes

### 🎮 Game Routes

| Endpoint       | Component    | `AuthRoute` |
| -------------- | ------------ | ----------- |
| `/games`       | `GameIndex`  | Yes         |
| `/games/:id`   | `GamePlay`   | Yes         |
| `/create-game` | `GameCreate` | Yes         |

> Currently, the gameDelete is a dynamic button on each game displayed in GameIndex. I would like to make it into a stand-alone component to help modularize my code better.

### 🔒 Authentication Routes

| Endpoint           | Component        | `AuthRoute` |
| ------------------ | ---------------- | ----------- |
| `/sign-up`         | `SignUp`         | No          |
| `/sign-in`         | `SignIn`         | No          |
| `/change-password` | `ChangePassword` | Yes         |
| `/sign-out`        | `SignOut`        | Yes         |

## 🙎 User Stories

### 🔒 Authentication

- As a new user, I want to be able to enter my name, email, and password to create a new account so I can begin playing the game
- As a returning user, I want to be able to enter my email and password to sign back into my account so I can resume playing a game or create a new game
- As a signed-in user, I want to be able to enter my old password and a new password so I can change the password to my account
- As a signed-in user, I want to be able to sign-out of my account so

### 🎮 Gameplay

- As a signed in user, I want to create a new game so I can begin playing
- As a signed in user, I want to be able to play a game I create
- As the player, I want to be able to see an NPC's request and button with options for possible responses so I can reply the the NPC's request
- As the player, I want to be able to select and click on an option so I can see the NPC's reply to my response

## 📊 Entity Relationship Diagram

![Entity Relationship Diagram](https://i.imgur.com/sfQIKYH.png)

## 📝 Wireframes

> Definitely need to replace this chicken-scratch, but later wireframes ended up being even messier.

![Wireframes](https://i.imgur.com/6ksgeVB.png)
