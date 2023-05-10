const net = require("net");

const connect = () => {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  }
  );

  conn.setEncoding('utf-8');

  console.log("Connecting...");

  conn.on('connect', () => {
    console.log('Connected to server!');
  });

  conn.on('data', (data) => {
    console.log(`Received message: ${data}`);
  });

  return conn;
};

module.exports = connect;