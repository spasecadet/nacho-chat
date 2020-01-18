## Project Description

### Before you get started:
There is a lot of flexibility to this exercise... and it’s intentional. We always appreciate clean,
well-documented code, but we’re also looking to see how you approach problems and make
tradeoffs. We’re just as interested to discuss your design and architecture choices as we are to
see a working app.

### A Basic Chat App
Create a web-based chat application where a user can send and receive messages. It’s up to
you whether this runs client-side or uses a server. You can use whatever technology you feel is
most appropriate (we use React client-side with Node and Python server-side). If you do not
have time to finish an entire application, focus on what you think is most important. We know
you’re busy and appreciate that you’re spending time on this.

### What should the application do?
At the very least there should be a UI for a user to type in and send a message (mocked or
actual) and a UI for another user to see incoming messages. The more real and usable the
application the better. We’ve seen everything from both views running in the same browser to
multi-device chat.

### What about using open source?
Where it makes sense to augment your own code with open source libraries or frameworks, go
for it - just be sure to properly attribute other people’s work.

---

## Available Scripts

In the project directory, you can run:

### `yarn dev`
Runs `yarn start` and `firebase serve` but requires that you be logged into my firebase account to run locally, and that you have firebase-tools installed.

## Notes from Tracy
I wouldn't quite consider this production ready, though it isn't far off.  There isn't really any error handling, though to be fair I haven't really come across any errors unless I turn off the wifi.  I haven't sanitized any of the text either - I don't think I need to, but I haven't tested extensively.  It's just being stored as a string though and displayed as a string so there shouldn't be any danger.  I would also add some loading states.  Right now everything is so fast that you wouldn't even see a loader, but it would be safer to add one anyway.  The live site is available here: [https://earnup-db7ac.firebaseapp.com](https://earnup-db7ac.firebaseapp.com).


