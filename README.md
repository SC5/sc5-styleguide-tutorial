SC5 Styleguide Tutorial
=======================
[![Dependency Status](https://david-dm.org/SC5/sc5-styleguide-tutorial.png)](https://david-dm.org/SC5/sc5-styleguide-tutorial)

This is an example/tutorial styleguide for learning the basics of styleguide driven development.

About the Tutorial
------------------

This tutorial should cover everything you need to try out style guide driven development. We take you through the steps of installing and running style guide, creating a semantic for your project and creating and documenting your styles. Ideally you should have your own project in the back of your head to reflect upon what you learn here but we will provide some ideas for people who want to take the course for the sake of learning.

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

Styleguide Basics
-----------------

The SC5 Styleguide reads your projects LESS/SASS/SCSS/CSS files for KSS notation and hosts an interactive presentation of your styles and their intended uses. For the styleguide to be useful your styles need to be KSS annotated. The styleguide also expects you to provide the compiled CSS output for styling the elements when they are displayed to the user. This way you retain full control over the CSS compilation.

* http://www.w3.org/Style/CSS/
* http://sass-lang.com/
* http://lesscss.org/
* http://warpspire.com/posts/kss/

Semantics of Your Styleguide
----------------------------

When you are creating a styleguide your team needs to agree on how you will contruct your project. Different ways may suit different projects and teams. In this tutorial we familiarize ourselves with an approach inspired by the Philip Walton's essay "CSS Architecture", Brad Frost's "Atomic web design" concept and BEM naming from Yandex.

* http://philipwalton.com/articles/css-architecture/
* http://bradfrost.com/blog/post/atomic-web-design/
* http://bem.info/

