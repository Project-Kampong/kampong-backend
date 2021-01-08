// Socket.io client
const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');
const roomName = document.getElementById('room-name');
const userList = document.getElementById('users');

const socket = io();

// Get username and room from URL
const { username, room } = Qs.parse(location.search, {
    ignoreQueryPrefix: true
});

// join chatroom
socket.emit('joinRoom', { username, room });

// Get room and users
socket.on('roomUsers', ({room, users}) => {
    outputRoomName(room);
    outputRoomUsers(users);
})

// on receive message from server
socket.on('message', msg => {
    outputMessage(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
});

chatForm.addEventListener('submit', e => {
    e.preventDefault();

    const msg = e.target.elements.msg.value;

    // Emit message to server
    socket.emit('chatMessage', msg);

    // clear input
    e.target.elements.msg.value = '';
    e.target.elements.msg.focus();
});

// output message to DOM
function outputMessage(msg) {
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `<p class="meta">${msg.name} <span>${msg.time}</span></p>
    <p class="text">
        ${msg.body}
    </p>`;
    document.querySelector('.chat-messages').appendChild(div);
}

// output room name to DOM
function outputRoomName(name) {
    roomName.innerText = name;
}

// output room users to DOM
function outputRoomUsers(users) {
    userList.innerHTML = `
        ${users.map(user => `<li>${user.username}</li>`).join('')}
    `;
}
