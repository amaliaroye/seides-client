
https://yomomma-api.herokuapp.com/jokes
https://icanhazdadjoke.com/api
`curl -H "Accept: application/json" "User-Agent: My Library (https://github.com/username/repo)" https://icanhazdadjoke.com/`

https://sv443.net/jokeapi/v2/

map:
- tileset
- tilearray

players(users) can interact with items and npcs on a map:
player:
- name
- list of interactions

entity:
- name
- type: npc or item
- can be collected/added to inventory: boolean
- location: [x,y]
- list of possible messages:

interaction:
- player id
- item id/npc id
- message


## Structure

The top-level `App` component stores the currently authenticated
user in state, as well as data related to the flash messages. `App` renders the
`Header` component, and a list of routes, each of which render a component from
`src/components`. The `src/api` directory has a component file, `auth.js`, which
contains all the needed `axios` calls pertaining to authentication.

You can follow this pattern in your app as well. For instance, if you are making
an app that keeps track of books, you might want a `src/api/books.js`, which
contains its own `axios` call pertaining to your books resource CRUD actions.
Using a separate directory within `components` for each individual component you
add makes it easy to locate and update components and has the added benefit of
making it easy to create custom styles that apply to that specific component.
To apply component specific styles, add a file to the component's directory such
as `ComponentName.scss` and then import it directly into the component with
`import './ComponentName.scss'`.  This will keep your styles modularized and
make it easier to make changes at the component level.

### Included Routes

This template comes with a handful of front-end routes that display
different components for user actions.

| Endpoint         | Component | `AuthenticatedRoute`? |
|------------------|-------------------|-------|
| `/sign-up`       | `SignUp`    | No |
| `/sign-in`       | `SignIn`    | No |
| `/change-password` | `ChangePassword`  | Yes |
| `/sign-out`        | `SignOut`   | Yes |

There is no HTTP verb listed because these are all front-end routes handled by
React. Some of these routes should not be available unless a user is signed in,
so they will use the `AuthenticatedRoute` component instead of the regular
`Route`. This custom component is provided as part of the template, and is not
a part of the React library (see more below).

## Features

### `<AuthenticatedRoute />`

This template contains a handy component for creating routes that require a
user to be authenticated before visiting. This component lives in
`src/auth/components/AuthenticatedRoute.js` and is already required in `App`.
It's a thin wrapper around React Router's `<Route />` component. The only
difference is that it expects a prop called `user`, and if that prop is falsy,
it will render a `<Redirect />` that takes the user to `/`. **To use
it, you must pass it the user as a prop!**

It supports both the `component=` and `render=` attributes, but like `<Route />`
it will not forward props to the component if you use `component=`.

### `<AutoDismissAlert />` Component

This template also already contains a component that displays user messages.
Messages are configurable via redux actions.  This component can be found in
`src/components/AutoDismissAlert/AutoDismissAlert.js`. **There is no need to add
this component to your app. It is already required in `App`.**  A single
component instance is used to manage all alerts application-wide.

The alert can be used by passing the `alertMsg` method to a rendered route.  The
`alertMsg` method expects an object with a `heading`, `message`, and a `variant` property.

Use this component in conjunction with the `messages.js` file in the same
directory to create and manage all of your application messages in one place.

The `variant` property must be a Bootstrap alert variant, as this component is merely a
wrapper around the [react-bootstrap Alert
component](https://react-bootstrap.github.io/components/alerts/).  The types it
will accept are: 'primary', 'secondary', 'success', 'danger', 'warning', 'info',
'light', and 'dark'.

 To change the duration of the message, replace `5000` with a value of your
 choice (in milliseconds) in this component's `componentDidMount` method.

### `src/apiConfig.js`

Just like in
[browser-template](https://git.generalassemb.ly/ga-wdi-boston/browser-template),
this file will determine whether you're in a production or development
environment and choose an API URL accordingly. Don't forget to replace the
`production` URL with your deployed API's URL.

### Bootstrap

This template includes two different implementations of the classic Bootstrap
library we know and love.

#### `bootstrap`

The first implementation of Bootstrap comes from the `bootstrap` npm package,
and provides all of the normal Bootstrap classes and styling we were able to
use with the `browser-template`. This package is included in the
`src/index.scss` file at the very top of the file. That means JSX in this
template can utilize Bootstrap classes like `btn`, `container`, `row`, etc.

See an example below:

```jsx
import React from 'react'

const AboutPage = () => (
  <div className="card">
    <div className="card-body">
      <h1 className="card-title">About Page</h1>
      <p className="card-text">There is a Bootstrap card on this page!</p>
    </div>
  </div>
)

export default AboutPage
```

> Note: Remember to use `className` not `class` in your JSX!

#### `react-bootstrap`

In addition to the classic Bootstrap classes we can plug into our JSX, this
template also comes with a special package called [`react-bootstrap`](https://react-bootstrap.github.io/).
This package allows us to use special React components that have been pre-built
according to the Bootstrap library.

Import components from the `react-bootstrap` library, then use them just like
regular components in your JSX!

See an example below:

```jsx
import React from 'react'
import Card from 'react-bootstrap/Card'

const AboutPage = () => (
  <Card>
    <Card.Body>
      <Card.Title>The About Page</Card.Title>
      <Card.Text>There is a Bootstrap card on this page!</Card.Text>
    </Card.Body>
  </Card>
)

export default AboutPage
```
