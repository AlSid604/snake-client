const net = require("net");
const connect = require("../snake-client/client");
// // establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: "135.23.223.133", // IP address here,
//     port: 50542, // PORT number here,
//   });

//   // interpret incoming data as text
//   conn.setEncoding("utf8");

//   return conn;
// };

console.log("Connecting ...");
connect();
