# Getting started with own project
There are many ways to get started with typescript.

In the future we will go into ways of setting up projects for certain objectives such as frontend vuejs project.

For now we will setup a simple ts project, with build for a blank html page.
## Create structure
Create a new folder with the following structure
```
/
  src/
    index.ts
  public/
    index.html
```
## HTML page
Next we will link the JS into the html file.

We will link it to the file that will be built from the Typescript file.

The html page will look as follows
```html
<html lang="en">
    <head>
        <title>My Page</title>
        <script src="./index.js"></script>
    </head>
    <body>
        My page
    </body>
</html>
```
## NPM
Next we will initialise our project. We will assume you have npm installed.

Let's initiate `npm init`

We will then add typescript `npm i typescript`

Next is to add a `tsconfig.json` file to tell typescript how to compile.
We are going to use the following content
```json
{
  "compilerOptions": {
    "target": "ES5",
    "removeComments": true,
    "preserveConstEnums": true,
    "outFile": "./public/index.js",
    "sourceRoot": "./src/",
    "rootDir": "./src/",
    "sourceMap": true
  }
}
```
Here we have set a few things to help.

The first is the outFile tells typescript to compile to the expected JS file from earlier

sourceMap will allow you to look up js flow fromy our browser to your typescript file. Very useful for development

target sets the ES level JS will compile to. We have set it to a low level for browser compatibility reasons. Typescript will handle the polyfilling for us.
## Build command
The last step is to add a build command so we can easily build our TS code into JS

In the `package.json` file we will add the following under the `scripts` section: 

`"build": "tsc"`

Now all you have to do is run the command using `npm run build`