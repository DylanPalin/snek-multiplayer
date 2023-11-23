#!/usr/bin/env node

process.stdout.write('\x07');

const { Game } = require('./src/Game')
const { UserInterface } = require('./src/UserInterface')
const { RemoteInterface } = require('./src/RemoteInterface')
const { connect } = require("./client");
const game = new Game(new UserInterface(), new RemoteInterface())

const setupInput = function () {
  const stdin = process.stdin;
  stdin.on("data", handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};


const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  } else if (key === '\u001B[A') {
    conn.write("Move: up");
  } else if (key === '\u001B[D') {
    conn.write("Move: left");
  } else if (key === '\u001B[B') {
    conn.write("Move: down");
  } else if (key === '\u001B[C') {
    conn.write("Move: right");
  }
};


// Connect to server

console.log("Connecting ...");
connect();

setupInput();

// Begin game
game.start()

