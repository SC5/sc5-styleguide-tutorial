SC5 Styleguide Tutorial
=======================
[![Dependency Status](https://david-dm.org/SC5/sc5-styleguide-tutorial.png)](https://david-dm.org/SC5/sc5-styleguide-tutorial)

This is an example project and tutorial for learning the basics of styleguide driven development. This tutorial should cover everything you need to try out style guide driven development. We take you through the steps of installing and running style guide, creating a semantic for your project and creating and documenting your styles. Ideally you should have your own project in the back of your head to reflect upon what you learn here but we will provide some ideas for people who want to take the course for the sake of learning.

Table of Contents
-----------------

* [About the Styleguide Generator](#about-the-styleguide-generator)
* [Getting Started](#getting-started)
* [Navigating the Tutorial](#navigating-the-tutorial)

About the Styleguide Generator
------------------------------

The SC5 Styleguide reads your projects [LESS](http://lesscss.org/), [SASS / SCSS](http://sass-lang.com/) or [CSS](http://www.w3.org/Style/CSS/) files and generates documentation for your styles based on some metadata that you need to provide. The metadata needs to be provided in a specific KSS based format. The format is a mixture of the original [KSS](https://github.com/kneath/kss) and the [node-kss](https://github.com/kss-node/kss-node) with some SC5 Styleguide specific [additions](https://github.com/SC5/sc5-styleguide#user-content-documenting-syntax).

Your styleguide will only be as good as the metadata you provide but using a styleguide generator may be a good way of motivating you to write that metadata. The metadata should describe where certain styles are appropriate, what kind of HTML markup should be used to refer the styles and how the different markup can be combined to achieve more complex parts of the user interface. 

Adding all new user interface parts to the style guide first encourages thinking through the user interface and the markup before writing the code. It also makes it possible to review the user interface before the related functionalties are implemented. Finally the provided example markup works as test cases for the styles and their cross platform compatibility can easily be verified by viewing the style guide itself on different devices and screen sizes.

Getting Started
---------------

Before we start you need to install git and npm. See http://git-scm.com/ and https://docs.npmjs.com/ to get git and npm installed. You do not need to become a master of either one. We just need them to setup an example styleguide for you.

You first need to use git to copy all the required files to your computer.
```
git clone https://github.com/SC5/sc5-styleguide-tutorial.git
```

Once the files have downloaded you may change to the tutorial directory and get all dependencies.
```
cd sc5-styleguide-tutorial
npm install
```

If you have not used gulp before you should also install a global gulp to get the gulp command added to your environment.
```
npm install -g gulp
```

Next you need to build the example project. Just running gulp without any arguments will build both the project and the styleguide.
```
gulp
```

The generated project and styleguide should now exist in the build directory. You may examine the styleguide by serving to the browser with some web server software. Here we demonstrate making the files available to http://localhost:8000/ and http://localhost:8000/styleguide/ using the Python SimpleHTTPServer module. However, if you don't have that installed or all of this seems over the top, do not worry, just skip this step and you'll be alright.
```
(cd build; python -m SimpleHTTPServer)
```

To end the SimpleHTTPServer running from the previous step you need to end it first by pressing the c key while holding down the ctrl key. This will print some ugly error messages on the screen. Don't worry. It is to be expected.

Building the project will become tiresome when you are constantly developing styles and markup. Therefore the styleguide has a developer mode with a built-in server that will make the styleguide available at http://localhost:3000/ Try it!
```
gulp dev
```

In development mode styleguide will monitor your changes to the example styles that you can find under src/styles/ in your sc5-styleguide-tutorial directory. User your favourite text editor to modify the scss files. The styleguide should be automatically to match your changes. In case of an error you may find an error message in the console where you are running gulp. You may end the developer mode by pressing the c key while holding down the ctrl key.

Navigating the Tutorial
-----------------------

The tutorial will continue inside the example style guide. Each chapter contains example content, explanations and exercises. The reader adviced to go through the chapters in order studying one chapter at a time, doing the exercises even where they may seem trivial. We hope that the exercises will help the reader remember the essential parts of the tutorial. There is no scoring, there are no exams. You are on your own. Good luck!
