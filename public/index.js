// const socket = io();
// const input = document.getElementById('messageInput');
// const sendBtn = document.getElementById('sendBtn');
// const messages = document.getElementById('messages');


// let username = prompt("Enter your name:");
// if (!username) {
//   username = "Anonymous";
// }


// // Generate a random user ID for this session
// const userId = Math.random().toString(36).substr(2, 9);

// sendBtn.addEventListener("click", () => {
//   const msg = input.value;
//   if (msg.trim() !== "") {
//     socket.emit("chat message", { user: username, text: msg });
//     input.value = "";
//   }
// });


// socket.on("chat message", (data) => {
//   const messageWrapper = document.createElement("div");
//   messageWrapper.classList.add("message");

//   if (data.user === username) {
//     messageWrapper.classList.add("sent");
//   } else {
//     messageWrapper.classList.add("received");
//   }

//   // Username (like header)
//   const userElem = document.createElement("div");
//   userElem.classList.add("username");
//   userElem.textContent = data.user;

//   // Message body
//   const textElem = document.createElement("div");
//   textElem.classList.add("text");
//   textElem.textContent = data.text;

//   messageWrapper.appendChild(userElem);
//   messageWrapper.appendChild(textElem);
//   messages.appendChild(messageWrapper);
//   messages.scrollTop = messages.scrollHeight;
// });

// function addMessage(text, type) {
//   const div = document.createElement('div');
//   div.textContent = text;
//   div.classList.add('message', type);
//   messages.appendChild(div);
//   messages.scrollTop = messages.scrollHeight;

// }
