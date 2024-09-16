import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const app = express();
const server = createServer(app);
const io = new Server(server);
const port = 9000;
const allusers = {}; // to store all the users

// Basically it will tell the projects rootpath , ex : file://your/system/path/file.html will be converted to /your/system/path
const __dirname = dirname(fileURLToPath(import.meta.url));

// exposing public to the outside world
app.use(express.static("public"));

// handle incoming http request
app.get("/", (req, res) => {
  console.log("GET Request /");
  res.sendFile(join(__dirname + "/app/index.html"));
});

// handle socket connections
io.on("connection", (socket) => {
  console.log(
    `Someone connected to Socket Server with Socket ID : ${socket.id}`
  );
  socket.on("join-user", (username) => {
    console.log(`${username} joined socket connection `);
    allusers[username] = { username, id: socket.id };
    // inform all that someone joined socket
    io.emit("joined", allusers);
  });
});

server.listen(port, () => {
  console.log(`Server is Listening on Port ${port}`);
});
