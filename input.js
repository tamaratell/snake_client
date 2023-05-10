const { stdin } = require('process');
let connection;

//setup interface to play
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf-8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = (data) => {
  switch (data) {

    case 'w':
      connection.write("Move: up");
      break;

    case 'a':
      connection.write("Move: left");
      break;

    case 's':
      connection.write("Move: down");
      break;

    case 'd':
      connection.write("Move: right");
      break;

    case 'q':
      console.log("Exiting...");
      process.exit();

    case '1':
      connection.write("Say: Wassupppp");

  }

};



module.exports = { setupInput };