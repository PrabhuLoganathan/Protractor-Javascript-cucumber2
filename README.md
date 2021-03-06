# protractor-tutorial

Runnable tutorials from http://www.protractortest.org/#/tutorial

## Setup

Use npm to install Protractor globally with:

```
npm install -g protractor
```

This will install two command line tools, protractor and webdriver-manager. Try running protractor --version to make sure it's working.

The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with:

```
webdriver-manager update
```

Now start up a server with:

```
webdriver-manager start
```

## Running Tests

Now run the test in the root directory with

```
protractor protractor.conf.js
```

## Jasmine

In order to run the Jasmine tests in the `jasmine` directory, you will need to:

`npm install` OR `yarn`

Start the karma server:

```
karma start
```

And in another terminal in the `jasmine` directory

```
karma run karma.conf.js
```

## linting

```
npm install --global eslint
```
