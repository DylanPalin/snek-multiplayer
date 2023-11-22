#!/usr/bin/env node

process.stdout.write('\x07');

const { Game } = require('./src/Game')
const { UserInterface } = require('./src/UserInterface')
const { RemoteInterface } = require('./src/RemoteInterface')
const { connect } = require("./client");
const game = new Game(new UserInterface(), new RemoteInterface())

// Connect to server

console.log("Connecting ...");
connect();


// Begin game
game.start()

