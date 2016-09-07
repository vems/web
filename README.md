# VEMS Web

This is the frontend web service for the VEMS project. It has a lightweight server component
for isomorphic rendering and serving the static web assets.

## Technologies

* Universal rendering
* [React](https://github.com/facebook/react)
* [React Router](https://github.com/rackt/react-router)
* [Redux](https://github.com/rackt/redux)
* [React Router Redux](https://github.com/reactjs/react-router-redux)
* [Express](http://expressjs.com)
* [Babel](http://babeljs.io)
* [Webpack](http://webpack.github.io)
* [Webpack Dev Middleware](http://webpack.github.io/docs/webpack-dev-middleware.html)
* [Webpack Hot Middleware](https://github.com/glenjamin/webpack-hot-middleware)
* [Webpack Isomorphic Tools](https://github.com/halt-hammerzeit/webpack-isomorphic-tools)
* [ESLint](http://eslint.org)
* [Mocha](https://mochajs.org/)

## Credits

This repo is based off the amazing [erikras/react-redux-universal-hot-example](https://github.com/erikras/react-redux-universal-hot-example)
boilerplate. There are several major modifications and removals, including:

- adding docker support
- removing the api server (since this is handled by another service)
- removing the example components
- removing bootstrap and font-awesome configs/styles
