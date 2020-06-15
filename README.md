# currency-convertor
This is a project demo that uses Vanilla JS to build a Single Page Application.

Tutorial here: https://www.sitepoint.com/single-page-app-without-framework/



There are a few things we should be concerned with in our finished app:

## DOM Performance. 

In our client-side code, we’re directly manipulating the DOM. This can soon get out of hand as the project grows, causing the UI to become sluggish.

## Browser Performance. 

There are quite a number of front-end libraries that we’ve loaded as scripts in index.html, which is okay for development purposes. For production deployment, we need a system for bundling all scripts such that the browsers use a single request for loading the necessary JavaScript resources.

## Monolithic Code. 

For the server code, it’s easier to break down code into modular parts since it runs within a Node environment. However, for client-side code, it’s not easy to organize in modules unless you use a bundler like webpack.

## Testing. 

Some manual testing was done during development. For a production-ready application, we need to set up a testing framework like Jasmine, Mocha or Chai to automate this work. This will help prevent recurring errors.


These are just a few of the many issuesfaced when you approaching project development without using a framework. Using something such as Angular, React or Vue will help you alleviate a lot of these concerns.