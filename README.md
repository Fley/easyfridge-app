# Easyfridge app

## On the road again

### Routes
- [ ] Load each route asynchronously

### Progressive web app
- [ ] Enable offline access
- [ ] Change the theme of the app when offline (grey)

### i18n
- [ ] Make the component search for a message-{locale}.js in the directory used by the component (So every usage of the intl provider is local to the component using it, ie each high order component has its own messages defined locally).

### Components
#### - [ ] shell.navigation
- [x] i18n

#### - [x] user.sign-up
- [x] i18n: Map and translate all `joi` errors

#### - [ ] authentication.sign-in
- [ ] Reusable form that log in to the app