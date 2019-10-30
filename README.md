## Available Scripts

In the project directory, you can run:

### `yarn dev`
Runs `yarn start` and `firebase serve` but requires that you be logged into my firebase account to run locally, and that you have firebase-tools installed.

## `Notes`
I wouldn't quite consider this production ready, though it isn't far off.  There isn't really any error handling, though to be fair I haven't really come across any errors unless I turn off the wifi.  I haven't sanitized any of the text either - I don't think I need to, but I haven't tested extensively.  It's just being stored as a string though and displayed as a string so there shouldn't be any danger.  I would also add some loading states.  Right now everything is so fast that you wouldn't even see a loader, but it would be safer to add one anyway.  The live site is available here: [https://earnup-db7ac.firebaseapp.com](https://earnup-db7ac.firebaseapp.com).


