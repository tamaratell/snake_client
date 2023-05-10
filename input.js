const { stdin } = require('process');

const handleUserInput = (input, conn) => {
  switch (input) {

    case 'w':
      break;

    case 'a':
      break;

    case 's':
      break;

    case 'd':
      break;

    case 'q':
      console.log("Exiting...");
      conn.end();
      process.exit();

  }
};


//setup interface to play
const setupInput = (conn) => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf-8');
  stdin.resume();
  stdin.on('data', (input) => handleUserInput(input, conn));
  return stdin;
};

module.exports = setupInput;