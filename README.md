Run the app using `yarn start`.

Some architecture choices were made due to the small size of the app:

- A custom store mechanism was implemented using React Context as using Redux was overkill for this small app.
- Normally the helper functions in `./theme` would be moved to a different file.
- The Single contact route Skype, Phone number bar was omitted.
- There are better solutions from (from an UX point of view) when resetting filtering, but the inline message was chosen due to expediency.
- Routes would probably need to be moved to a separate directory>
