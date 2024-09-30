# EchoSphere 🎥💬

**EchoSphere** is a real-time video communication application built using **Socket.io**, **WebRTC**, and a basic **Node.js** backend with **Express**. This app allows users to connect and have video calls across multiple devices, such as phones, desktops, or a combination of both. Using **ngrok**, it can easily function across different devices even when they are on different networks.

## 🚀 Features

- **Real-time Video Calls** 🎦: Video calls between multiple users powered by WebRTC for peer-to-peer connections.
- **Socket.io Integration** 🔄: Enables real-time communication between the server and clients for seamless signaling.
- **Cross-device Compatibility** 📱💻: Works across mobile phones, desktops, and other devices.
- **ngrok Integration** 🌐: Easily expose the local server to a public URL, making the app accessible remotely.
- **Node.js Backend** 🖥️: The backend is built using Node.js and Express, serving the web app and handling signaling.

## 🛠️ Tech Stack

- **Frontend**: WebRTC for handling peer-to-peer video connections.
- **Backend**: Node.js with Express for server logic.
- **Socket.io**: Real-time bidirectional communication.
- **ngrok**: Tunneling tool for exposing the local server to a public URL.

## 📥 Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/PP-meet.git
   cd PP-meet
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   node server.js
   ```

4. To make the server accessible across different devices, use **ngrok**:
   ```bash
   ngrok http 3000
   ```
   You will get a public URL that you can share with other devices.

## 🧑‍💻 How it Works

1. When a user opens the app, it establishes a connection to the server using Socket.io.
2. Users can create a username and call another user who is on different device , or the same .
3. The server facilitates signaling between peers using Socket.io, allowing them to exchange information and establish a WebRTC peer-to-peer connection.
4. WebRTC handles media streams (audio and video) between peers.
5. ngrok allows users on different networks to connect seamlessly without additional configuration.

## ⚙️ Prerequisites

- Node.js and npm
- ngrok (for external device access)

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
