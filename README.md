# My Ambitious Final Project.
## That only serves as a reminder that I, indeed, am a failure.

## Links
[Capsone Project](https://git.generalassemb.ly/ga-wdi-boston/capstone-project)
📋 [Requirements](https://git.generalassemb.ly/ga-wdi-boston/capstone-project/blob/main/requirements.md)
📅 [Recommended Schedule](https://git.generalassemb.ly/ga-wdi-boston/capstone-project/blob/main/schedule.md)

[Konva](https://konvajs.org/docs/)

## User Stories: v1
##### 🔒 AUTHENTICATION
  - A new user can sign-up with an email and password,
  - A returning user can sign-in with their email and password
  - A signed in user can choose to sign-out and end their game
  - A signed in user can change their user password

##### 🌍 MAP
  - A user can start a new game to display a map with entities displayed

##### ENTITIES
  - A user can click an entitity to create a new interaction and display one of the entities' random messages
  - A user can view all the interactions they've had in their diary

## User Stories: v2
##### ENTITIES
 - Entities can be either an item or an npc.
 - Items are removed from the map and stored in the player's inventory. They still create an interaction event in the diary?
 - NPCs are not removed from the map and the interaction is stored in the diary

```mermaid
erDiagram

USER ||--o{ PLAYER : owns
GAME ||--|{ NPC : has
GAME ||--|| CHARACTER : has
  
PLAYER {
  email string
  password string
  token string
  name string
  sprite string
  diary array
}
GAME {
  owner playerRef
  map string
  player playerRef
  possible array
  eventsCompleted npcRef
  over boolean
}
NPC {
  name string
  objective string
  objectiveReached boolean
  objectiveResponses array
  points number
}
```



### Routes
Front-end routes - handled by React and React-Router
#### 🔒 Authentication Routes
| Endpoint         | Component | `AuthenticatedRoute`? |
|------------------|-------------------|-------|
| `/sign-up`       | `SignUp`    | No |
| `/sign-in`       | `SignIn`    | No |
| `/change-password` | `ChangePassword`  | Yes |
| `/sign-out`        | `SignOut`   | Yes |


## ER Diagram
```mermaid
  erDiagram

  MAP ||--o{ PLAYER : displays
  ENTITY-NPC }o--o{ PLAYER : interacts
  ENTITY-ITEM }o--o{ PLAYER : interacts
  MAP ||--o{ ENTITY-NPC : generates
  MAP ||--o{ ENTITY-ITEM : generates
  USER ||--|{ PLAYER : owns
  PLAYER ||--o{ INTERACTION : creates


  USER {
    userid id
    username string
    email string
    password string
    scores array
  }
  PLAYER {
    playerid id
    ownerid id
    name string
    inventory array
    interactions array
    spritesheet string
    messages array
  }
  ENTITY-ITEM {
    id id
    name string
    type string
    coordinates array
    scoreModifier number
    isCollectible boolean
    messages array
  }
  ENTITY-NPC {
    id id
    name string
    type string
    coordinates array
    scoreModifier number
    isCollectible boolean
    messages array
    favoriteItems array
    hatedItems array
  }
  INTERACTION {
    id id
    player id
    entity id
    coordinates array
    messageDisplayed string
    result string
    scoreModifier number
    isCollected boolean
    timeItHappened timestamp
  }
  MAP {
    id id
    height number
    width number
    createdAt timestamp
    currentEntities array
  }
```
