# react-ads-state-machine
using react for ads component. browserify and gulp

# About the project
This proof of concept aim to build an ads component 
- based on React Lib and using ES6
- have a deploying script bundle the source in one file
- the component display an M-Impact format displaying an image on the right side of the screen using animation

# Installation
just run 

npm install

PS: you may need to install gulp 
npm install gulp --global

to the the projet

open dist/index.html

# Deploy
For deploying the project , i use browserify in gulp file
I use minification files of react and react dom to optimize the bundle

the gulp file have tow task
gulp compress : should compile the bundle in production env.
gulp : should watch the src dir and compile the bundle in dev env.


open dist/index.html

