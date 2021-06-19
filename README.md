# Switching SEIdes

This is a React application

---

## Table of Contents

---

## Links

[Deployed Client](https://amaliaroye.github.io/seides-client/)

[Server Repo](https://github.com/amaliaroye/seides-server)
[Deployed Server](https://seides-server.herokuapp.com/)

## Background

[Capsone Project](https://git.generalassemb.ly/ga-wdi-boston/capstone-project)

---

## Screenshots

![Switching SEIdes](https://i.imgur.com/vljwNkr.png)

---

## Installation

- Fork and clone this repository. You will need node and npm installed globally on your machine.
- Run `npm install` in the project directory to install dependencies
- Run `npm start` to start the server on `localhost:7165`

---

## Technologies

### Client

- React

### Server

- Node.js
- Express

---

## Routes

### 🎮 Game Routes

| Endpoint       | Component    | `AuthRoute` |
| -------------- | ------------ | ----------- |
| `/games`       | `GameIndex`  | Yes         |
| `/games/:id`   | `GamePlay`   | Yes         |
| `/create-game` | `GameCreate` | Yes         |

### 🔒 Authentication Routes

| Endpoint           | Component        | `AuthRoute` |
| ------------------ | ---------------- | ----------- |
| `/sign-up`         | `SignUp`         | No          |
| `/sign-in`         | `SignIn`         | No          |
| `/change-password` | `ChangePassword` | Yes         |
| `/sign-out`        | `SignOut`        | Yes         |

---

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

---

## Entity Relationship Diagram

![Entity Relationship Diagram](https://i.imgur.com/sfQIKYH.png)

---

## Wireframes

![Wireframes](https://i.imgur.com/6ksgeVB.png)
