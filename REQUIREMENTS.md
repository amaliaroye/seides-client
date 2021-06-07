# [Requirements](https://git.generalassemb.ly/ga-wdi-boston/capstone-project/blob/main/requirements.md)

In order to get a satisfactory score, by the time you present your project, you
**must** meet the following requirements:

### Deployment
Be deployed online, where the rest of the world can access it.
1.  [x]  Host on your public Github page, not Github Enterprise.
1.  [x]  Deploy client application on GH pages.
1.  [x]  Deploy server application on Heroku.

### Version Control
Demonstrate using version control by:
1.  [x]  Sharing your work through a git repository hosted on Github.
1.  [x]  Making frequent, cohesive commits dating back to the **first day**
of the project week.
1.  [x]  1 commit on the first day of project week on both repos.
1.  [x]  At least 1 commit every day during project week (not necessarily on both repos).

### Documentation
Produce documentation on Github:
1.  [x] Create 2 Github repos (one for your front-end and one for your back-end)
1.  [x] Pin both repositories on GitHub as a Popular Repository

Both front-end and back-end repos should include README's with:
1.  [ ] An explanation of the what the app does and how it works.
1.  [ ] Complete the repository `Description` field and `Website` field with a meaningful sentence description of the application and link to the live URL
1.  [ ] A link to the other repo
1.  [ ] A link to both deployed sites
1.  [ ] List of technologies used
1.  [x] List unsolved problems which would be fixed in future iterations.
1.  [x] Document your planning, process and problem-solving strategy

Your front-end repo's README should also have:
1.  [ ] Link to wireframes and user stories
1.  [ ] An embedded screenshot of the app
1.  [ ] Set up and installation instructions for front end application

Your back-end repo's README should also have
1.  [ ] Link to Entity Relationship Diagram (ERD).
1.  [ ] A catalog of routes (paths and methods) that the API expects.
1.  [ ] Set up and installation instructions for back end application

### Auth Specifications
1.  [x]  Signup with email, password, and password confirmation.
1.  [x]  Login with email and password.
1.  [x]  Logout when logged in.
1.  [x]  Change password with current and new password.
1.  [x]  Signup and Signin must only be available to not signed in users.
1.  [x]  Logout and Change password must only be available to signed in users.
1.  [ ]  Give feedback to the user after each action's success or failure.
1.  [ ]  All forms must clear after submit success and user sign-out
    - [ ] (Optional) Reset form to initial state on failure

### Client Specifications
1. [x]  Use a front-end Javascript app to communicate with your API (both read and write) and render data that it receives in the browser.
1. [x] Have semantically clean HTML and CSS
1.  [ ] User must be able to create a new resource
1.  [ ] User must be able to update a resource
1.  [ ] User must be able to delete a resource
1.  [ ] User must be able to view a single or multiple resource(s)
1.  [ ] All resource actions that change data must only be available to a signed in user.
1.  [ ] Give feedback to the user after each action's success or failure.
1.  [ ] All forms must clear after submit success or failure
1.  [ ] Protect against Cross-site Scripting

### API Specifications
1.  [ ]  Use Express or Django to build an API.
1.  [ ]  Create at least 4 RESTful routes for handling GET, POST, PUT/PATCH, and DELETE requests for a resource other than User.
1.  [ ]  Have at least 1 resource that has a relationship to User
1.  [ ]  Any actions which change data must be authenticated and the data must be "owned" by the user performing the change or a user determined by an access control list

### DO NOT!!
Your app **must not**:
1. [x]   Delete your repository at any time or start over.
1.  [ ]   Rely on refreshing the page for any functionality.
1.  [ ]   Have any user-facing bugs.
    - [ ] Display non-functional buttons, nor buttons that do not successfully complete a task.
    - [ ] Show actions at inappropriate times (example:  change password form when a user is not signed in).
    - [ ] Forms not clearing at appropriate times (example: sign up form not clearing after success).
1.  [ ]   Use alerts for anything.
1.  [ ]   Display errors or warnings in the console.
1.  [ ]   Display debugging messages in the console.

## Stretch Goals

- Implement user roles and permissions as an [Access Control List](https://en.wikipedia.org/wiki/Access_control_list)
- Utilize a third party API with search functionality and cache results http://apis.io/
- Utilize a new third party python package.
- Utilize an email API like [sendgrid](https://sendgrid.com/) or [mailchimp](https://www.mailchimp.com)
- Utilize a text API like [twilio](https://www.twilio.com/)