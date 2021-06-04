# Notes

### Request Ideas
'I need help fixing up my Neopets page!'
'I'm missing a C U R L Y  B O I somewhere, can you help me find him??'
'I can't find the bug on line 572 in this 84-line file!'
'Is a hot dog a sandwich?'
'Can I ASCII you a question?'
'My document ripped! Will you help me PATCH it?'
'Can you GET me a can of AJAX from the API store?'

### Area Ideas!
418 Tea. Only Tea.
Algo-Rhythm
API Store: AJAX, SOAP

## 💡 Ideas
- RPG or platformer side-scroller with parallax backgrounds game?
- ~~At random intervals, random items have a chance to spawn on the map~~
- When a player gets near an element (NPCs, trash cans, items). The player can then hit the spacebar to interact with the element (pick up item, open )
- ~~Gifting items to NPCs increases your reputation level. A higher reputation level increases the chances NPCs will give you gifts)~~
- ~~NPCs have gift preferences. If they get a gift that they like, the player's reputation increases more than if they got a gift they are neutral about, if they get a gift they dislike, the player's reputation decreases.~~
- ~~Choose a player, start game, collect nodes on our Full stack developer road map? Maybe interactions throughout? 'networking'?~~

## 📝 User Stories
##### 🔒 AUTHENTICATION
  - A new user can sign-up with an email and password,
  - A returning user can sign-in with their email and password
  - A signed in user can choose to sign-out and end their game
  - A signed in user can change their user password
##### 🚶 MOVEMENT
  - Players can start a new game that draws the map of the world with the static NPCs and interactable items
  - Players can use the <kbd>W</kbd> and <kbd>D</kbd> or <kbd>L-Arrow</kbd> and <kbd>R-Arrow</kbd> to move their character sprite around the map
  - When a player is within a certain range of an entity they can interact with, it outlines itself in white to allow it to stand out from the background
##### 🎒 ITEMS
  - If the Player walks over a collectible item, they can pick it up and add it to their inventory
  - Players can view all the items they collect in their inventory
  - Players can interact with a dumpster or trash can to throw away items from their inventory
##### 👤 NPCs
  - Players can chat/interact with NPCs
  - NPCs can respond to a player's interaction with a random message from a list of possible response messages
  - Interactions with NPCs are recorded in your diary
##### 🌍 MAP
  - The map is generated when a new game starts

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

### 🚂 Train of Thought
> I want to make a side-scrolling platformer game that's populated with entities like NPCs and items

> I don't want to use a 2D array as a tileset for the map. This creates a game that has a static viewport and the player moves around.
> If I want to make a large background image containing the whole map that moves on user input, and have a limited viewport where the player is static on the screen. How do I work with collision detection and entity interaction?

> I can use the HTML canvas, but tutorials I've watched usually also implement confusing game logic like game loops and buffers to save memory so the canvas doesn't have to be completely redrawn on every update. Can I create an svg path that the player can "run on"? Maybe draw and populate the entire map with canvas squares representing the ground, map boundaries, entities, maybe the player? Can I change the background of a canvas element?
[MDN Canvas Paths and SVGs](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths)
[Window.requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)

> Making a tileset map might be a good way to learn about animation and movement. I'm still not 100% if there's going to be gravity and a game loop, but we'll see. [requestAnimationFrame](https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/)

