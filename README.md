# Simple Shopping List (MERN Stack)

![ezgif com-gif-maker 1](https://user-images.githubusercontent.com/37851662/53275550-77569480-36c9-11e9-8f9d-208af86f973d.gif)

Very simple application where you can add and delete items on a list.
The items are updated in MongoDB from mLab.

## Installing

```javascript
// Install dependencies for server & client
npm install && npm run client-install

// Run client & server with concurrently
npm run dev

// Server runs on http://localhost:5000 and client on http://localhost:3000
```

## Built With

This project uses the following technologies:

- [React](https://reactjs.org) and [React Router](https://reacttraining.com/react-router/) for frontend
- [Express](http://expressjs.com/) and [Node](https://nodejs.org/en/) for the backend
- [MongoDB](https://www.mongodb.com/) for the database
- [Redux](https://redux.js.org/basics/usagewithreact) for state management between React components

## Configuration

Make sure to add your own `MONGOURI` from your [mLab](http://mlab.com) database in `config/keys.js`.

```javascript
module.exports = {
  mongoURI: "YOUR_MONGO_URI_HERE"
};
```

## Deployment

For deploying to Heroku, please refer to [this](https://www.youtube.com/watch?v=71wSzpLyW9k) helpful video by TraversyMedia.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## License

This project is licensed under the MIT License
