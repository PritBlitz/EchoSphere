import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server);
const port = 9000;

// handle incoming http request
app.get("/", (req, res) => {
  console.log("GET Request /");
  res.send("Hello World");
});

// handle socket connections
io.on("connection", (socket) => {
  console.log(
    `Someone connected to Socket Server with Socket ID : ${socket.id}`
  );
});

app.listen(port, () => {
  console.log(`Server is Listening on Port ${port}`);
});