> [2D RPG with React Tree Fiber?](https://dev.to/flagrede/making-a-2d-rpg-game-with-react-tree-fiber-4af1), [Repo](https://github.com/coldi/r3f-game-demo), [React Tree Fiber](https://github.com/pmndrs/react-three-fiber)

##### Elements and Features
🗺 A **map** defined with tilesets
🚶‍♂️ A **character** that can be moved with a keyboard
🧱 A **collision** system which prevents to walk into walls or objects
👉 An **interaction** system where pizza can be picked up and it is possible to interact with computers and coffee machines
📽 A **scene** system to move from one room to another

##### Folder/ Architecture:
- core/public: reusable static components
- components: components that hold logics more specific to the current demo.
- entities: describe elements in the game world (Pizza, Plant, Player...). All these elements are `GameObject`.
- `scenes`: represents the different rooms in the game. Scenes are an aggregation of GameObject. In the demo there are two scenes (Office and Other).

##### This dude's component architecture...
```js
  <Game>
    <AssetLoader urls={urls} placeholder="Loading assets ...">
        <SceneManager defaultScene="office">
            <Scene id="office">
                <OfficeScene />
            </Scene>
            <Scene id="other">
                <OtherScene />
            </Scene>
        </SceneManager>
    </AssetLoader>
  </Game>
```
> [Planck.js](https://piqnt.com/planck.js/): 2D JavaScript physics engine for cross-platform HTML5 game development
> Maybe the tileset idea might not be so bad after all?



[MDN Coming in Clutch](https://developer.mozilla.org/en-US/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Scrolling_maps)
[MDN Repo for Tilemaps](https://github.com/mozdevs/gamedev-js-tiles)


### Components
Event Listener - Controller
: Listens for keyboard inputs, changes state?

Event Handler
: Handles movement of player and shifts the background

Game Loop
: a loop that gets input, updates the game state, and will repaint the canvas showing the current view after an update

Tick
: Each step in the game loop

Update Function
: function called on each tick where game logic is checked

Stage
: The main game container to which game entities are added.

Sprite
: An often animated bitmap graphic derived from a larger tiled image of states and steps.

TileMap
: A large graphic created by rendering a matrix of position indexes derived from a smaller set of common tiles.


🎮 Controller: event listener
🧠 Engine: collision detection
⌛ Game Loop: rerenders the frame 30x per second?
🎨 Game: stores and renders map data

---

## File Structure
public/ -static assets
src/ - all code, including images supported in React components
utils/ - utilities and helper methods to use project-wide

```
🎮 client/
📁 config/
📂 public/
📁 scripts/
📂 src/
📄 App.js
📂 api/
📄 auth.js
📄 user.js
📂 routes/
📄 AuthenticatedRoutes.js
📂 components/
📂 components/
📂 styles/
📄 index.scss
📄 _variables.scss
📂 utilities/
🎲 randomGenerator.js
📑 README.md
```
---

## Structure
`App.js`
  - Top level component that stores the currently authenticated user in state, as well as data related to the flash messages.
  - `App` renders the `Header` component, and a list of routes, each of which render a component from `src/components`.
  - The `src/api` directory has a component file, `auth.js`, which contains all the needed `axios` calls pertaining to authentication.

### React Tips!
- Aim for "dumb", stateless components:
  - They're easier to work with, less buggy and easier to test!
  - Avoid large render methods!
- Use [prop-type](https://www.npmjs.com/package/prop-types)!
- React has a fake dom?

### Stand-Alone Javascript Modules
Random Number Generator

## Links
[MDN Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
[MDN OffscreenCanvas](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas)

[React Animated CSS](https://www.npmjs.com/package/react-animated-css)
[React Toastify](https://www.npmjs.com/package/react-toastify)
[Styled Components](https://styled-components.com/)
[React Smooth](https://www.npmjs.com/package/react-smooth)

[SCSS File Organization](https://matthewelsom.com/blog/simple-scss-playbook.html)
[Chalk](https://www.npmjs.com/package/chalk) [Chalk Animations](https://github.com/bokub/chalk-animation) [Terminal Link](https://github.com/sindresorhus/terminal-link)
[Structuring Apps](https://cheesecakelabs.com/blog/efficient-way-structure-react-native-projects/)
[React Sidescroller](https://github.com/nrobin24/react-sidescroller)
[MelonJS](http://melonjs.github.io/melonJS/docs/)
## Public APIs
[Joke API](https://sv443.net/jokeapi/v2/)
[Yo Momma Jokes API](https://yomomma-api.herokuapp.com/jokes)
[Dad Joke API](https://icanhazdadjoke.com/api)



### Critic Markup
Addition {++ ++} (markdown-writer:toggle-addition-text)
Deletion {-- --} (markdown-writer:toggle-deletion-text)
Substitution {~~ ~> ~~} (markdown-writer:toggle-substitution-text)
Comment {>> <<} (markdown-writer:toggle-comment-text)
Highlight {== ==}{>> <<} (markdown-writer:toggle-highlight-text)

⸻

### Symbols!
[coolSymbol](https://coolsymbol.com/)
[Symbol Copy](https://www.symbolcopy.com/arrow-symbol.html)
[fSymbols](https://fsymbols.com/all/)

🦺 Under Construction

❗️ ❕ ❓ ❔ ➕ ➖ ➗ ⭕ ❌ ✅ ❎ 〰️ 🆔 *️⃣ #️⃣
🔒 🔐 🔑 🔔 🔗 💻 📼 📷 💾
📄 📄 📑 📜 📦 📁 📂 📖 📇 📅 ✉️ 📩
⌛ ⌚ ⏰ 🔍 🏠 🧲 🚩 🛑 ⛔ 🎒
📍 📌 📎
🥳️ 😊 😢 😡 🤬 👤 👥 💬 💭 👁‍🗨 💡
📩 🎨 🌍 📏 📓 💩
🧠 🎰 🧩 🎲 🛒 🎮 🎧 📢
🥔 🍩 🍟 🥭 🎁 🤖
🟥🟧🟨🟩🟦🟪⬛️⬜️🟫
🢆🢇
🢅🢄

```
scss/                               # Import all ‘-dir.scss’ files
|
|- abstracts/
|	|- __abstracts-dir.scss     # Import all abstracts .scss files
|	|- _fonts.scss              # Font Import
|	|- _mixins.scss             # Scss Mixins
|	|- _variables.scss          # Scss Variables
|
|- base/
|	|- __base-dir.scss          # Import all base .scss files
|	|- _reset.scss              # Custom Reset/Normalize
|	|- _typography.scss         # Typography Rules
|
|- components/
|	|- __components-dir.scss    # Import all components .scss files
|	|- _button.scss             # Button Styles
|	|- _input.scss              # Input Styles
|	|- _modal.scss              # Modal Styles
|
|- layouts/
|	|- __layouts-dir.scss       # Import all layouts .scss files
|	|- _footer.scss             # Footer Styles
|	|- _main-navigation.scss    # Main Navigation Styles
|
|- vendor/
|	|- __vendor-dir.scss        # Import vendor folders
|	|- bourbon/                 # Bourbon
|	|- fontawesome/             # Font Awesome
|	|- neat/                    # Bourbon Neat
|	|- normalize/               # Normalize
|
`styles.scss                        # Main Scss File
```
