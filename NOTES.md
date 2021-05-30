# Notes
[MDN Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
I want to make a side-scrolling platformer game that's populated with entities like NPCs and
[MDN OffscreenCanvas](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas)

I don't want to use a 2D array as a tileset for the map. This creates a game that has a static viewport and the player moves around.

If I want to make a large background image containing the whole map that moves on user input, and have a limited viewport where the player is static on the screen. How do I work with collision detection and entity interaction?

I can use the HTML canvas, but tutorials I've watched usually also implement confusing game logic like game loops and buffers to save memory so the canvas doesn't have to be completely redrawn on every update. Can I create an svg path that the player can "run on"? Maybe draw and populate the entire map with canvas squares representing the ground, map boundaries, entities, maybe the player? Can I change the background of a canvas element?
[MDN Canvas Paths and SVGs](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths)
[Window.requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)

Making a tileset map might be a good way to learn about animation and movement. I'm still not 100% if there's going to be gravity and a game loop, but we'll see. [requestAnimationFrame](https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/)



## Constants:
tileSize: 16px x 16px
viewport: 256x400
characters:
orientation:
position:

### Components
Event Listener - Controller
: Listens for keyboard inputs, changes state?

Event Handler
: Handles movement of player

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



---

## File Structure
public/ -static assets
src/ - all code, including images supported in React components
utils/ - utilities and helper methods to use project-wide

```
🎮 client/
 ├⎯⎯╴📁 config/
 ├⎯⎯╴📂 public/
 ├⎯⎯╴📁 scripts/
 ├⎯⎯╴📂 src/
 │    ├⎯⎯⎯╴📄 App.js
 │    ├⎯⎯⎯╴📂 api/
 │    │      ├⎯⎯⎯╴📄 auth.js
 │    │      ├⎯⎯⎯╴📄 user.js
 │    ├⎯⎯⎯╴📂 routes/
 │    │      ├⎯⎯⎯╴📄 AuthenticatedRoutes.js
 │    ├⎯⎯⎯╴📂 components/
 │    │      ├⎯⎯⎯╴📂 components/
 │    ├⎯⎯⎯╴📂 utilities/
 │    │      ├⎯⎯⎯╴🎲 randomGenerator.js
 │    ├⎯⎯⎯╴📂 pages/
 │    ├⎯⎯⎯╴📂 layout/
 │    └⎯⎯⎯╴📂 styles/
 │           ├⎯⎯⎯╴📄 index.scss
 │           └⎯⎯⎯╴📄 _variables.scss
 └⎯⎯╴📑 README.md
```

🎮 Controller
: event listener

🧠 Engine
: collision detection

⌛ Game Loop
: rerenders the frame 30x per second?

🎨 Game
: stores and renders map data

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

🔒 🔐 🔑 🔔 🔗 💻 📼 📷 💾
❗️ ❕ ❓ ❔ ➕ ➖ ➗ ⭕ ❌ ✅ ❎ 〰️ 🆔 *️⃣ #️⃣
🥳️ 😊 😢 😡 🤬 👤 👥 💬 💭 👁‍🗨 💡
⌛ ⌚ ⏰ 🔍 🏠 🧲 🚩 🛑 ⛔ 🎒
📍 📌 📎 📄 📄 📑 📜 📦 📁 📂 📖 📇 📅
📩 🎨 🌍
📏 📓 💩
🧠 🎰 🧩 🎲 🛒 🎮 🎧 🗑 📢
🥔 🍩 🍟 🥭 🎁 🤖
🟥🟧🟨🟩🟦🟪⬛️⬜️🟫
🢆🢇
🢅🢄


[React Animated CSS](https://www.npmjs.com/package/react-animated-css)
[React Toastify](https://www.npmjs.com/package/react-toastify)
[Styled Components](https://styled-components.com/)
[React Smooth](https://www.npmjs.com/package/react-smooth)
[Terminal Link](https://github.com/sindresorhus/terminal-link)
[Chalk](https://www.npmjs.com/package/chalk)
[Chalk Animations](https://github.com/bokub/chalk-animation)
[Structuring Apps](https://cheesecakelabs.com/blog/efficient-way-structure-react-native-projects/)
[React Sidescroller](https://github.com/nrobin24/react-sidescroller)
